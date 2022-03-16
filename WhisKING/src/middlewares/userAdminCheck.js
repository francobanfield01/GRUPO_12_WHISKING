/* Midddleware chequea que el usuario sea administrador */

function userAdminCheck(req, res, next){  // para cuando es administrador
    if(req.session.user && req.session.user.rol){
        next()  // siempre va al final
    }else{
        //res.send('Raja de acá')
        res.redirect('/')  // cada vez que quiere ir a products/create vuelve al login ,PODRIA preguntar si esta logueado se redirija al home
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