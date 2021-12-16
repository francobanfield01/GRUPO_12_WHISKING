let express = require('express')
let router = express.Router();
let controller = require('../controllers/productsController');

router.get('/detail', controller.detail)


/* Create products */
router.get('/create', controller.create)
router.post('/', controller.store)

/* Edit one product */
router.get('/:id/edit', controller.edit)
router.put('/:id', controller.update)

module.exports = router; 