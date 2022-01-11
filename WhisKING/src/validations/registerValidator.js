const fs = require('fs');
const path = require('path');
const { check, body } = require('express-validator');

const usersFilePath = path.join(__dirname, '../database/users.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));
const writeJson = dataBase => {
	fs.writeFileSync(usersFilePath, JSON.stringify(dataBase), 'utf-8')
}
	
	
	module.exports = [
	    check('user_first_name')
	    .notEmpty()
	    .withMessage('El nombre es requerido'),
	
	    check('user_last_name')
	    .notEmpty()
	    .withMessage('El apellido es requerido'),

        check('date_of_birth')
	    .notEmpty()
	    .withMessage('la fecha es requerida')
        .isDate(),
	
	    check('mail')
	    .isEmail()
	    .withMessage('Debes ingresar un email válido'),
	
	    body('mail').custom(value => {
	       let user = users.find(user=>{ 
	            return user.mail == value 
	        })
            if(user){
                return false
            }else{
                return true
            }
	    }).withMessage('Email Ya registrado'),
	
	    check('pass')
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
	    .withMessage('Debes aceptar las bases y condiciones')
	]