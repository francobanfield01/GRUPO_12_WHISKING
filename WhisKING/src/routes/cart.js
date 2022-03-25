// ************ Require's ************
let express = require('express')
let router = express.Router();
// ************ Controller Require ************
let { show, add } = require('../controllers/cartController');

// api/cart
router
    .get('/show', show)
    .post('/:id', add)





module.exports = router; 