let controller = {
    index: (req, res) => {
        res.render('index');
    },
    login: (req, res) => {
        res.render('users/login');
    }
}

module.exports = controller;