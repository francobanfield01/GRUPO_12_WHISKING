let { users, writeUsersJSON } = require('../database/dataBase');
let { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs'); // para hasheo

let controller = {
    register: (req, res) => {
        res.render('users/register', {
            session: req.session
        })
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

           let { name, last_name, date_of_birth, email, pass } = req.body

           let newUser = {
               id: lastId + 1,
               name: name.trim(),
               last_name: last_name.trim(),
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
               old: req.body,
               session: req.session
            })

        }   

    },
    terms: (req, res) => {
        res.render('terms', {
            session: req.session
        });
    },
    login: (req, res) => {
        res.render('users/login', {
            session: req.session
        })
    },
    processLogin: (req, res) => {
        let errors = validationResult(req);
       /*  res.send(errors) */ //con esto enviamos los errores 

        if(errors.isEmpty()){    // se pregunta si los errores estan vacios
            
            let user = users.find(user => user.email === req.body.email);
           
            req.session.user = {
                id: user.id,
                name: user.name,
                last_name: user.last_name,
                email: user.email,
                image: user.image,
                rol: user.rol
            }

           if(req.body.remember){
               const TIME_IN_MILISECONDS = 600000
               res.cookie("userWhisking", req.session.user, {
                   expires: new Date(Date.now() + TIME_IN_MILISECONDS),
                   httpOnly: true,
                   secure: true
               })
           }

            res.locals.user = req.session.user;


            res.redirect('/');

        }else{
            res.render('users/login', {
                errors: errors.mapped(),
                session: req.session,
                old: req.body
            })
        }
    } ,
    logout: (req,res) => {
       req.session.destroy(); //borra todas las variables que estan dentro de session
       if(req.cookies.userWhisking){
        res.cookie('userWhisking', "",{maxAge:-1})   //Pregunta si existe la cookie, si existe, la vacia y despues la borra
       }
       res.redirect('/')
   }, 

   profile:(req, res) => {
       let user = users.find(user => user.id === req.session.user.id)
       console.log(user)
       res.render('users/userProfile', {
           user,
           session: req.session
       }) 
   }
    
   
}

module.exports = controller;