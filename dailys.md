***
# DAILY SPRINT 3
*** 
### Acta 25-11-2021 ###
Presentes: Gisela, Franco, Fernanda.
Ausentes: Joel.

**Fernanda** 
- Creación backlog del Sprint 3 en Trello
- Se tomó nota para el armado de archivo daily.md con un resumén de las tareas completadas, los impedimentos encontrados y aún no  se llegó a la solución a un problema planteado, se acordó revisarlo y consultar a Jeanette.
- Se va a separar los componentes repetidos en archivos parciales, se creará su carpeta correspondiente en dónde se incluirá el head, header, footer y secciones que se requieran. 

**Gisela**
- Realización de los wireframes de creación y edición de productos.
- Se va a maquetar tomando como base los wireframes.

**Franco**
- Realización retrospectiva del Sprint II.
- Reformulación de la estructura de carpetas y archivos. 
- Implementación del módulo EJS, renombró las vistas actuales.
- Se encontró impedimento para mostrar algunas vistas, queda pendiente solución.


### Acta 26-11-2021 ###
Presentes: Jeanette, Gisela, Franco, Fernanda.
Ausentes: Joel.


>Se decidió a partir de las consultas realizadas y de la invitación a reunirnos en el dia de la fecha por la mañana con Jeanette.
>Franco realizó la consulta sobre el inconveniente de no poder ver las vistas y Jeanette nos logra dar cuenta el error cometido, se solucionó el problema.
>Fernanda, también solicita ver ese mismo problema pero ya con la incorporación de la carpeta partials, era un problema de ruta.


### Acta 29-11-2021 02.00 pm ###
Presentes: Gisela, Franco, Fernanda.
Ausentes: Joel.

**Franco**
- Desde las correcciones realizadas durante la última cita en la cuál Jeanette solucionó el problema presentado en la visualización de las vistas, se encuentra a la espera de nuestras devoluciones en las tareas asignadas.

**Fernanda**
- Solucionó las vistas, el problema se encontraba en la ruta de los partials en sus archivos consecuentes .ejs, al encontrarse index.ejs y prodcutCart.ejs por fuera de las carpetas products y users, requerian una ubicación diferente para ser llamadas en la visualización. Pusheo los arreglos y el archivo .md de las dailies que se va actualizando con cada cita. Citó que las titles que van en los heads de las distintas vistas, solo visualiza el recorte que se repite de una vista, habrá que consultar como se resuelve dicho inconveniente.

**Gisela**
- Creó la maquetación de productCreate y productEdit, avanzó con la vista de productCreate y considera que a su impresión visual queda conforme, le falta la parte de la @media queries, en la vista de productEdit encuentra el impedimento de seguir en la parte estética basada en los ejemplos vistos en clase con Boostrap. 
- Nos muestra como queda productCreate con un header diferente a las vistas que se verá de parte del usuario final, esta visual corresponderá a la visual administrador.  
- Se decide que tanto productCreate y productEdit tengan los mismos head,header y footer  


> Se decide una nueva daily en el horario de las 20.00hs para continuar con los ajustes y que las vistas mencionadas queden perfectamente visualizadas.


### Acta 29-11-2021  08:00 pm. ###
Presentes: Gisela, Franco, Fernanda.
Ausentes: Joel.


>Trabajamos sobre la posición de las etiquetas inputs, placeholders y @media queries de las vistas habladas en la anterior cita, se pacta nueva daily para el día de mañana a las 02.30 pm para ultimar detalles, y hacer una revisión general del proyecto para su posterior entrega estimada a las 06.00 pm.

### Acta 30-11-2021  02:30 pm. ###
Presentes: Gisela, Franco, Fernanda.
Ausentes: Joel.

**Gisela**
- La reunión comienza con los impedimentos que tiene Gisela sobre productCreate, no puede visualizar la vista.
- Trabajó sobre productEdit en la parte estética tomando como base el diseño de su wireframe. 
- Logra ver las vistas de productCreate. 
- No había subido la vista de productEdit ya que lo manejo con extensión html.
- Se verificó que funcione el responsive.

