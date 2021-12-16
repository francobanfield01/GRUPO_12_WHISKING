const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../database/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
const writeJson = dataBase => {
	fs.writeFileSync(productsFilePath, JSON.stringify(dataBase), 'utf-8')
}

let controller = {
    detail: (req, res) => {
        res.render('products/productDetail', { title: 'Detalle de producto', img: 'src="../images/logo.svg"', img2:'src="../images/logo2.svg"'});

    },
    create:(req, res) =>{
        res.render('products/productCreate', { title: 'Crear producto', img3: 'src="../images/logoCobre.svg"', img4:'src="../images/isologoCobre.svg"'});

    },
   
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
			image: "default-image.png"
		}
		
		products.push(newProduct)  // Agrega el objeto al final del array(JSON)

		writeJson(products)   // Sobreescribe el JSON modificado

		res.redirect('/') // Redirecciona al index
    
	},

     /* Update - Form to edit */
     edit: (req, res) => {
		let productId = +req.params.id; // Capturo el id desde la url y la almaceno en una variable
		let productToEdit = products.find(product => product.id === productId); // Busco el producto que tenga el mismo id que el parametro del url.

        res.render('products/productEdit', { title: 'Editar producto', img3: 'src="../images/logoCobre.svg"', img4:'src="../images/isologoCobre.svg"', product : productToEdit});
    },

    /* Update - method */
    update: (req, res) => {

    }
}

module.exports = controller;

