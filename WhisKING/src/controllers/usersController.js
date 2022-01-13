const { users, writeUsersJSON } = require('../database/users');
const { validationResult } = require('express-validator')

let controller = {
    login: (req, res) => {
        res.render('users/login', { title: 'Iniciar Sesión', img: 'src="../images/logo.svg"', img2: 'src="../images/logo2.svg"'});
    },

    register: (req, res) => {
        res.render('users/register', {title:'Registración', img: 'src="../images/logo.svg"', img2: 'src="../images/logo2.svg"'});
    },

    processLogin: (req, res) => {
        let errors = validationResult(req);
       
        if(errors.isEmpty()){
            let user = users.find(user => user.email === req.body.email);
           
            req.session.user = {
                id: user.id,
                name: user.name,
                last_name: user.last_name,
                email: user.email,
                avatar: user.avatar,
                rol: user.rol
            }

           if(req.body.remember){
               const TIME_IN_MILISECONDS = 60000
               res.cookie("userArtisticaDali", req.session.user, {
                   expires: new Date(Date.now() + TIME_IN_MILISECONDS),
                   httpOnly: true,
                   secure: true
               })
           }

            res.locals.user = req.session.user;

            res.redirect('/')

        }else{
            res.render('login', {
                errors: errors.mapped(),
                session: req.session
            })
        }
    }
}

module.exports = controller;