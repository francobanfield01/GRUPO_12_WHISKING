const fs = require('fs');
let { products } = require('../database/dataBase')

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

let controller = {
    index: (req, res) => {
        let productsInsale = products.filter(product => product.category === "Single Malt")
        let productsStandOut = products.filter(product => product.category === "Japonés")
       
        res.render('index', {
            productsInsale,
            productsStandOut,
            toThousand,
            title: 'Home - The  WhisKING Argentina',
            session: req.session

});
    },
    cart: (req, res) => {
        res.render('productCart', { title: 'Carrito de Compras', img: 'src="images/logo.svg"', img2: 'src="images/logo2.svg"', session: req.session });
    }
}

module.exports = controller;