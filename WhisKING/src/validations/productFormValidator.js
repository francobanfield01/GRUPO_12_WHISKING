const { check , body } = require('express-validator');

let { products } = require('../database/dataBase');

module.exports = [ 
    check('name')
    .isAlphanumeric()
    .notEmpty()
    .isLength({ 
        min: 10,
        max: 70

    })
    .withMessage('El producto es requerido'),

    check('category')
    .isAlphanumeric()
    .notEmpty()
    .isLength({ 
        min: 10,
        max: 45        
    })
    .withMessage('La categoría es requerida'),

    check('price')
    .isNumeric()
    .notEmpty()
    .isDecimal()    
    .withMessage('El precio es requerido'),

    check('discount')
    .isNumeric()
    .notEmpty()
    .isDecimal()
    .isLength({       
        max: 10        
    })    
    .withMessage('El descuento es requerido, pudiendo ser 0'),

    check('description')
    .isAlphanumeric()    
    .isLength({ 
        min: 20       
    })
    .withMessage('La descripción es opcional'),

    check('description')
    .isAlphanumeric()    
    .isLength({ 
        min: 20       
    })
    .withMessage('La descripción es opcional'),

    check('image')
    .isAlphanumeric()    
    .isLength({ 
        min: 20       
    })
    .withMessage('La descripción es opcional'),


    




]