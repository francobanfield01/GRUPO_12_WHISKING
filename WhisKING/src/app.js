let express = require('express'); // rquiero express
let app = express(); //ejecuto express
const PORT = 3001;// defino la variable PORT en 3001
let path = require('path');


//middlewares: usamos el método use de app (aplicación de express), x ej intentando acceder a un archivo estático
app.use(express.static('public'))


app.set('view engine', 'ejs'); // Setea el template engine
app.set('views', path.join(__dirname, 'views'))


/* Enrutadores */
let mainRouter = require('./routes/main')
let productsRouter = require('./routes/products')
let usersRouter = require('./routes/users')

/* Routes */
app.use('/', mainRouter)
app.use('/products', productsRouter)
app.use('/users', usersRouter)


//Server
app.listen(PORT, () => console.log(`Server listening in port ${PORT}
http://localhost:${PORT}`)); //escucha el servidor la solitudes que se hagan-request- en ese puerto