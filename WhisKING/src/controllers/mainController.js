let controller = {
    index: (req, res) => {
        res.render('index');
    },
    cart: (req, res) => {
        res.render('productCart');
    }
}

module.exports = controller;