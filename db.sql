-- MySQL dump 10.13  Distrib 8.3.0, for Win64 (x86_64)
--
-- Host: localhost    Database: e_commerce
-- ------------------------------------------------------
-- Server version	8.3.0

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `category`
--

DROP TABLE IF EXISTS `category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `category` (
  `category_id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(50) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`category_id`)
) ENGINE=InnoDB AUTO_INCREMENT=405 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `category`
--

LOCK TABLES `category` WRITE;
/*!40000 ALTER TABLE `category` DISABLE KEYS */;
INSERT INTO `category` VALUES (1,'Electronics',NULL),(2,'Clothing',NULL),(3,'Books',NULL),(4,'Home and Forniture',NULL),(5,'Vehicules',NULL),(404,'Other',NULL);
/*!40000 ALTER TABLE `category` ENABLE KEYS */;
UNLOCK TABLES;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = cp850 */ ;
/*!50003 SET character_set_results = cp850 */ ;
/*!50003 SET collation_connection  = cp850_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `on_category_delete` AFTER DELETE ON `category` FOR EACH ROW update product
set category = 1
where category = NULL */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

--
-- Table structure for table `comment`
--

DROP TABLE IF EXISTS `comment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `comment` (
  `comment_id` int NOT NULL AUTO_INCREMENT,
  `posted_by` int DEFAULT NULL,
  `posted_for` int DEFAULT NULL,
  `content` varchar(250) DEFAULT NULL,
  `post_time` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`comment_id`),
  KEY `posted_by` (`posted_by`),
  KEY `posted_for` (`posted_for`),
  CONSTRAINT `comment_ibfk_1` FOREIGN KEY (`posted_by`) REFERENCES `user` (`user_id`) ON DELETE SET NULL,
  CONSTRAINT `comment_ibfk_2` FOREIGN KEY (`posted_for`) REFERENCES `product` (`product_id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comment`
--

LOCK TABLES `comment` WRITE;
/*!40000 ALTER TABLE `comment` DISABLE KEYS */;
/*!40000 ALTER TABLE `comment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `favorite_products`
--

DROP TABLE IF EXISTS `favorite_products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `favorite_products` (
  `user_id` int NOT NULL,
  `product_id` int NOT NULL,
  PRIMARY KEY (`user_id`,`product_id`),
  KEY `product_id` (`product_id`),
  CONSTRAINT `favorite_products_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`),
  CONSTRAINT `favorite_products_ibfk_2` FOREIGN KEY (`product_id`) REFERENCES `product` (`product_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `favorite_products`
--

