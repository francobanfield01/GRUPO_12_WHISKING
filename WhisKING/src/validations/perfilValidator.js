const { check , body } = require('express-validator');

let { users } = require('../database/dataBase');

module.exports = [
    check('name')
    .notEmpty()
    .withMessage('El nombre es requerido'),

    check('last_name')
    .notEmpty()
    .withMessage('El apellido es requerido'),

    check('date_of_birth')
    .notEmpty()
    .withMessage('la fecha es requerida')
    .isDate(),

    check('street')
    .isAlphanumeric(),

    check('number')
    .isNumeric(), /* preguntar */

    check('city')
    .isAlphanumeric(), /* localidad con api*/

    check('postalCode')
    .isNumeric(),




    
    
   


    
    
           

   /*  check('pass')
    .notEmpty()
    .withMessage('Debes escribir tu contraseña')
    .isLength({
        min: 6,
        max: 12
    })
    .withMessage('La contraseña debe tener entre 6 y 12 caracteres'),

    body('pass2').custom((value, {req}) => value !== req.body.pass ? false : true)
    .withMessage('Las contraseñas no coinciden'),

    check('terms')
    .isString('on')
    .withMessage('Debes aceptar las bases y condiciones')*/
] 


/* chequeo el pass que corresponde a la contraseña actual?, la contraseña nueva y la confirmacion de la contraseña nueva no? */