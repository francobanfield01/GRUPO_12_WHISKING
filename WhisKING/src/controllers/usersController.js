let { validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");/* para hasheo */

const db = require('../database/models')

let controller = {
  register: (req, res) => {
    res.render("users/register");
  },
  processRegister: (req, res) => {
    let errors = validationResult(req);
    /*  return res.send(req.body)  *//* para saber como me llega al body */
    /* return res.send(req.file) */ /* para ver si carga la imagen en el registro */
    if (errors.isEmpty()) {   
      let { name, last_name, date_of_birth, email, pass } = req.body;
      
      db.User.create({
        name: name.trim(),
        lastName: last_name.trim(),
        dateOfBirth: date_of_birth,
        email: email.trim(),
        pass: bcrypt.hashSync(pass, 10),
        rol: false, /* se guarda en la bddatos como un cero */       
        avatar: req.file ? req.file.filename : "default-image-perfil.png"
      }).then(user => { /* recomendable que levante sesion, lo muestro por consola el obj que me devuelve user */

          db.Address.create({
            userId : user.id
          }).then(address => {
            return res.redirect('/users/login')  
          }).catch(error => console.log(error))
         /*  console.log(user); *//* muestro el objeto user por consola */
      }).catch(error => console.log(error))

    } else {
      res.render("users/register", {
        errors: errors.mapped(),
        old: req.body,        
      })
    }
  },
  terms: (req, res) => {
    res.render("terms");
  },
  login: (req, res) => {
    res.render("users/login");
  },
  processLogin: (req, res) => {
    let errors = validationResult(req);
    /*  res.send(errors) */ //con esto enviamos los errores

    if (errors.isEmpty()) {
      db.User.findOne({
        where : {
          email : req.body.email
        }
      }).then(user => {
        req.session.user = {
          id: user.id,
          name: user.name,
          last_name: user.lastName,
          email: user.email,
          image: user.avatar,
          rol: user.rol,
        };

        if (req.body.remember) {
          const TIME_IN_MILISECONDS = 600000;
          res.cookie("userWhisking", req.session.user, {
            expires: new Date(Date.now() + TIME_IN_MILISECONDS),
            httpOnly: true,
            secure: true,
          });
        }
        res.locals.user = req.session.user;
        
        return res.redirect("/");
      }).catch(error => console.log(error))

    





    } else {
      res.render("users/login", {
        errors: errors.mapped(),       
        old: req.body,
      });
    }
  },
  logout: (req, res) => {
    req.session.destroy(); //borra todas las variables que estan dentro de session
    if (req.cookies.userWhisking) {
      res.cookie("userWhisking", "", { maxAge: -1 }); //Pregunta si existe la cookie, si existe, la vacia y despues la borra
    }
    res.redirect("/");
  },

  profile: (req, res) => {
   
    db.User.findByPk(req.session.user.id, {
      include : ['addresses']
    }).then(user => {
       return res.render("users/userProfile", {
        user,     
      })

    })
  },
};

module.exports = controller;
