let express = require('express')
let router = express.Router();
let controller = require('../controllers/productsController');

router.get('/productDetail', controller.detail)
router.get('/productCreate', controller.create)


module.exports = router; 