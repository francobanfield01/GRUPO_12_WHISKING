let express = require('express')
let router = express.Router();
let controller = require('../controllers/adminController');

//*** GET HOME PRODUCTS ***/
router
    .get('/', controller.index)
    .get('/get-all-products', controller.getlAllProducts)
    .get('/search', controller.getProductBySearch)



module.exports = router; 