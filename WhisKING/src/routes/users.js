let express = require('express')
let router = express.Router();
let controller = require('../controllers/usersController');
const loginValidator = require('../validations/loginValidator');


router.get('/login', controller.login)

router.post('/login', loginValidator, controller.processLogin)
router.get('/register', controller.register)


module.exports = router; 