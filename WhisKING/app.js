let express = require('express'); // rquiero express
let app = express(); //ejecuto express
const PORT = 3001;// defino la variable PORT en 3001
let path = require('path');

//middlewares: usamos el método use de app (aplicación de express), x ej intentando acceder a un archivo estático
app.use(express.static('public'))

//Server
app.listen(PORT, () => console.log(`Server listening in port ${PORT}
http://localhost:${PORT}`)); //escucha el servidor la solitudes que se hagan-request- en ese puerto


//Routes
app.get('/', function (req, res){
    res.sendFile(path.join(__dirname, './views/index.html'))
})
app.get('/login', function (req, res){
    res.sendFile(path.join(__dirname, './views/login.html'))
})
app.get('/productcart', function (req, res){
    res.sendFile(path.join(__dirname, './views/productCart.html'))
})
app.get('/productdetail', function (req, res){
    res.sendFile(path.join(__dirname, './views/productDetail.html'))
})
app.get('/register', function (req, res){
    res.sendFile(path.join(__dirname, './views/register.html'))
})



