const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../database/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
const writeJson = dataBase => {
	fs.writeFileSync(productsFilePath, JSON.stringify(dataBase), 'utf-8')
}
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "."); /* funcion para poner los puntos a miles */
	
let controller = {
	// Root - Show all products
	index: (req, res) =>{
		res.render('productsList', {
			products,
			toThousand
			
		})
	},

	// Detail - Detail from one product
    detail: (req, res) => {
		let productId  = +req.params.id;
		let product = products.find(product => product.id === productId)

		res.render('products/productDetail', {
			product,
			toThousand/* , 
			title: `Detalle Producto: ${product.name}` */ // no funciona para edit
		})
	},
	// Create - Form to create
    create:(req, res) =>{
        res.render('products/productCreate');
    },
   // Create -  Method to store
    store: (req, res) => {
		const { name, price, discount, category, description } = req.body;
		let lastId = 1;
		products.forEach(product => {
			if(product.id > lastId) {
			lastId = product.id
			}
		});

		let newProduct = {
			id: lastId +1,
			name,
			price: +price,
			discount: +discount,
			category,
			description,
			image: "default-image.png" //----falta multer
		}
		
		products.push(newProduct)  // Agrega el objeto al final del array(JSON)

		writeJson(products)   // Sobreescribe el JSON modificado

		res.redirect('/') // Redirecciona al index---//¿no deberia reenviar dónde estan todos los productos res.redirect('/products)?
    
	},

     // Update - Form to edit 
    edit: (req, res) => {
		let productId = +req.params.id; // Capturo el id desde la url y la almaceno en una variable
		let productToEdit = products.find(product => product.id === productId); // Busco el producto que tenga el mismo id que el parametro del url.

        res.render('products/productEdit', { // hacemos render del formulario y como 2do parámetro que es el que acabamos de encontrar
			 product : productToEdit,
			 toThousand/* , 
			 title:`Editar Producto: ${product.name}`  */ // no funciona para edit
		});
			
    },


    // Update - Method to update 
    update: (req, res) => {
		let productId = +req.params.id; // asi capturamos todos los datos del body, lo traemos del edit al codigo. Ahi tenemos el id de producto

		const {name, price, discount, category, description} = req.body;

		products.forEach(product => { // recorremos cada uno de los elementos
			if (product.id === productId){
				product.id = product.id, // al product.id le decimos que se mantenga el mismo
				product.name = name.trim(), // elimina los espacios en blanco
				product.price = +price, //metodo number() pero con +
				product.discount = +discount,				
				product.description = description.trim()
				if(req.file){
					if(fs.existsSync('./public/images/products', product.image)){
						
						fs.unlinkSync(`./public/images/products/${product.image}`)
					}else{
						console.log('No encontró el archivo');
					}
					product.image = req.file.filename
				}else {
					product.image = product.image
				}

			} //aca ya esta modificado el array de productos sobre el producto que queria editar  

		})
		writeJson(products); //y ahora directamente usamos el writeJson le vamos a decir que le vamos a pasar el array de productos 

		/* res.redirect(`/products/detail/${productId}`)   y un res.redirect que redireccione al detalle del producto que acabo de editar para ver que editó, utilizando el template string `` de js, de esta forma le vamos a pasar el productId la variable que me esta guardando el id params*/
		res.render(`/products/edit/${product.id}`/* ,{
			title:`Actualizar Producto: ${product.name}`
		} */) //no funciona para edit

	

    },

	// Delete - Delete one product from DB
	destroy : (req, res) => { /*  */
		
		let productId = +req.params.id; /* capturamos el id */

		products.forEach(product => { /* recorremos el array para preguntar si el product.id si coincide con el req.params.id */
			if(product.id === productId){ /* bloque de eliminacion de imagenes en products */
				if(fs.existsSync('./public/images/products/', product.image)){
					fs.unlinkSync(`./public/images/products/${product.image}`)

				}else{
					console.log('No encontró el archivo');

				}

				let productToDestroyIndex = products.indexOf(product)  /* creamos una variable dónde guardamos el producto a eliminar index porque es el indice lo que se va a guardar, recorror el array de productosy al array de productos le aplicamos el metodo indexOf que me trae el indice dentro de ese array del elemento que yo estoy buscando, que lo voy a pasar por parametro, qué elemento el elemento que estoy recorriendo con el foreach(product), aca lo que voy a obtener es si el indice(posicion dentro del array), si encuentra el elemento dentro del array me va a devolver el indice, sino me devuelve -1.     */
				if (productToDestroyIndex !== -1){
					products.splice(productToDestroyIndex, 1)
				}else{  //primer parametro es el indice del elemento a borrar, el  2do la cantidad de elementos
					console.log('no encontre el producto')
				}    
			}
		})

		writeJson(products);
	/* 	res.send(`has elimindo el producto con id ${productId}`) */
	res.redirect('/products')


	}


}

module.exports = controller;



