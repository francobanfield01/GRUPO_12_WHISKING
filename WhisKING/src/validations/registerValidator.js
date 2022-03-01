const { check , body } = require('express-validator');

let { users } = require('../database/dataBase')
	
	
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
	
	    check('email')
	    .isEmail()
	    .withMessage('Debes ingresar un email válido').bail(),  //para cortar la validacion
	
	    body('email').custom(value => {
	       let user = users.find(user=>{  //valida que un mismo usuario existe dentro de bdedatos, no pueden loguearse 2 personas con el mismo email
	            return user.email == value 
	        })
            if(user){  // usuario existe
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



	////minLowercase: 1, minUppercase: 1, minNumbers: 1, minSymbols: 1,  como pongo eso?