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

    if (errors.isEmpty()) {
      let { name, last_name, date_of_birth, email, pass } = req.body; //destructuring

      db.User.create({
        name: name.trim(),
        lastName: last_name.trim(),
        dateOfBirth: date_of_birth,
        email: email.trim(),
        pass: bcrypt.hashSync(pass, 10),
        rol: false, /* se guarda en la bddatos como un cero */
        avatar: req.file ? req.file.filename : "default-image-profile.png"
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
          const TIME_IN_MILISECONDS = 7200000;
          res.cookie("userWhisking", req.session.user, {
            expires: new Date(Date.now() + TIME_IN_MILISECONDS),
            httpOnly: true,
            secure: true,
          });
        }
        res.locals.user = req.session.user;
/* CARRITO */
        req.session.cart = [];
        db.OrderCart.findOne({
          where: {
            userId: req.session.user.id,
            state: true
          },
          include: [
            {
              association: 'orderItems',
              include: [
                {
                  association: 'product',
                  include: ['category', 'images']
                }
              ]
            }
          ]
        }).then(order => {
          if (order) {
            order.orderItems.forEach(item => {
              let product = {
                id: item.productId,
                name: item.product.name,
                image: item.product.images[0].name,
                price: Math.trunc(+item.product.price),
                quantity: +item.quantity,
                subtotal: item.product.price * item.quantity,
                orderId: order.id
              }
              req.session.cart.push(product)
            });
          }
          //console.log(req.session.cart);

          return res.redirect('/')
        }).catch(error => console.log(error))
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
      .catch(error => console.log(error))
  },
  update: async (req, res) => {
    let errors = validationResult(req);

    const { name, lastName, dateOfBirth, phone, cellPhone, street, number, city, province, postalCode, street2, number2, city2, province2, postalCode2 } = req.body;

    const { id } = req.params;

    try {
      await db.User.update(
        {
          name: name.trim(),
          lastName: lastName.trim(),
          dateOfBirth,
          phone: req.body.phone.trim(),
          cellPhone: req.body.cellPhone.trim(),
          avatar: req.file ? req.file.filename : req.session.user.image
        },
        {
          where: {
            id: req.session.user.id
          }
        }
      )
    } catch (error) {
      console.log(error)
    }

    try {
      if (req.file) {

        if (fs.existsSync('public/images/users/' + req.session.user.image) && req.session.user.image != "default-image-profile.png") {
          fs.unlinkSync('public/images/users/' + req.session.user.image)
        }
        req.session.user.image = req.file.filename
      }



    } catch (error) {
      console.log(error)

    }

    try {
      await db.Address.update(
        {
          street: street.trim(),
          number: +number,
          city: city.trim(),
          province: province.trim(),
          postalCode: postalCode.trim(),
        },
        {
          where: {
            userId: id,
            type: 'facturacion'
          }
        }
      )
    } catch (error) {
      console.log(error)
    }

    try {

      await db.Address.update(
        {
          street: street2.trim(),
          number: +number2,
          city: city2.trim(),
          province: province2.trim(),
          postalCode: postalCode2.trim(),
        },
        {
          where: {
            userId: id,
            type: 'envio'
          }
        }
      )

    } catch (error) {
      console.log(error)
    }


    return res.redirect("/users/profile#box-avatar")
  }
};

module.exports = controller;
