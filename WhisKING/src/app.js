// ************ Require's ************
let express = require('express'); // requiero express
let app = express(); //ejecuto express
const PORT = 3001;// defino la variable PORT en 3001
let path = require('path');
const methodOverride = require('method-override');
const session = require('express-session')


//************ Middlewares  ************ Usamos el método use de app (aplicación de express), x ej intentando acceder a un archivo estático
app.use(express.static(path.join(__dirname, '../public')));  //middleware a nivel aplicación, es dónde tenemos que ir a buscar los recursos estaticos de nuestra aplicación
app.use(express.json());  //middleware a nivel aplicación
app.use(express.urlencoded({ extended: false }));  //middleware a nivel aplicación
app.use(methodOverride('_method'));  //middleware a nivel aplicación
app.use(session({
    secret: "thewisking",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true }
}))


// ************ Template Engine  ************
app.set('view engine', 'ejs'); // Setea el template engine
app.set('views', path.join(__dirname, 'views')) //define la ubicacion de la carpeta de las vistas


// ************ Route System require and use() ************
//************ Enrutadores  ************
let mainRouter = require('./routes/main');  //middleware a nivel aplicación
let productsRouter = require('./routes/products');  //middleware a nivel aplicación
let usersRouter = require('./routes/users')  //middleware a nivel aplicación
/* let adminRouter = require('./routes/admin');  */ // middleware a nivel aplicación,  nuevo --> controllers/adminController.js, routes/admin.js
let userLogs = require('./middlewares/userLogs')  // middleware a nivel de aplicación  nuevo para saber donde ingreso


/* //*********** * ERROR 503 -servicio no disponible  * *********** siempre va al principio de las app.use y cambiar el valor a true para que funcione
app.use((req, res) => { 
    let mantenimiento = false;  
    res.status(404).render('503-page');
})
 */


//************ Routes  ************
app.use(userLogs); //nuevo para saber a donde ingreso
app.use('/', mainRouter);  //middleware a nivel aplicación
app.use('/products', productsRouter);  //middleware a nivel aplicación
app.use('/users', usersRouter);   //middleware a nivel aplicación
/* app.use('/admin', adminRouter); */  //middleware a nivel aplicación----- nuevo 


//*********** * ERROR 404  * *********** siempre al final de las rutas  nuevo
app.use((req, res) => {    //status es un metodo dentro del objeto respuesta, le envia al cliente el status de la peticion
    res.status(404).render('404-page');
})


//************ Servers ************
app.listen(PORT, () => console.log(`
Server listening in port ${PORT}
http://localhost:${PORT}
`)); //escucha el servidor la solitudes que se hagan-request- en ese puerto