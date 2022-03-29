/* este controlador que es una api(podia haber puesto en una carpeta api ) en lugar de mandarme datos a una vista lo que devuelve es informacion, como lo suelen hacer las apis */
const db = require('../database/models');

const productVerify = (carrito,id) => {
    let index = -1;
    for (let i = 0; i < carrito.length; i++) {
        
        if(carrito[i].id == id){ 
            index = i;
            break
        }
    }
    return index
}
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

            const { id, name, price} = product;

            let item = {

                id,
                name,
                price: Math.trunc(+price),
                image : product.images[0].name,
                quantity : 1,  /* amount * price */
                subtotal :Math.trunc(+price)
            }

            if (req.session.cart.length == 0) {
              
                let order = await db.OrderCart.findOne({
                    where : { 
                        userId : req.session.user.id,
                        state: true
                    }
                })
                if(!order){
                    order = await db.OrderCart.create({
                        userId: req.session.user.id,
                        state: true
                    })
                }
            
                item = {
                    ...item,
                    orderId: order.id
                }
                req.session.cart.push(item)

                /* guarda los productos en la tabla carrito */
                await db.OrderItem.create({
                    orderCartId : order.id,
                    productId : item.id,
                    quantity : 1
                })

            } else {

                let index = productVerify(req.session.cart,req.params.id)
                let order = await db.OrderCart.findOne({
                    where : {
                        userId: req.session.user.id,
                        state: true
                    }
                })

                if(index === -1){
                    item = {
                        ...item,
                        orderId: order.id
                    }
                    req.session.cart.push(item)

                     /* guarda los productos en la tabla carrito */
                     await db.OrderItem.create({
                        orderCartId : order.id,
                        productId : item.id,
                        quantity : 1
                    })

                }else{
                    let product = req.session.cart[index]
                    product.quantity++
                    product.subtotal = product.quantity * product.price
                    req.session.cart[index] = product

                    /* actualiza la quantity del producto en la tabla carrito */

                    await db.OrderItem.update(
                        {
                            quantity : product.quantity
                        },
                        {
                            where : {
                                orderCartId : product.orderId,
                                productId : product.id
                            }
                        }
                    )
                }
            }
           
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
    },
    remove : async (req,res) => {

        try {
            let index = productVerify(req.session.cart,req.params.id)
            let product = req.session.cart[index]
            
            if(product.quantity > 1){
                product.quantity--
                product.subtotal = product.quantity * product.price
                req.session.cart[index] = product   

                /* disminuye la cantidad del producto seleccinado */
                await db.OrderItem.update(
                    {
                        quantity : product.quantity
                    },
                    {
                        where : {
                            orderCartId : product.orderId,
                            productId : product.id
                        }
                    }
                )

            }else{
                req.session.cart.splice(index,1);

                /* elimina el producto de la tabla carrito */
                await db.OrderItem.destroy({
                    where : {
                        productId : product.id,
                        orderCartId : product.orderId
                    }
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

        } catch (error) {
            console.log(error)
            return res.status(500).json(error)

        }
    },
}