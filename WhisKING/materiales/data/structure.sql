-- MySQL dump 10.13  Distrib 5.5.62, for Win64 (AMD64)
--
-- Host: localhost    Database: the_whisking_argentina
-- ------------------------------------------------------
-- Server version	5.5.5-10.4.22-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `addresses`
--

DROP TABLE IF EXISTS `addresses`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `addresses` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `street` varchar(70) DEFAULT NULL,
  `number` int(10) unsigned DEFAULT NULL,
  `city` varchar(45) DEFAULT NULL,
  `province` varchar(45) DEFAULT NULL,
  `postalCode` varchar(30) DEFAULT NULL,
  `userId` int(10) unsigned NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `addresses_ibfk_1` (`userId`),
  CONSTRAINT `addresses_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `addresses`
--

LOCK TABLES `addresses` WRITE;
/*!40000 ALTER TABLE `addresses` DISABLE KEYS */;
INSERT INTO `addresses` VALUES (1,'Av. H Yrigoyen',3863,'Lanús ','Buenos Aires','1824',1,'2021-10-23 21:47:04','2021-10-23 21:47:04'),(2,'San Luis',3536,'Quilmes O','Buenos Aires','1879',2,'2021-10-23 21:47:04','2021-10-23 21:47:04'),(3,'Pte. J.D. Perón ',4381,'Almagro','Ciudad Autonóma de Buenos Aires','1247',3,'2021-10-23 21:47:04','2021-10-23 21:47:04'),(4,'Av. 24 de Septiembre ',960,'San Miguel de Tucumán','Tucumán','4000',4,'2021-10-23 21:47:04','2021-10-23 21:47:04'),(5,'Argerich',475,'Flores','Ciudad Autonóma de Buenos Aires','1406',5,'2021-10-23 21:47:04','2021-10-23 21:47:04');
/*!40000 ALTER TABLE `addresses` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `categories` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `image` text NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (1,'S M','imagen_categoria.jpg','2021-10-23 21:47:04','2021-10-23 21:47:04'),(2,'J','imagen_categoria2','2021-10-23 21:47:04','2021-10-23 21:47:04'),(3,'B1','imagen_categoria3','2021-10-23 21:47:04','2021-10-23 21:47:04'),(4,'B2','imagen_categoria4','2021-10-23 21:47:04','2021-10-23 21:47:04'),(5,'I','imagen_categoria5','2021-10-23 21:47:04','2021-10-23 21:47:04'),(6,'P','imagen_categoria6','2021-10-23 21:47:04','2021-10-23 21:47:04');
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `images`
--

DROP TABLE IF EXISTS `images`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `images` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `productId` int(10) unsigned NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `images_FK` (`productId`),
  CONSTRAINT `images_FK` FOREIGN KEY (`productId`) REFERENCES `products` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `images`
--

LOCK TABLES `images` WRITE;
/*!40000 ALTER TABLE `images` DISABLE KEYS */;
INSERT INTO `images` VALUES (1,'imagen_producto1.jpg',1,'2021-10-23 21:47:04','2021-10-23 21:47:04'),(2,'imagen_producto2.jpg',2,'2021-10-23 21:47:04','2021-10-23 21:47:04'),(3,'imagen_producto3.jpg',3,'2021-10-23 21:47:04','2021-10-23 21:47:04'),(4,'imagen_producto4.jpg',4,'2021-10-23 21:47:04','2021-10-23 21:47:04'),(5,'imagen_producto5.jpg',5,'2021-10-23 21:47:04','2021-10-23 21:47:04'),(6,'imagen_producto6.jpg',6,'2021-10-23 21:47:04','2021-10-23 21:47:04'),(7,'imagen_producto7.jpg',7,'2021-10-23 21:47:04','2021-10-23 21:47:04'),(8,'imagen_producto8.jpg',8,'2021-10-23 21:47:04','2021-10-23 21:47:04');
/*!40000 ALTER TABLE `images` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `order-items`
--

DROP TABLE IF EXISTS `order-items`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `order-items` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `quantity` int(10) unsigned DEFAULT NULL,
  `orderCartId` int(10) unsigned NOT NULL,
  `productId` int(10) unsigned NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `order_items_FK` (`productId`),
  KEY `order_items_FK_1` (`orderCartId`),
  CONSTRAINT `order_items_FK` FOREIGN KEY (`productId`) REFERENCES `products` (`id`) ON DELETE CASCADE,
  CONSTRAINT `order_items_FK_1` FOREIGN KEY (`orderCartId`) REFERENCES `order_carts` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `order-items`
--

LOCK TABLES `order-items` WRITE;
/*!40000 ALTER TABLE `order-items` DISABLE KEYS */;
INSERT INTO `order-items` VALUES (1,20,1,1,'2021-10-23 21:47:04','2021-10-23 21:47:04'),(2,5,1,2,'2021-10-23 21:47:04','2021-10-23 21:47:04'),(3,10,1,7,'2021-10-23 21:47:04','2021-10-23 21:47:04'),(4,50,1,3,'2021-10-23 21:47:04','2021-10-23 21:47:04'),(5,100,2,4,'2021-10-23 21:47:04','2021-10-23 21:47:04'),(6,12,2,6,'2021-10-23 21:47:04','2021-10-23 21:47:04');
/*!40000 ALTER TABLE `order-items` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `order_carts`
--

DROP TABLE IF EXISTS `order_carts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `order_carts` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `state` tinyint(1) unsigned NOT NULL,
  `userId` int(10) unsigned NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `order_carts_FK` (`userId`),
  CONSTRAINT `order_carts_FK` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `order_carts`
