const multer = require('multer') //requiere la dependencia multer

const path = require('path') //necesitamos usar path

const storage = multer.diskStorage({ //usamos de la libreria multer el método diskStorage, recibiendo como parametro un objeto, este objeto tiene 2 metodos
    destination: function(req, file, callback){  // destination, configura el destino del archivo(la ruta)
        callback(null, path.join(__dirname, '../../public/images/products')) //aca es a donde va a ir a guardar un archivo cada vez que se suba

    },

    filename: function(req, file, callback){  //filename a traves de una funcion nos devuelve un nombre unico, que va a ser guardado en la b.de datos
        callback(null, `${Date.now()}_img_${path.extname(file.originalname)}`) // nos retorna una cadena de caracteres, con un nombre y una extension del archvio que está subiendo

    }
    
})

const uploadFile = multer({storage}) //uplaodFile es donde vamos a pasarle los parametros que acabamos de crear a multer, por eso a multer le pasamos como parametro storage que es la configuracion que hicimos arriba

module.exports = uploadFile // como lo vamos a usar en un enrutador