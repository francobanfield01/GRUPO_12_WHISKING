const fs = require('fs');
const path = require('path');

const usersFilePath = path.join(__dirname, '../database/users.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));
const writeJson = dataBase => {
	fs.writeFileSync(usersFilePath, JSON.stringify(dataBase), 'utf-8')
}

const { validationResult } = require('express-validator')


/* const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "."); */ // creo que no hace falta

let controller = {
    register: (req, res) => {
        res.render('users/register', {title:'Registración', img: 'src="../images/logo.svg"', img2: 'src="../images/logo2.svg"'});
    },
    processRegister: (req, res) => {
        let errors = validationResult(req);  
        res.send(errors.mapped())      
        if(errors.isEmpty){   // se pregunta si los errores estan vacios
           let lastId = 1;

           users.forEach(user => {
               if(user.id > lastId){
                   lastId = user.id
               }               
           });

           let { name, last_name, email, pass } = req.body

           let newUser = {
               id: lastId + 1,
               name,
               last_name,
               email,
               pass,
               rol: "ROL_USER",
               date_of_birth: "",
               address: "",
               province: "",
               city: "",
               postal_code: "",
               phone: "",
               cell_phone: "",               
              /*  image: req.file ? req.file.filename : "default-image-perfil.png" */  //hasta que se haga espacio en el login para cargar la foto

           }

           users.push(newUser)
           writeJson(users)

           res.redirect('/users/login')

        }else{
            res.render('users/register', {
               errors: errors.mapped()
            })

        }   

    },
    login: (req, res) => {
        res.render('users/login', { title: 'Iniciar Sesión', img: 'src="../images/logo.svg"', img2: 'src="../images/logo2.svg"'});
    },
    processLogin: (req, res)
   
}

module.exports = controller;