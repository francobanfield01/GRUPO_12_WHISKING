const fs = require('fs');
const db = require('../database/models')
const Sequelize = require('sequelize')
const Op = Sequelize.Op
/* let { products } = require('../database/dataBase') */

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

let controller = {
    index: (req, res) => {
        let productsInSale = db.Product.findAll({
            include: [{ association: 'images' }],
            where: {
                discount : { [db.Sequelize.Op.gt] : 0}
            }
        })
        let productsNews = db.Product.findAll({
            include: [{ association: 'images' }],
            where: {
                categoryId : 6
            }
        })
        Promise.all([productsInSale, productsNews])
        .then(([productsInSale, productsNews]) => {
            res.render('index', {
                productsInSale,
                productsNews,
                toThousand,
                title: 'Home - The  WhisKING Argentina',
                session: req.session
            })
        })
        /* let productsInsale = products.filter(product => product.category === "Single Malt")
        let productsStandOut = products.filter(product => product.category === "Japonés")
       
        res.render('index', {
            productsInsale,
            productsStandOut,
            toThousand,
            title: 'Home - The  WhisKING Argentina',
            session: req.session */
            


    },
    cart: (req, res) => {
        res.render('productCart', 
        { title: 'Carrito de Compras', 
        img: 'src="images/logo.svg"', 
        img2: 'src="images/logo2.svg"', 
        session: req.session });
    }
}

module.exports = controller;