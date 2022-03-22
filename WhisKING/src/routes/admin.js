let express = require('express')
let router = express.Router();
let controller = require('../controllers/adminController');

//*** GET HOME PRODUCTS ***/
router
    .get('/', controller.index)
    .get('/get-all-products', controller.getlAllProducts)



module.exports = router; 