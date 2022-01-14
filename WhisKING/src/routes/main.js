let express = require('express')
let router = express.Router();
let controller = require('../controllers/mainController');

//*** GET HOME PRODUCTS ***/
router.get('/', controller.index)

//*** GET PRODUCT-CART ***/
router.get('/productCart', controller.cart)



module.exports = router; 