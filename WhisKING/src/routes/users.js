// ************ Require's ************
let express = require('express')
let router = express.Router();
// ************ Validations ************
let registerValidator = require('../validations/registerValidator');
let loginValidator = require('../validations/loginValidator');
// ************ Middlewares ************
let uploadFile = require('../middlewares/uploadUserFiles')    //requerimos el multer, upload tiene que ver con la carga, requiriendo el middleware que acabamos de crear
// ************ Controller Require ************
let controller = require('../controllers/usersController');





//*GET - Show register form -Formulario de registro-
router.get('/register', controller.register);

//*POST - Register Data -Formulario de registro ---Procesar el registro
router.post('/register', uploadFile.single('image') , registerValidator, controller.processRegister);

//*GET - Show login form -Formulario de login-
router.get('/login', controller.login);

//*POST - Login Data -Formulario de login ---Procesar el login.
router.post('/login',loginValidator, controller.processLogin);

//*GET - Terms
router.get('/terms', controller.terms);



//*GET - Log-out - Cerrar sesion.
router.get('/logout', controller.logout)


//*GET - Perfil de usuario 
router.get('/profile', controller.profile);



module.exports = router; 