**Fernanda**
- Comenta que tuvo problemas para ubicar los logos del header, ya que index.ejs y productCart sen encuentran fuera de carpetas, mientras que las demás vistas ejs se encuentran en carpetas users y products respectivamente.
- Pudo fijar los titles en cada una de las vistas en inglés.
- La referencia de ubicación de los logos es a partir de los .ejs y las imágenes estan en image, gracias a la utilización del dirname que nos permite darnos cuenta del problema de las rutas.
- Se necesita poner src:'../- -/ - -' para los .ejs que están en las carpetas users y products, mientras que para los index.ejs y productCart.ejs sólo src:'images/...'.

**Franco**
- Atento confirma que los titles van español.

> Franco y Fernanda ubican el error de Gisela, se soluciona satisfactoriamente.
> Trabajamos sobre productEdit en la vista mobile.
> Se pacta nueva reunión para las 08.45 pm.

### Acta 30-11-2021  08:45 pm. ###
Presentes: Gisela, Franco, Fernanda.
Ausentes: Joel.

**Fernanda**
- Tuvo problemas con git, hizo git pull sobre los cambios subidos de Gisela en productCreate y se encontró con diferencias en productControllers.

**Franco**
- Resolvió el conflicto sobre productsController
- Modificó el register.ejs y register.css y asi se resolvió una de las correcciones que sugririó Jeanette en la vista tablet.

**Gisela**
- Agregó un botón .btn-whisking2 para las vistas de productCreate y productEdit
- Agregó el controlador y la ruta a productEdit
 

> Resolvimos el problema del footer en el tema de los logos, ya resueltos más temprano con el header.
> Se agregó el footer a productCreate con algunos cambios estéticos para diferenciarlo del footer que va a ver finalmente el usuario.
> Se decide cambiar productCreate y productEdit por create y edit y detail
> Se cierra la cita y con el compromiso de realizar más cambios y ser subidos en el día de mañana.
> Quedan pendientes algunas correcciones del sprint2

___
___

***
# DAILY SPRINT 4
*** 
### Acta 07-12-2021 ###
Presentes: Gisela, Franco, Fernanda.
Ausentes: Joel.


> Realizamos la distribución de tareas.
> Se actualizó el tablero de Trello y se asignaron las dificultades de las tareas al mismo.
> Reorganizamos los horarios para sincronizar las reuniones.

### Acta 09-12-2021 ###
Presentes: Gisela, Franco, Fernanda.
Ausentes: Joel.

**Fernanda**
- Reunió información.
- Realizó parte de user.json

**Franco**
- Decidió las categorias de los productos que van a estar dentro del proyecto.
- Seleccionó la cantidad de imagenes de los productos a trabajar en este sprint.

**Gisela**
- Tomó nota de todo lo que sucedió en la reunión, para realizar la retro y las dailys.

### Acta 10-12-2021 ###
Presentes: Gisela, Franco, Fernanda.
Ausentes: Joel.

**Fernanda**
- Concluyo con su parte de user.json.
- Subió los archivos al GitHub.

**Franco**
- Nos mostró parte del product.json en el que estaba trabajando.
- Nos hizo saber que tuvo un problema con el archivo y que estaba intentando resolverlo.

**Gisela**
- Se puso a trabajar en la retro.md y las dailys y subió los archivos a GitHub.

___
___

***
# DAILY SPRINT 5
*** 
### Acta 06-01-2022 08.30 pm. ###
Presentes: Gisela, Franco, Fernanda.
Ausentes: Exequiel

**Fernanda** 
- Transcripción de la ceremonias de las dailys.
- Partimos con la fuente de datos de usuarios (base de datos Json de Usuarios) completada en el sprint anterior.
- Implementación del formulario de registro de usuarios, incluyendo los campos mínimos mencionados en el sprint anterior, permitir la subida de una imágen de perfil con multer, encriptar la contraseña ingresada por el usuario con bcrypt.js, guardar los datos enviados en el archivo JSON de usuarios (formulario funcional de creación de usuarios)

