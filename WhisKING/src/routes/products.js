// ************ Require's ************
let express = require('express')
let router = express.Router();
let upload = require('../middlewares/uploadProductFiles') //requerimos el multer, upload tiene que ver con la carga, requiriendo el middleware que acabamos de crear
let userAdminCheck = require('../middlewares/userAdminCheck');



// ************ Controller Require ************
let controller = require('../controllers/productsController')

/*** GET ALL PRODUCTS ***/
router.get('/', controller.list);


/*** CREATE ONE PRODUCT ***/ //prueba con la pag de create si puede acceder usuario y no es administ SOLO EN LAS RUTAS GETS userAdminCheck 
router.get('/create', userAdminCheck, controller.create); //devolverm el formulario para que lo vea el usuario
router.post('/', upload.single('image'), controller.store); //  recibir datos,esto recibe los datos del formulario de creacion del producto, habilitar el upload.single cuando este el create completo y funcional

/*** GET ONE PRODUCT ***/ 
router.get('/detail/:id', controller.detail);

/*** EDIT ONE PRODUCT ***/ 
router.get('/:id/edit', controller.edit); /* ponemos por get xq es la que va a renderizar el formulario router.???, '/:id/???' y aca me esta pidiendo que le ponga edit */
router.put('/:id', upload.single('image'), controller.update); // y la 2da es por put que es la que va a modificar, a donde el usuario va a poder editar el producto

/*** DELETE ONE PRODUCT***/ 
router.delete('/:id', controller.destroy);





module.exports = router;


