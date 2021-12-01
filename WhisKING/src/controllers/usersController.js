let controller = {
    login: (req, res) => {
        res.render('users/login', { title: 'Iniciar Sesión', img: 'src="../images/logo.svg"', img2: 'src="../images/logo2.svg"'});
    },

    register: (req, res) => {
        res.render('users/register', {title:'Registración', img: 'src="../images/logo.svg"', img2: 'src="../images/logo2.svg"'});
    }
}

module.exports = controller;