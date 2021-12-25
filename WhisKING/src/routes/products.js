// ************ Require's ************
let express = require('express')
let router = express.Router();
let upload = require('../middlewares/uploadProductFiles')


// ************ Controller Require ************
//let controller = require('../controllers/productsController'); // esta linea estaba repitiendo la de abajo, modifique todos donde decia controller x productsController
const productsController = require('../controllers/productsController')

/*** GET ALL PRODUCTS ***/
router.get('/', productsController.index);

/*** CREATE ONE PRODUCT ***/ 
router.get('/create', productsController.create);
router.post('/', /* upload.single('image'), */ productsController.store); // habilitar el upload.single cuando este el create completo y funcional

/*** GET ONE PRODUCT ***/ 
router.get('/detail/:id', productsController.detail);

/*** EDIT ONE PRODUCT ***/ 
router.get('/:id/edit', productsController.edit); /* ponemos por get xq es la que va a renderizar el formulario router.???, '/:id/???' y aca me esta pidiendo que le ponga edit */
router.put('/:id', upload.single('image'), productsController.update); // y la 2da es por put que es la que va a modificar

/*** DELETE ONE PRODUCT***/ 
router.delete('/:id', productsController.destroy);





module.exports = router;


