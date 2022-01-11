/* Midddleware chequea que el usuario sea administrador */
const USER_ROL = "USER_ADMIN";  //  USER_ROL = "USER" --> res.send raja de aca o redirige al login

function userAdminCheck(req, res, next){  // para cuando es administrador
    if(USER_ROL === "USER_ADMIN"){
        next()  // siempre va al final
    }else{
        //res.send('Raja de acá')
        res.redirect('/users/login')  // cada vez que quiere ir a products/create vuelve al login ,PODRIA preguntar si esta logueado se redirija al home
    }            
}

/*Middleware para solo entrar personal autorizado como adminUsers* */
/* const ADMIN_USERS = ["Franco", "Gisela", "Fernanda", "Jeanette", "Jonatan"]
function userAdminCheck(req, res, next){
    if( req.query.user == "Franco" || req.query.user == "Gisela" || req.query.user == "Fernanda" || req.query.user == "Jeanette" || req.query.user == "Jonatan") {
        res.send(`Bienvenid@: ${req.query.user}`)
        next()

    }else{
        res.send('No autorizado')
    }
}  */

module.exports = userAdminCheck