let express = require('express')
let router = express.Router();
let controller = require('../controllers/mainController');
let guestMiddlewares = require('../middlewares/guest'); //invitado

let db = require('../database/models')

//*** GET HOME PRODUCTS ***/
router.get('/', controller.index)

router.get('/products/all', (req, res) => {
    db.Product.findAll()
    .then(products => {
        res.send(products)
    })

})

//*** GET PRODUCT-CART ***/
router.get('/productCart', guestMiddlewares, controller.cart)



module.exports = router; 