// ************ Require's ************
/* let express = require('express')
let router = express.Router();
let controller = require('../controllers/adminController');
let upload = require('../middlewares/uploadProductFiles');
let userAdminCheck = require('../middlewares/userAdminCheck') */

/*** GET SHOW ALL PRODUCTS lIST ***/
/* router.get('/', userAdminCheck, controller.list); */

/*** GET ALL PRODUCTS ***/
/* router.get('/', controller.index) */




/*** CREATE ONE PRODUCT ***/ 
/* router.get('/create', controller.create); */ //devolverm el formulario para que lo vea el usuario
/* router.post('/', upload.single('image'), controller.store); */ //  recibir datos,esto recibe los datos del formulario de creacion del producto, habilitar el upload.single cuando este el create completo y funcional

/*** GET ONE PRODUCT ***/ 
/* router.get('/detail/:id', controller.detail); */

/*** EDIT ONE PRODUCT ***/ 
/* router.get('/:id/edit', controller.edit); */ /* ponemos por get xq es la que va a renderizar el formulario router.???, '/:id/???' y aca me esta pidiendo que le ponga edit */
/* router.put('/:id', upload.single('image'), controller.update); */ // y la 2da es por put que es la que va a modificar, a donde el usuario va a poder editar el producto

/*** DELETE ONE PRODUCT***/ 
/* router.delete('/:id', controller.destroy); */



/* module.exports = router */
