let express = require('express')
let router = express.Router();
let controller = require('../controllers/mainController');

router.get('/', controller.index)
router.get('/productCart', controller.cart)



module.exports = router; 