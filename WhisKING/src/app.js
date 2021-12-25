// ************ Require's ************
let express = require('express'); // requiero express
let app = express(); //ejecuto express
const PORT = 3001;// defino la variable PORT en 3001
let path = require('path');
const methodOverride = require('method-override');


//************ Middlewares  ************ Usamos el método use de app (aplicación de express), x ej intentando acceder a un archivo estático
app.use(express.static(path.join(__dirname, '../public'))) //asi lo vi en el mercado liebre
/* app.use(express.static('public')) */ //asi estabab

// ************ Template Engine  ************
app.set('view engine', 'ejs'); // Setea el template engine
app.set('views', path.join(__dirname, 'views')) //define la ubicacion de la carpeta de las vistas

// ************ Middlewares  ************
app.use(express.static(path.join(__dirname, '../public')));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(methodOverride('_method'));

// ************ Route System require and use() ************
//************ Enrutadores  ************
let mainRouter = require('./routes/main')
let productsRouter = require('./routes/products')
let usersRouter = require('./routes/users')

//************ Routes  ************
app.use('/', mainRouter)
app.use('/products', productsRouter)
app.use('/users', usersRouter)


//************ Servers ************
app.listen(PORT, () => console.log(`Server listening in port ${PORT}
http://localhost:${PORT}`)); //escucha el servidor la solitudes que se hagan-request- en ese puerto