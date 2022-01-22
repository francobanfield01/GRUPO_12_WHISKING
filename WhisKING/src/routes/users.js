// ************ Require's ************
let express = require('express')
let router = express.Router();
// ************ Validations ************
let registerValidator = require('../validations/registerValidator')
// ************ Middlewares ************
let uploadFile = require('../middlewares/uploadUserFiles')    //requerimos el multer, upload tiene que ver con la carga, requiriendo el middleware que acabamos de crear
// ************ Controller Require ************
let controller = require('../controllers/usersController');
const loginValidator = require('../validations/loginValidator');




//*GET - Show register form -Formulario de registro-
router.get('/register', controller.register);

//*POST - Register Data -Formulario de registro ---Procesar el registro
router.post('/register', uploadFile.single('image') , registerValidator, controller.processRegister);

//*GET - Show login form -Formulario de login-
router.get('/login', controller.login);

router.get('/terms', controller.terms);

//*POST - Login Data -Formulario de login ---Procesar el login.
/* router.post('/login', controller.processLogin); */



//Perfil de usuario ***a definir***
/* router.get('/profile/:userId', usersController.profile); */



module.exports = router; 