LOCK TABLES `favorite_products` WRITE;
/*!40000 ALTER TABLE `favorite_products` DISABLE KEYS */;
/*!40000 ALTER TABLE `favorite_products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product`
--

DROP TABLE IF EXISTS `product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product` (
  `product_id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) DEFAULT NULL,
  `description` varchar(100) DEFAULT NULL,
  `price` double(5,2) DEFAULT NULL,
  `posted_by` int DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `category` int DEFAULT NULL,
  `images` json DEFAULT NULL,
  `pending` tinyint(1) DEFAULT '1',
  `old_price` double(5,2) DEFAULT NULL,
  PRIMARY KEY (`product_id`),
  KEY `posted_by` (`posted_by`),
  KEY `category` (`category`),
  CONSTRAINT `product_ibfk_1` FOREIGN KEY (`posted_by`) REFERENCES `user` (`user_id`) ON DELETE CASCADE,
  CONSTRAINT `product_ibfk_2` FOREIGN KEY (`category`) REFERENCES `category` (`category_id`) ON DELETE SET NULL
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product`
--

LOCK TABLES `product` WRITE;
/*!40000 ALTER TABLE `product` DISABLE KEYS */;
INSERT INTO `product` VALUES (1,'Laptop','High-performance laptop with SSD storage',999.99,2,'2024-02-17 10:43:22',1,'[{\"url\": \"laptop_image1.jpg\"}, {\"url\": \"laptop_image2.jpg\"}]',0,NULL),(2,'T-shirt','Cotton t-shirt with a stylish design',19.99,1,'2024-02-17 10:43:22',2,'[{\"url\": \"tshirt_image1.jpg\"}, {\"url\": \"tshirt_image2.jpg\"}]',1,NULL),(3,'Cookbook','Collection of delicious recipes',29.99,3,'2024-02-17 10:43:22',3,'[{\"url\": \"cookbook_image1.jpg\"}, {\"url\": \"cookbook_image2.jpg\"}]',0,NULL),(4,'Gardening Tools Set','Complete set of gardening tools',49.99,1,'2024-02-17 10:43:22',4,'[{\"url\": \"gardening_image1.jpg\"}, {\"url\": \"gardening_image2.jpg\"}]',1,NULL),(5,'Running Shoes','Comfortable running shoes for athletes',79.99,2,'2024-02-17 10:43:22',5,'[{\"url\": \"runningshoes_image1.jpg\"}, {\"url\": \"runningshoes_image2.jpg\"}]',0,NULL),(6,'Kach haja','High-performance laptop with SSD storage',999.99,2,'2024-03-20 14:51:59',1,'[\"https://i.ibb.co/WnhHtBq/a15e1177161d.png\", \"https://i.ibb.co/SfRyzCx/05e326bfc777.png\", \"https://i.ibb.co/ckYNmFP/b7c448c7e6fe.png\", \"https://i.ibb.co/kM1SVV7/adecf26fa08b.png\", \"https://i.ibb.co/BNv2gsX/eaf4bd234917.png\"]',1,NULL);
/*!40000 ALTER TABLE `product` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sessions`
--

DROP TABLE IF EXISTS `sessions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sessions` (
  `session_id` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `expires` int unsigned NOT NULL,
  `data` mediumtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin,
  PRIMARY KEY (`session_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sessions`
--

LOCK TABLES `sessions` WRITE;
/*!40000 ALTER TABLE `sessions` DISABLE KEYS */;
INSERT INTO `sessions` VALUES ('Ip3kB0XeRyvEa6tbMdd0qPGJ0J_YCEV5',1711550563,'{\"cookie\":{\"originalMaxAge\":604800000,\"expires\":\"2024-03-27T14:42:42.523Z\",\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}'),('VzSKpbD6ua05pXp4-fyEQ4z0mBYKMAZM',1711482640,'{\"cookie\":{\"originalMaxAge\":604800000,\"expires\":\"2024-03-26T17:24:01.919Z\",\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}'),('lUkI72PR0yFcjKElIEkXRVfUjN4tmP9G',1711457229,'{\"cookie\":{\"originalMaxAge\":604800000,\"expires\":\"2024-03-25T15:11:24.676Z\",\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}'),('piPTWMxl1RE-ct7LbSLClQlZuSAHFfFj',1711473832,'{\"cookie\":{\"originalMaxAge\":604800000,\"expires\":\"2024-03-26T13:11:24.885Z\",\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}'),('qYkXk4fmuUSN-ksOWtIz9dJU3348sH_a',1711724942,'{\"cookie\":{\"originalMaxAge\":604800000,\"expires\":\"2024-03-29T14:53:08.491Z\",\"secure\":false,\"httpOnly\":true,\"path\":\"/\"},\"passport\":{\"user\":16}}'),('wQ14yY5y4FgSZ4wzo_TE0iz_gIk2vQut',1711723252,'{\"cookie\":{\"originalMaxAge\":604800000,\"expires\":\"2024-03-25T17:48:00.396Z\",\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}');
/*!40000 ALTER TABLE `sessions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sub_category`
--

DROP TABLE IF EXISTS `sub_category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sub_category` (
  `sub_id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(50) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `category_id` int DEFAULT NULL,
  PRIMARY KEY (`sub_id`),
  KEY `category_id` (`category_id`),
  CONSTRAINT `sub_category_ibfk_1` FOREIGN KEY (`category_id`) REFERENCES `category` (`category_id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sub_category`
--

LOCK TABLES `sub_category` WRITE;
/*!40000 ALTER TABLE `sub_category` DISABLE KEYS */;
INSERT INTO `sub_category` VALUES (1,'Phones',NULL,1),(2,'PCs',NULL,1),(3,'Devices',NULL,1),(4,'T-Shirts',NULL,2),(5,'Pants',NULL,2),(6,'Shoes',NULL,2),(7,'Jackets',NULL,2),(8,'Bicycles',NULL,5),(9,'Cars',NULL,5);
/*!40000 ALTER TABLE `sub_category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `user_id` int NOT NULL AUTO_INCREMENT,
  `first_name` varchar(50) DEFAULT NULL,
  `last_name` varchar(50) DEFAULT NULL,
  `address` varchar(50) DEFAULT NULL,
  `phone_number` varchar(15) DEFAULT NULL,
  `email` varchar(150) DEFAULT NULL,
  `password` varchar(250) DEFAULT NULL,
  `role` varchar(20) DEFAULT 'user',
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'John','Doe','123 Main St','555-123-4567','john.doe@example.com','password123','user'),(2,'Jane','Smith','456 Elm St','555-987-6543','jane.smith@example.com','securepassword','user'),(3,'Alice','Johnson','789 Oak St','555-555-5555','alice.johnson@example.com','strongpassword','user'),(4,'Michael','Brown','101 Pine St','555-111-2222','michael.brown@example.com','pass1234','user'),(5,'Emily','Davis','202 Maple St','555-333-4444','emily.davis@example.com','qwerty123','user'),(6,'James','Wilson','303 Cedar St','555-555-6666','james.wilson@example.com','letmein','user'),(7,'Sarah','Martinez','404 Birch St','555-777-8888','sarah.martinez@example.com','password1','user'),(8,'David','Anderson','505 Walnut St','555-999-0000','david.anderson@example.com','abc123','user'),(9,'Jessica','Taylor','606 Oak St','555-121-2121','jessica.taylor@example.com','welcome123','user'),(11,'John','Doe','123 Main St','555-123-4567','john.doe1@example.com','$2b$10$qeRvLFNxMkTJKNyV.yDZnezmT3jVe7CsjQj.OZfVvGUrVdFUtCfGq','user'),(12,'John','Doe','123 Main St','555-123-4567','john.dojjd@example.com','$2b$10$rcyZ.qMsNZf1LjKtNwsaxu1mIpEGpxj88Btp4LG/cVsUdWH7qUIjq','user'),(13,'hamani','deraji','','','droj@gmail.com','$2b$10$pW6wVGzNmfwzO6viXAXfP.gB2YwVXXARKfoh6qit0tQH6avM4Hgea','user'),(14,'Issam','Hosni','','','IssamHosni@gmail.com','$2b$10$7AByJhYGO/he1img3E8yQulENXXrareQ3GVzh2K5.TldM8P46TAae','user'),(15,'Belalia','Anis','','','anis@gmail.com','$2b$10$/dCMgcE.1vKJA9wCue0HFO4YzAOuG.pcP2Cqduwma6F1wg86r6c02','user'),(16,'Ibrahim','Chaibedraa','','','ibradzm@gmail.com','$2b$10$XX4tYP83IVoJRbZLup/0xuA5Uel4EukG81n.dkQ8Fk4geCH4AQtze','admin'),(17,'Ibrahim','Chaibedraa','','','ibrahim@gmail.com','$2b$10$/VaNRI//GhXMvT192cKfneU1eHGieVd4OTBQLF9ERSYaPs4XuWaE2','user');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-03-22 16:25:11
