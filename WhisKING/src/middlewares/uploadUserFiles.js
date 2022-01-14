const multer = require('multer') //requiere la dependencia multer

const path = require('path') //necesitamos usar path

const storage = multer.diskStorage({        //usamos de la libreria multer el método diskStorage, recibiendo como parametro un objeto, este objeto tiene 2 metodos
    destination: (req, file, cb) => {           // destination, configura el destino del archivo(la ruta)
        cb(null, path.join(__dirname, '../../public/images/users'))     //aca es a donde va a ir a guardar un archivo cada vez que se suba

    },

    filename: (req, file, cb) => {             //filename a traves de una funcion nos devuelve un nombre unico, que va a ser guardado en la b.de datos
        cb(null, `${Date.now()}_img_${path.extname(file.originalname)}`)      // nos retorna una cadena de caracteres, con un nombre y una extension del archvio que está subiendo

    }
    
})

const fileFilter = function(req, file, callback) {
    if(!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)){
        req.fileValidationError = "Sólo imágenes (.jpg, .jpeg, .png, .gif)";
        return callback(null , false, req.fileValidationError);
    }
    callback(null,true);
}
const uploadFile = multer({ storage, fileFilter })  //uplaodFile es donde vamos a pasarle los parametros que acabamos de crear a multer, por eso a multer le pasamos como parametro storage que es la configuracion que hicimos arriba

module.exports = uploadFile  // como lo vamos a usar en un enrutador