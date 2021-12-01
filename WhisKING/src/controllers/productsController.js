let controller = {
    detail: (req, res) => {
        res.render('products/productDetail', { title: 'Detalle de producto', img: 'src="../images/logo.svg"', img2:'src="../images/logo2.svg"'});

    },
    create:(req, res) =>{
        res.render('products/productCreate', { title: 'Crear producto', img3: 'src="../images/logoCobre.svg"', img4:'src="../images/isologoCobre.svg"'});

    },
    edit:(req, res) =>{
        res.render('products/productEdit', { title: 'Editar producto', img3: 'src="../images/logoCobre.svg"', img4:'src="../images/isologoCobre.svg"'});

    }
}

module.exports = controller;

