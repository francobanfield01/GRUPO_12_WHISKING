let { validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");/* para hasheo */
const fs = require('fs');

const db = require('../database/models');
const { param } = require("../routes/main");

let controller = {
  register: (req, res) => {
    res.render("users/register");
  },
  processRegister: (req, res) => {
    let errors = validationResult(req);
    /*  return res.send(req.body)  *//* para saber como me llega al body */
    /* return res.send(req.file) */ /* para ver si carga la imagen en el registro */
    if (errors.isEmpty()) {
      let { name, last_name, date_of_birth, email, pass } = req.body; //destructuring

      db.User.create({
        name: name.trim(),
        lastName: last_name.trim(),
        dateOfBirth: date_of_birth,
        email: email.trim(),
        pass: bcrypt.hashSync(pass, 10),
        rol: false, /* se guarda en la bddatos como un cero */
        avatar: req.file ? req.file.filename : "default-image-perfil.png"
      }).then(async (user) => { /* recomendable que levante sesion, lo muestro por consola el obj que me devuelve user */

        try {
          await db.Address.create({
            userId: user.id,
            type: 'facturacion'
          })

          await db.Address.create({
            userId: user.id,
            type: 'envio'
          })

          return res.redirect('/users/login')
        } catch (error) {
          console.log(error)
        }

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
        where: {
          email: req.body.email
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
      include: ['addresses']
    }).then(user => {
      return res.render("users/userProfile", {
        user,
      })

    })
  },
  update: async (req, res) => {
   /*  let errors = validationResult(req); */

    const { name, lastName, dateOfBirth, phone, cellPhone, street, number, city, province, postalCode, street2, number2, city2, province2, postalCode2 } = req.body;

    const { id } = req.params;

    /* if (errors.isEmpty()) {
      let { phone, cellPhone } = req.body;
    try {
      await db.User.create({
        phone,
        cellPhone

      })
    } catch (error) {
      
    } */

    try { /* yo se que aca primero tendria que crear los datos de phone y cellphone antes de actualizar??? */
      await db.User.update(
        {
          name: name.trim(),
          lastName: lastName.trim(),
          dateOfBirth,
         /*  phone: req.params.trim(), */ /* no me guarda, ni phone ni cellphone */
         /*  cellPhone: req.user.body.trim(), */
          avatar: req.file ? req.file.filename : req.session.user.image
        },
        {
          where: {
            id
          }
        }
      )
    } catch (error) {
      console.log(error)
    }
    try{
      await db.Address.update(
        {
          street : street.trim(),
          number : +number,
          city : city.trim(), 
          province : province.trim(), 
          postalCode : postalCode.trim(),
        },
        {
          where : {
            userId : id,
            type : 'facturacion'
          }
        }
      )
    } catch (error) {
      console.log(error)
    }

    try {

      await db.Address.update(
        {
          street : street2.trim(),
          number : +number2,
          city : city2.trim(), 
          province : province2.trim(), 
          postalCode : postalCode2.trim(),
        },
        {
          where : {
            userId : id,
            type : 'envio'
          }
        }
      )
  
    } catch (error) {
      console.log(error)
    }

    try {
      if(req.file){
                    
        if(fs.existsSync('public/images/users/' + req.session.user.avatar) && req.session.user.avatar != "default-img.png"){
            fs.unlinkSync('public/images/users/' + req.session.user.avatar)
        }
        req.session.user.avatar = req.file.filename
    }

     
    } catch (error) {
      console.log(error)

    }
    req.session.user.image = req.file ? req.filename : req.session.user.image
    return res.redirect("/users/profile")
  }
};

module.exports = controller;
