let express = require('express')
let router = express.Router();
let controller = require('../controllers/productsController');

router.get('/detail', controller.detail)


/* Create products */
router.get('/create', controller.create)
router.post('/', controller.store)

/*** EDIT ONE PRODUCT ***/ 
router.get('/:id/edit', controller.edit); /* ponemos por get xq es la que va a renderizar el formulario router.???, '/:id/???' y aca me esta pidiendo que le ponga edit */
/* router.put('/:id', upload.single('image'), productsController.update); /* y la 2da es por put que es la que va a modificar */
 

/*** DELETE ONE PRODUCT***/ 
/* router.delete('/:id', controller.destroy);  */


module.exports = router;


