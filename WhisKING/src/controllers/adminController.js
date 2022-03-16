const db = require('../database/models')
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "."); /* funcion para poner los puntos a miles */

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

    }
}