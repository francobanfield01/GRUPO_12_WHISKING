let controller = {
    detail: (req, res) => {
        res.render('products/productDetail', { title: 'Detalle de productos', img: 'src="../images/logo.svg"', img: 'src="../images/logo2.svg"'});
    }
}

module.exports = controller;

img: 'src="../images/logo.svg"'