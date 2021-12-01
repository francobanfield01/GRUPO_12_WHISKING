***
# DAILY
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

Se decidió a partir de las consultas realizadas y de la invitación a reunirnos en el dia de la fecha por la mañana con Jeanette.
Franco realizó la consulta sobre el inconveniente de no poder ver las vistas y Jeanette nos logra dar cuenta el error cometido, se solucionó el problema.
Fernanda, también solicita ver ese mismo problema pero ya con la incorporación de la carpeta partials, era un problema de ruta.


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

Trabajamos sobre la posición de las etiquetas inputs, placeholders y @media queries de las vistas habladas en la anterior cita, se pacta nueva daily para el día de mañana a las 02.30 pm para ultimar detalles, y hacer una revisión general del proyecto para su posterior entrega estimada a las 06.00 pm.

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

- Franco y Fernanda ubican el error de Gisela, se soluciona satisfactoriamente.
- Trabajamos sobre productEdit en la vista mobile.
- Se pacta nueva reunión para las 08.45 pm.

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
 

- Resolvimos el problema del footer en el tema de los logos, ya resueltos más temprano con el header.
- Se agregó el footer a productCreate con algunos cambios estéticos para diferenciarlo del footer que va a ver finalmente el usuario.
- Se decide cambiar productCreate y productEdit por create y edit y detail
- Se cierra la cita y con el compromiso de realizar más cambios y ser subidos en el día de mañana.