**Gisela**
- Se decide que realice la tarea de implementar la entidad de usuarios, replicando la estructura de archivos y directorios que necesitarán para implementar las funcionalidades (roles: usuarios: usuarios comunes y usuarios administrador)
- Establecer la estructura de archivos y directorios de usuarios: de las rutas, controladores, vistas, directorios para imágenes y colección de datos.
- Implementación de la función de recordar al usuario, deberán agregarle al formulario de login la posibilidad de que se recuerde al usuario(checkbox). En caso de que el usuario decida ser recordado, utilizar cookies para guardar esa información en el navegador, implementar un middleware de aplicación que busque la cookie y loguee al usuario en caso de que exista y sus datos sean correctos.

**Franco**
- Creación backlog del Sprint 5 en Trello.
- Se encargará de la realización de una breve retrospectiva, en la cual se detallará qué hicimos bien en el sprint anterior, qué hicimos mal, qué deberíamos empezar a hacer, qué deberíamos dejar de hacer...(conclusiones sprint 4)
- Implementación del login de usuarios, poner en práctica middlewares, sesiones y cookies incluyendo los campos de email y password, verificar la información enviada por el usuario y según el caso: redireccionar a la home o a la página de perfil en caso de éxito y muestre los datos del usuario en algún lugar del sitio, como el header, redireccionar nuevamente al login en caso de error (formulario funcional de login) 
 
 
> Se dividen las tareas del presente sprint.
> Se deberá ver el tema del select para elegir categoría que deberá ser consumida desde la base de datos, no hardcodeado.
> Se acuerda realizar la implementación de rutas de huéspedes y de usuarios entre Gisela, Franco y Fernanda una vez completos los puntos anteriores, y tengamos un login funcionando será nuestro próximo desafío separar las rutas que se pueden acceder en cualquier momento, de las que se puede acceder solo si uno no está logueado y, por último, de las que requieren estar logueado. En cada caso deberemos implementar el comportamiento que corresponda: rutas accesibles por cualquiera (huéspedes), rutas accesibles solo sin login, rutas accesibles solo con login.
> Se toma la decisión de posponer la realización de la retrospectiva, por el horario de la reunión en el día de la fecha para la próxima daily, con la participación de todos sus integrantes.
>  Se decide una nueva daily para el dia de mañana 07-01-2022 en el horario de las 11.00hs para continuar con los detalles de la división de tareas y con la incorporación de Exequiel para explicar el desarrollo de nuestro e-commerce.

### Acta 07-01-2022 11.00 am. ###
Presentes: Gisela, Franco, Fernanda.
Ausentes: Exequiel

**Fernanda** 
- Daily realizada del día anterior.
- Pendiente la implementación de registro de usuarios.

**Gisela**
- El punto de establecer la estructura de archivos y directorios de usuarios: de las rutas, controladores, vistas, directorios para imágenes y colección de datos ya está realizado, se fundamentó en esta daily.
- Pendiente la función de recordar usuario.
- Realizar el wireframe del dashboard de la vista administrador. 

**Franco**
- Se comentó que tenemos que trabajar sobre el select de category, se precisa una vista de crear categorias.
- Pendiente la retrospectiva.
- Pendiente la implementación de login.


>  Se decide una nueva daily para el dia lunes 10-01-2022 en el horario de las 15.30hs para continuar con las tareas y con la incorporación de Exequiel para explicar el desarrollo de nuestro e-commerce.

### Acta 10-01-2022 03.30 pm. ###
Presentes: Gisela, Franco, Fernanda.
Ausentes: Exequiel

