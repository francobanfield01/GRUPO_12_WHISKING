let express = require('express')
let router = express.Router();
let controller = require('../controllers/productsController');

router.get('/detail', controller.detail)
router.get('/create', controller.create)
router.get('/edit', controller.edit)


module.exports = router; 