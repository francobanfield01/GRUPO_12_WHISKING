let { users, writeUsersJSON } = require('../database/dataBase');
let { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs'); // para hasheo

let controller = {
    register: (req, res) => {
        res.render('users/register')
    },
    processRegister: (req, res) => {
        let errors = validationResult(req);  
      /*   console.log(errors); */
       /*  res.send(errors.mapped()) me toma 2 mails no funciona ya registrado */ 
        if(errors.isEmpty()){   // se pregunta si los errores estan vacios
           let lastId = 1;

           users.forEach(user => {
               if(user.id > lastId){
                   lastId = user.id
               }               
           });

           let { user_first_name, user_last_name, date_of_birth, email, pass } = req.body

           let newUser = {
               id: lastId + 1,
               user_first_name: user_first_name.trim(),
               user_last_name: user_last_name.trim(),
               date_of_birth,
               email: email.trim(),
               pass: bcrypt.hashSync(pass, 10),
               rol: "ROL_USER",               
               address: "",
               province: "",
               city: "",
               postal_code: "",
               phone: "",
               cell_phone: "",               
               image: req.file ? [req.file.filename] : ["default-image-perfil.png"]  //hasta que se haga espacio en el login para cargar la foto

           }

           users.push(newUser)

           writeUsersJSON(users)

           res.redirect('/users/login')

        }else{
            res.render('users/register', {
               errors: errors.mapped(),
               old: req.body

            })

        }   

    },
    terms: (req, res) => {
        res.render('terms');
    }
    
   
}

module.exports = controller;