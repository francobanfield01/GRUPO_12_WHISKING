let express = require('express')
let router = express.Router();
let controller = require('../controllers/mainController');

router.get('/', controller.index)
router.get('/login', controller.login)


module.exports = router; 