**Fernanda** 
- Daily realizada del meeting anterior.
- Se inicia esta daily comentando que cuando armamos el html de login y register, en este estadio del proyecto al realizar la implementación en el registro de usuarios no sabíamos que se iba a tener que utilizar multer, por eso se tuvo que cambiar y acomodar la estética del mismo, aunque en el futuro multer tenga que ver más con el pérfil del usuario que se tiene en cuenta, aunque por el momento no se pueda realizar y,  se necesita incorporar el archivo que manejará el dasboard del administrador.
 
- Aprovechando el fin de semana pasado, antes de entrar a trabajar con el tema de registración, se agregó middlewares a nivel de la aplicación que sirven para ver las entradas de los usuarios a los distintas secciones del sitio, un middlewares de fuera del servicio o mantenimiento del mismo, y uno que chequea si el usuario es o no administrador.

- Con respecto al registro no se logró que cuando se ingresa a registrar, se vean los errores, se realizó todas las pruebas test para el mismo.

- Tambien comenté que es necesario, la incorporación de un archivo base, dónde se guarden las bases de datos json, porque es tedioso tener que escribir y asi consumimos todos esos pasos innecesarios, está funcional para utilizarlo, y se puede incorporar al controlador o en dónde se requiera a través de destructuring.

- Además se tomó el trabajo de modificar la base de json de productos, incorporando una base adicional de categorías, puesto a evaluación...

- Se Habló del desarrollo de mi actividad a realizar con la incorporacion de las validaciones.

- Mi gran inconveniente en el registro, era maquetar y que quede bien con la incorporación de multer, la foto de perfil del usuario que se esta registrando o de avatar, ya que siento dificultades y desarmar todo lo maquetado anteriormente y que todos estabamos de acuerdo.

- Se creó en el app.js el adminRouter que se encuentra comentado, el admin.js vacio, y el adminControllers vacio.

**Gisela**
- Me invitó a tener un meeting en el día de hoy para lograr ayudarme a superar este bloqueo para avanzar y resolverlo.

**Franco**
- Alentó que pruebe tirar un input dentro del formulario e intente resolver mi bloqueo de remaquetar el sitio.

### Acta 13-01-2022 06.40 pm. ###
Presentes: Gisela, Franco, Fernanda.
Ausentes: Exequiel

**Franco**
- Habla sobre el archivo dataBase.js que es el modulo que se utiliza para refactorizar las bases de datos json, que anduvo viendo acerca de ese tema. Queda en bajar las actualizaciones y realizar los cambios si los hubiera pertienentes, y trabajar sobre ellos en su consignas a cumplir.

**Fernanda** 
- Daily realizada del meeting anterior.
- Comenta que ese módulo ya esta subido al github y que esta probado para ser usado cuando se requiera, y habla sobre la importancia de su implementación, dado  que se consume menos código de esta manera y se logra entender un poco mejor su desarrollo. 
- Están los campos mínimos del sprint anterior.
- Está implementado la subida con multer de las imágenes.
- Está encriptada las contraseñas que se ingresan por el usuario con lam incorporacion de bcrypt.js. 
- Se persisten los datos enviados en el archivo json de usuarios.
- Sólo tiene los problemas mencionados en la daily anterior acerca de los errores y algunos detalles más.

**Gisela**
- Escucha atentamente, tomando nota de las tareas realizadas y por realizar, aguardando el momento para trabajar sobre su porción de sprint elegido.


> Se decide una nueva daily para el día de mañana 14-01-2022 en el horario de las 15.40hs para continuar con las tareas. 

### Acta 14-01-2022 03.40 pm. ###
Presentes: -, -, -.
Ausentes: Gisela, Franco, Fernanda,Exequiel.


>Se suspende el meeting por problemas técnicos.

### Acta 20-01-2022 02.49 pm. ###
Presentes: Gisela, Fernanda.
Ausentes: Franco, Exequiel.

**Fernanda** 
- Daily realizada del meeting anterior.

**Gisela**
- Muestra su tarea acerca de recordar contraseña la cual no pudo terminar de realizar y hacerlo funcional.


> Por problemas técnicos Franco no participa de esta daily.
> Se realiza un seguimiento del código
> Se decide una nueva daily para el día 21-01-2022 a las 07.00 pm, esperando la colaboración de Franco.

