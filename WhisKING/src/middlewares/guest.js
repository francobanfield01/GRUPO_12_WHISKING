// este middleware solo deja pasar si uno esta logueado
module.exports = (req, res, next) => {
    if(req.session.user == undefined){
        next()
    } else {
        res.redirect('/')

    }
    
}