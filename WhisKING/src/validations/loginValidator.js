let { check, body } = require('express-validator');
let bcrypt = require('bcryptjs');

const db = require('../database/models')


module.exports = [
    check('email')
    .notEmpty()
    .withMessage('Debes ingresar un email').bail()
    .isEmail()
    .withMessage('Debes ingresar un email válido'),

    
    check('pass')
    .notEmpty()
    .withMessage('Debes escribir tu contraseña'),

    body('email')
        .custom((value, {req}) => {
            
            return db.User.findOne({
                where : {
                    email : value
                }
            }).then(user => {
                if(!user || !bcrypt.compareSync(req.body.pass, user.pass)){
                    return Promise.reject()
                }
            }).catch(() => Promise.reject('Crendenciales inválidas'))
        }) 
            

       
]