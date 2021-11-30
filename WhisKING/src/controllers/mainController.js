let controller = {
    index: (req, res) => {
        res.render('index', { title: 'Home', img: 'src="images/logo.svg"'});
    },
    cart: (req, res) => {
        res.render('productCart', {title: 'Carrito de Compras', img: 'src="images/logo.svg"'});
    }
}

module.exports = controller;