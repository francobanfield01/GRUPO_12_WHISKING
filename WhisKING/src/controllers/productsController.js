let controller = {
    cart: (req, res) => {
        res.render('productCart');
    },

    detail: (req, res) => {
        res.render('products/productDetail')
    }
}

module.exports = controller;