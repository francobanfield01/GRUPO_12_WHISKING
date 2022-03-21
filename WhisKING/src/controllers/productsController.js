//let { products , writeProductsJSON } = require('../database/dataBase')
const fs = require('fs');
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "."); /* funcion para poner los puntos a miles */
let db = require('../database/models')
const { validationResult } = require("express-validator")




let controller = {
	//Listado de todos los productos.
	list: (req, res) => {     
		db.Product.findAll({
			include: [{ association: 'images' }]
		})
			.then(products => {
				//res.send(products)
				res.render('products/productsList', {
					products,
					toThousand,
					session: req.session
				})
			})
	},

	// Detail - Detail from one product
	detail: (req, res) => {
		db.Product.findByPk(req.params.id, {
			include: [{ association: 'images' }]
		})
			.then(product => {
				res.render('products/productDetail', {
					product,
					session: req.session,
					toThousand
				})
			}
			)
	},
	// Create - Form to create
	create: (req, res) => {     //iria a admin/products/adminProducts
		db.Category.findAll()
			.then(categories => {
				res.render("products/productCreate", {
					session: req.session,
					categories
				});
			})
			.catch(err => console.log(err))
		//res.render('products/productCreate', {
		//session: req.session
		//});
	},
	// Create -  Method to store
	store: (req, res) => {		//admin/products/admintProductsCreateForm

		let errors = validationResult(req)
		let arrayImages = []
		if (req.files) {
			req.files.forEach(image => {
				arrayImages.push(image.filename)
			})
		}
		const { name, price, discount, description, tasting, origin, stock, category } = req.body
		if (errors.isEmpty()) {

			db.Product.create({
				name,
				price,
				discount,
				description,
				tasting,
				origin,
				stock,
				categoryId: +category

			})
				.then(result => {
					if (result) {
						if (arrayImages.length > 0) {
							let images = arrayImages.map(image => {
								return {
									name: image,
									productId: result.id
								}
							})
							db.Image.bulkCreate(images)
								.then(() => {
									res.redirect('/')
								})
								.catch(err => console.log(err))
						} else {
							db.Image.create({
								name: "default-image.png",
								productId: result.id
							})
						}
					}
				})
				.catch(err => console.log(err))
		} else {
			db.Category.findAll()
				.then(categories => {
					res.render("products/productCreate", {
						session: req.session,
						categories,
						errors: errors.mapped(),
						old: req.body
					});
				})
				.catch(err => console.log(err))
		}

		/*
		let lastId = 1;
		products.forEach(product => {
			if(product.id > lastId) {
			lastId = product.id
			}
		});

		const { name, price, discount, category, description } = req.body;
		
		let newProduct = {
			id: lastId + 1,
			name,
			price: +price,
			discount: +discount,
			category,
			description: description.trim(),
			image: req.file ? [req.file.filename] : ["default-image.png"]
		}
		
		products.push(newProduct)  // Agrega el objeto al final del array(JSON)

		writeProductsJSON(products)   // Sobreescribe el JSON modificado

		
		res.redirect(`/products/detail/${lastId + 1}`)  */
	},

	// Update - Form to edit 
	edit: (req, res) => {

		let product = db.Product.findByPk(req.params.id)
		let categories = db.Category.findAll()
		Promise.all([product, categories])
			.then(([product, categories]) => {
				res.render("products/productEdit", {
					product,
					categories,
					toThousand,
					session: req.session,
					title: `Editar producto: ${product.name}`
				})
			})

		/*
		let productId = +req.params.id; // Capturo el id desde la url y la almaceno en una variable
		let productToEdit = products.find(product => product.id === productId); // Busco el producto que tenga el mismo id que el parametro del url.

		res.render('products/productEdit', {  // hacemos render del formulario y como 2do parámetro que es el que acabamos de encontrar
			product: productToEdit,
			toThousand,
			session: req.session /* , 
			 title:`Editar Producto: ${product.name}`   // no funciona para edit
		}); */

	},


	// Update - Method to update 
	update: (req, res) => {
		//let productId = +req.params.id; // asi capturamos todos los datos del body, lo traemos del edit al codigo. Ahi tenemos el id de producto

		const { name, price, discount, description, tasting, origin, stock, category } = req.body
		let errors = validationResult(req);

		if (errors.isEmpty()) {
			let arrayImages = []
			if (req.files) {
				req.files.forEach(image => {
					arrayImages.push(image.filename)
				})
			}
			db.Product.update({
				name,
				price,
				discount,
				description,
				tasting,
				origin,
				stock,
				categoryId: +category
			}, {
				where: {
					id: +req.params.id
				}
			})
				.then(() => {

					if (arrayImages.length > 0) {
						db.Image.findAll({
							where: {
								productId: +req.params.id
							}
						})
							.then(images => {
								images.forEach(image => {
									fs.existsSync('./public/images/products/', image.name)
										? fs.unlinkSync(`./public/images/products/${image.name}`)
										: console.log('No se encontró el archivo')
								})
								db.Image.destroy({
									where: {
										productId: +req.params.id
									}
								})
									.then(() => {
										let images = arrayImages.map(image => {
											return {
												name: image,
												productId: +req.params.id
											}
										})
										db.Image.bulkCreate(images)
											.then(() => {
												res.redirect(`/products/detail/${req.params.id}`)
											})
											.catch(err => console.log(err))
									})

							})

					} else {
						res.redirect("/")
					}
				})
		} else {
			let product = db.Product.findByPk(req.params.id)
			let categories = db.Category.findAll()
			Promise.all([product, categories])
				.then(([product, categories]) => {
					res.render("products/productEdit", {
						product,
						categories,
						toThousand,
						session: req.session,
						errors: errors.mapped(),
						old: req.body,
						title: `Editar producto: ${product.name}`
					})
				})
		}
		/*products.forEach(product => { // recorremos cada uno de los elementos

			if (product.id === productId) {
				product.id = product.id, // al product.id le decimos que se mantenga el mismo
					product.name = name.trim(), // elimina los espacios en blanco
					product.price = +price, //metodo number() pero con +
					product.discount = +discount,
					product.category = category.trim(),
					product.description = description.trim()
				if (req.file) {
					if (fs.existsSync('./public/images/products', product.image) && (product.image !== "default-image.png")) {

						fs.unlinkSync(`./public/images/products/${product.image}`)
					} else {
						console.log('No encontró el archivo');  //
					}
					product.image = req.file.filename
				} else {
					product.image = product.image
				}

			} //aca ya esta modificado el array de productos sobre el producto que queria editar  

		})

		writeProductsJSON(products); //y ahora directamente usamos el writeJson le vamos a decir que le vamos a pasar el array de productos 


		res.redirect(`/products/${productId}/edit/`) //res.redirect('/products')


*/
	},

	// Delete - Delete one product from DB
	destroy: (req, res) => {
		db.Image.findAll({
			where: {
				productId: +req.params.id
			}
		})
			.then(images => {
				images.forEach(image => {
					fs.existsSync('./public/images/products/', image.name)
						? fs.unlinkSync(`./public/images/products/${image.name}`)
						: console.log('No se encontró el archivo')
				})
				db.Image.destroy({
					where: {
						productId: +req.params.id
					}
				})
			})
			.then(() => {
				db.Product.destroy({
					where: {
						id: +req.params.id
					}
				})
			.then(() => {
				res.redirect('/')
			})
			.catch((err => console.log(err)))
		})

	}


}

module.exports = controller;



