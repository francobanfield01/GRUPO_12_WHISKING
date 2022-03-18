// ************ Require's ************
let express = require('express')
let router = express.Router();
// ************ Validations ************
let registerValidator = require('../validations/registerValidator');
let loginValidator = require('../validations/loginValidator');
// ************ Middlewares ************
let uploadFile = require('../middlewares/uploadUserFiles')    //requerimos el multer, upload tiene que ver con la carga, requiriendo el middleware que acabamos de crear
/* let guestMiddlewares = require('../middlewares/guest') */
// ************ Controller Require ************
let controller = require('../controllers/usersController');





//*GET - Show register form -Formulario de registro- crear usuario
router.get('/register', /* guestMiddlewares, */ controller.register);

//*POST - Register Data -Formulario de registro ---Procesar el registro
router.post('/register', uploadFile.single('image') , registerValidator, controller.processRegister);

//*GET - Show login form -Formulario de login-
router.get('/login',/*  guestMiddlewares, */ controller.login);

//*POST - Login Data -Formulario de login ---Procesar el login.
router.post('/login',loginValidator, controller.processLogin);

//*GET - Terms
router.get('/terms', controller.terms);



//*GET - Log-out - Cerrar sesion.
router.get('/logout', controller.logout)


//*GET - Perfil de usuario 
router.get('/profile', controller.profile);
router.put('/profile/:id' , uploadFile.single('image'), controller.update);



module.exports = router; 