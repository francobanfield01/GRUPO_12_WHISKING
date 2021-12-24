const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../database/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

let controller = {
    index: (req, res) => {
        let productsInsale = products.filter(product => product.category === "Single Malt")
        let productsStandOut = products.filter(product => product.category === "Japonés")
       
        res.render('index', {
            productsInsale,
            productsStandOut,
            toThousand,
            title: 'Home'

});
    },
    cart: (req, res) => {
        res.render('productCart', { title: 'Carrito de Compras', img: 'src="images/logo.svg"', img2: 'src="images/logo2.svg"' });
    }
}

module.exports = controller;