### Acta 21-01-2022 07.00 pm. ###
Presentes: Gisela, Franco y Fernanda.
Ausentes: Exequiel.

**Franco**
- Decide que sigamos viendo las tareas, en base a los cambios propuestos en su ausencia.
- Hizo funcional el menú del home, para poder acceder rápidamente a Registrate, Productos, Carrito e Ingresar.


**Fernanda** 
- Daily realizada del meeting anterior.
- Propone ver los inconvenientes que tiene login en conjunto.

**Gisela**
- Realiza los procesos de login y process-login para poder implementar recordar contraseña, aún no esta funcional.
- No funciona el middleware cookieSession.js


> Se realiza un seguimiento del código, intentando ubicar el error.
> Se decide una nueva daily para el día 22-01-2022 a las 03.00 pm.

### Acta 22-01-2022 03.00 pm. ###
Presentes: Gisela y Fernanda.
Ausentes: Franco,Exequiel.

**Fernanda** 
- Daily realizada del meeting anterior.

**Gisela**
- No funciona el middleware cookieSession.js.
- Se compromete ver los errores a partir del login funcional, y luego a subir y si fuera necesario a solicitar ayuda si se mantienen los errores que no se lograron resolver.


> Se realiza un seguimiento del código, se logra registrar y loguear, falta ver porqué no se puede implementar las cookies y session.

> No se pacta nueva daily.

### Acta 24-01-2022 03.20 pm. ###
Presentes: Gisela,Fernanda y Franco.
Ausentes: Exequiel.

**Fernanda** 
- Daily realizada del meeting anterior.
- Se abre esta daily comentando los siguientes puntos a consideración del equipo:
        - Puntos que faltan sin tomar en cuenta las recomendaciones de jeannette al momento en este Sprint.
        - En el login falta agregar al header el perfil de usuario que cuando entre en sesión, quede conectado a nuestro ecommerce, no se ve cuando se loguea el inicio de sesión, verificar los errores si falta algun dato al ingresar al login y que muestre los errores y si se escribe el mail mal, o en su estructura no respeta la forma de escribir un mail, reproduzca el error, o con respecto a la contraseña sea la correcta y sus redireccionamientos en uno y en otros casos se cumplan.
        - Falta agregar la page de perfil de usuario y sus funcionalidades.
        -Probar una vez resuelto los inconvenientes citados, si recordar al usuario, utilizando las cookies para guardar en el navegador, y la implementacion del middleware que busque la cookie y loguee al usuario en caso que exista y sus datos correctos, que está escrito el codigo pero que aún no puede verificarse si todo está funcional, por los problemas que anteceden.
        - Falta implementar las rutas de huespedes y de usuarios.
        - Modificar las tablas de productos.json y crear una tabla de categories.json, que ya en principio estan creadas, no agregadas al proyecto. modificar el o los ejs necesarios para su implementación. Dichas tablas van a ser base para realizar las funcionalidades de sequelize.       

**Gisela**
- Toma nota de las consideraciones 
- Subió al github los cambios hablados el día sábado, pero no está del todo funcional y son los inconvenientes planteados al comenzar esta daily.

**Franco**
- Prueba el login y sigue teniendo errores, cuando se ingresa con algún error nombrado anteriormente a propósito, se direcciona a la page principal, en lugar de redireccionarse a si mismo y mostrando sus errores respectivos. 


> Se realiza un seguimiento del código, se logra registrar y loguear, falta ver porqué no se puede implementar las cookies y session.
> Falta verificar credenciales invalidas en funcionamiento, no esta validado en el ejs. 
> Aún no tengo cuenta, verificar que vaya al register.
> Hacer funcional olvidaste tu contraseña?
> Se resuelve que si necesitamos ayuda de parte de los coordinadores y de apoyo solicitarlos.
> Se pacta nueva daily para el día de mañana sin horario definido, posiblemente después de la clase de programación.

