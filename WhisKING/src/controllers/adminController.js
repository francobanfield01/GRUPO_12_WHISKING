const db = require('../database/models')
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "."); /* funcion para poner los puntos a miles */
const { Op } = require('sequelize')

module.exports = {
    index : (req,res) => {

        db.Product.findAll({
            include : [{
                all : true
            }]
        }).then(products => {
            return res.render('admin',{
                products,
                toThousand 
            })

        }).catch(error => console.log(error))

    },
    getlAllProducts : async (req,res) => {
        console.log(req.query)
        let offset = 10 * (+req.query.current -1) ; //calculo cuantos items tengo que saltar
        try {
       
                var products = await db.Product.findAll()
                var filter = await db.Product.findAll({
                    limit : 10,
                    offset : offset || 0,
                    include : ['category','images']
                })
            
            console.log(products.length)
            let response = {
                status : 200,
                meta : {
                    cantidad : products.length,
                    limit : filter.length,
                },
                data : filter
            }
            return res.status(200).json(response)
        } catch (error) {
            console.log(error)
           res.status(500).json({
               msg : 'Comunicate con el administrador del sitio!!'
           })
        }
    },
    getProductBySearch : async (req,res) => {
        console.log(req.query)
        let offset = 10 * (+req.query.current -1) ; //calculo cuantos items tengo que saltar
        try {
       
                var products = await db.Product.findAll()
                var filter = await db.Product.findAll({
                    where: {
                        name: {
                            [Op.substring] : req.query.filter
                        }
                    },
                    limit : 10,
                    offset : offset || 0,
                    include : ['category','images']
                })
            
            console.log(filter)
            let response = {
                status : 200,
                meta : {
                    cantidad : products.length,
                    limit : filter.length,
                },
                data : filter
            }
            return res.status(200).json(response)
        } catch (error) {
            console.log(error)
           res.status(500).json({
               msg : 'Comunicate con el administrador del sitio!!'
           })
        }
    },
}