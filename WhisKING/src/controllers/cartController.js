/* este controlador que es una api(podia haber puesto en una carpeta api ) en lugar de mandarme datos a una vista lo que devuelve es informacion, como lo suelen hacer las apis */
const db = require('../database/models')
module.exports = {
    show: async(req,res)=>{
        if(!req.session.cart){
            return res.status(500).json({
                ok : false,
                msg : 'Comuníquese con el administrador!'
            })
        }

        let response = {

            ok : true,
            meta : {
                
                total : req.session.cart.length 
            },
            data : req.session.cart
        }
        return res.status(200).json(response)

    },
    add : async (req, res) => {
        try {
            let product = await db.Product.findByPk(req.params.id, {
                include : [{
                    all : true
                }]
            });

            const { id, name, price, discount} = product;

            let item = {

                id,
                name,
                price,
                discount,
                image : product.images[0],
                amount : 1,  /* amount * price */
                total :price
            }

           /*  if(!req.session.cart){
                req.session.cart = []
            }  */   
            req.session.cart.push(item)

            console.log('>>>>>>',product);

          /*  console.log(req.session.cart); */

            let response = {

                ok : true,
                meta : {
                    
                    total : req.session.cart.length 
                },
                data : req.session.cart
            }
            return res.status(200).json(response)
    
        } catch (error) {
            console.log(error)
        }
    }
}