let controller = {
    detail: (req, res) => {
        res.render('products/productDetail')
    },
    create:(req, res) =>{
        res.render('products/productCreate')
    }
}

module.exports = controller;