--

LOCK TABLES `order_carts` WRITE;
/*!40000 ALTER TABLE `order_carts` DISABLE KEYS */;
INSERT INTO `order_carts` VALUES (1,1,1,'2021-10-23 21:47:04','2021-10-23 21:47:04'),(2,1,3,'2021-10-23 21:47:04','2021-10-23 21:47:04'),(3,0,5,'2021-10-23 21:47:04','2021-10-23 21:47:04');
/*!40000 ALTER TABLE `order_carts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `products` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(70) NOT NULL,
  `price` decimal(10,2) unsigned NOT NULL,
  `discount` int(10) unsigned NOT NULL,
  `description` text NOT NULL,
  `tasting` text DEFAULT NULL,
  `origin` varchar(45) DEFAULT NULL,
  `stock` int(10) unsigned NOT NULL DEFAULT 0,
  `categoryId` int(10) unsigned NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `categoryId` (`categoryId`),
  CONSTRAINT `products_ibfk_1` FOREIGN KEY (`categoryId`) REFERENCES `categories` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'Whisky S M J D 16 Años 700ml',41799.00,0,'La destilería de la Isla de Jura no tiene razón de ser económicamente hablando, porque se encuentra situada en una isla frente a la costa de otra isla. Los grandes camiones tienen que pasar por estrechas carreteras secundarias y trasladarse en un transbordador de vehículos para llevar el grano y recoger el whisky. Además deben transportar los productos de desecho de la destilería, que no pueden verterse al mar. Pero gracias a destilerías como Jura, el mundo del whisky es tan diverso y estimulante. Jura 16 añoses uno de sus mejores exponentes.','Muy rico la verdad','Escocia',100,1,'2021-10-23 21:47:04','2021-10-23 21:47:04'),(2,'Whisky S M M Botellon 1l.',39000.00,5,'The Dalmore 12 Años, envejece durante un período inicial de nueve años en barricas de roble blanco americano ex-bourbon antes de ser dividido cuidadosamente. Una mitad continúa su maduración en barricas de bourbon mientras que la otra mitad se transfiere a barricas de Matusalem Oloroso de 30 años. The Dalmore 12 Años es complejo, aunque equilibrado. Es la personificación del estilo de la casa Dalmore.','es uno de los Single Malt más codiciados dentro del mercado de los Whiskies de Malta Premium a nivel mundial. Se trata de un whisky de lujo, elaborado casi artesanalmente en los Highlands de Escocia, conocidos como las Tierras Altas del país del Whisky.','Escocia',50,1,'2021-10-23 21:47:04','2021-10-23 21:47:04'),(3,'Whisky S M J Reserve',123899.00,0,'Yamazaki es la destilería de whisky más antigua de Japón, establecida en 1923 por el fundador de Suntory, Shinjiro Torii. Inspirado por la tradición del whisky escocés, Torii imaginó una forma distintivamente japonesa de aproximarse a la fabricación para obtener un whisky único. Para ello, eligió una ubicación con una topografía y clima únicos, para convertirla en el lugar de nacimiento del whisky japonés.','Yamazaki es la destilería de whisky más antigua de Japón, establecida en 1923 por el fundador de Suntory, Shinjiro Torii. Inspirado por la tradición del whisky escocés, Torii imaginó una forma distintivamente japonesa de aproximarse a la fabricación para obtener un whisky único. Para ello, eligió una ubicación con una topografía y clima únicos, para convertirla en el lugar de nacimiento del whisky japonés.','Japón',180,2,'2021-10-23 21:47:04','2021-10-23 21:47:04'),(4,'Whisky D 12 Años Botellon 1l.',9499.00,10,'Dewar´s 12 años, A veces las mejores cosas de la vida son simples. Pero ir más allá en el envejecimiento de un Scotch Whisky hace que sea aún mejor. Fuimos pioneros en nuestro propio proceso de doble envejecimiento hace más de 100 años, poniendo el whisky de nuevo en las culatas después de la mezcla. De esta manera se envejece dos veces y se consigue un mezcla más suave, un sabor más completo y un acabado más duradero. Cuanto más tiempo pasan los whiskies conociéndose los unos a los otros, mejor es el resultado final. Así que después de 12 años, tenemos un whisky con miel, afrutado y realmente especial. Es una mezcla suave, afrutada y lujosamente rica. Devolvemos a nuestro Dewar´s 12 años a barriles de roble antiguos, y lo envejecemos de nuevo para que pueda madurar un poco más. Llamamos a este paso extra la  Doble Maduración  el sabor permanece en el barril, creando una mezcla aún más suave, con un largo y persistente final.','Color: El hermosísimo color de la luz del sol, brillante y luminoso. Nariz: Muy frutal, con peras verdes recién cortadas, melón, cáscara de naranjas y durazno. Miel, cebada malteada y dulce whisky de grano. Algo floral también, con poquísimo humo muy en el fondo. Cuerpo: Ligero hacia medio. Boca: Extremadamente suave, muy cítrica, fresca y ligeramente picante. Cáscara de naranjas, duraznos, malta dulce y roble ligeramente tostado. Final: Muy suave y persistente, con roble tostado y un toque de miel. Conclusión: Me ha sorprendido muy agradablemente, sobretodo al considerar su bajo precio dentro de su categoría de blended scotch whisky de 12 años de añejamiento. Su nariz es muy frutal y dulce, aunque no es particularmente compleja. En boca es muy agradable, particularmente después de paladearlo durante 15 o 20 segundos. Durante la cata me he sorprendido haciéndolo rodar sobre mi lengua, y pensando en lo delicioso que es. Su final también es espléndido. Es un dram muy fresco y sin complicaciones, perfecto para después de la cena.','Escocia',20,3,'2021-10-23 21:47:04','2021-10-23 21:47:04'),(5,'Whisky J D H',246639.00,0,'Jack Daniels Tennesse Honey está elaborado con el auténtico Jack Daniel Nº 7 al cual se añade un licor de miel. Jack Daniel cumple con el proceso del Condado de Lincoln. Jack Daniel cumple con el proceso del Condado de Lincoln, un proceso único que consiste en pasar el destilado a través de una capa de carbón de arce antes de ponerlo en barricas. Esto ayuda a retener los elementos más pesados y promueve la homogeneidad del destilado.','Vista: Jack Daniels Honey presenta un color ámbar amarillo. Nariz: En nariz se aprecia un ligero aroma de miel con notas de caramelo, carbón y la madreselva. Boca: Sabor a miel con toques de vainilla y madera de roble. El acabado es dulce y limpio.','USA',300,4,'2021-10-23 21:47:04','2021-10-23 21:47:04'),(6,'Whisky B B, F W 700ml.',24639.00,5,'Fundada en 1987 por Thomas Bulleit, esta destilería de Kentucky se caracteriza por destilar y envejecer en pequeños lotes, además de una receta especial de la familia Bulleit. Este whiskey artesanal ha alcanzado un lugar privilegiado en Estados Unidos, recibiendo numerosos premios (medallas y dobles medallas de oro en la  San Francisco World Spirits Competition y el reconocimiento de toda la industria. Estos whiskeys, elaborados con agua pura filtrada a través de piedra caliza, han  envejecido en barricas de roble americano durante 4 o 6 años, y han utilizado más centeno del habitual. Bulleit Rye Whiskey, creado en 2001 y como resultado de la evolución de Bulleit Bourbon, contiene hasta un 95% de centeno, frente al 51% que se exige para la categoría.',NULL,'USA',500,4,'2021-10-23 21:47:04','2021-10-23 21:47:04'),(7,'Whisky I C S M 750ml',19299.00,10,'Doble destilación por alambique de cobre. Maduración en barricas de bourbon de roble americano. Combinación de maltas jóvenes con maltas envejecidas para ofrecer el resultado deseado. Aroma y sabor ahumados conseguidos del secado de la cebada germinada mediante humo de turba. Único whisky irlandés súper premium puro de malta de turba que recupera la antigua tradición de secar la malta sobre un fuego de turba, lo que le da ese particular aroma, muy característico entre algunos single malt escoceses pero nada común en los irlandeses. Es un whisky excepcional de carácter fuerte con aromas intensos a turba, almendras y especias, y sabor suave, delicado y equilibrado. ',NULL,'Irlanda',125,5,'2021-10-23 21:47:04','2021-10-23 21:47:04'),(8,'Whisky J',100.00,0,'Para prender fuego sirve.',NULL,NULL,70,6,'2021-10-23 21:47:04','2021-10-23 21:47:04');
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `lastName` varchar(45) NOT NULL,
  `email` varchar(70) NOT NULL,
  `pass` varchar(70) NOT NULL,
  `dateOfBirth` date NOT NULL,
  `phone` varchar(30) DEFAULT NULL,
  `cellPhone` varchar(30) DEFAULT NULL,
  `avatar` varchar(100) DEFAULT NULL,
  `rol` tinyint(1) unsigned NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_un` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Soledad','Barrionuevo','soledad.barrionuevo@gmail.com','123456','1980-12-01','4280-5555','15-5080-2584','avatar1.jpg',1,'2021-10-23 21:47:04','2021-10-23 21:47:04'),(2,'Julio','Sanchez','julio_sanchez@hotmail.com','123456','1960-07-23','4250-9155','15-3487-2547','avatar2.jpg',1,'2021-10-23 21:47:04','2021-10-23 21:47:04'),(3,'Maria','Fernández','maria-fernandez@yahoo.com.ar','123456','2000-03-11','4981-6244','15-3254-4587','avatar3.jpeg',0,'2021-10-23 21:47:04','2021-10-23 21:47:04'),(4,'Rafael','Mendoza','rafa1987@gmail.com','123456','1997-05-30','0381-435-1016','54-381-4455744','avatar4.png',0,'2021-10-23 21:47:04','2021-10-23 21:47:04'),(5,'Silvia','Martinez','silvi.martinez@hotmail.com','123456','2001-09-15','4624-8874','15-3548-5555','avatar5.jpg',1,'2021-10-23 21:47:04','2021-10-23 21:47:04');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'the_whisking_argentina'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-03-13 15:41:41
