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
-- Table structure for table `algeria_cities`
--

DROP TABLE IF EXISTS `algeria_cities`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `algeria_cities` (
  `wilaya_code` varchar(5) NOT NULL,
  `wilaya_name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`wilaya_code`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `algeria_cities`
--

LOCK TABLES `algeria_cities` WRITE;
/*!40000 ALTER TABLE `algeria_cities` DISABLE KEYS */;
INSERT INTO `algeria_cities` VALUES ('01','Adrar'),('02','Chlef'),('03','Laghouat'),('04','Oum El Bouaghi'),('05','Batna'),('06','Bejaia'),('07','Biskra'),('08','Bechar'),('09','Blida'),('10','Bouira'),('11','Tamanrasset'),('12','Tbessa'),('13','Tlemcen'),('14','Tiaret'),('15','Tizi Ouzou'),('16','Alger'),('17','Djelfa'),('18','Jijel'),('19','Setif'),('20','Saida'),('21','Skikda'),('22','Sidi Bel Abbes'),('23','Annaba'),('24','Guelma'),('25','Constantine'),('26','Medea'),('27','Mostaganem'),('28','MSila'),('29','Mascara'),('30','Ouargla'),('31','Oran'),('32','El Bayadh'),('33','Illizi'),('34','Bordj Bou Arreridj'),('35','Boumerdes'),('36','El Tarf'),('37','Tindouf'),('38','Tissemsilt'),('39','El Oued'),('40','Khenchela'),('41','Souk Ahras'),('42','Tipaza'),('43','Mila'),('44','Aein Defla'),('45','Naama'),('46','Aein Temouchent'),('47','Ghardaia'),('48','Relizane'),('49','El MGhair'),('50','El Menia'),('51','Ouled Djellal'),('52','Bordj Baji Mokhtar'),('53','Beni Abbes'),('54','Timimoun'),('55','Touggourt'),('56','Djanet'),('57','In Salah'),('58','In Guezzam');
/*!40000 ALTER TABLE `algeria_cities` ENABLE KEYS */;
UNLOCK TABLES;

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
INSERT INTO `category` VALUES (1,'Electronics','https://ibb.co/GTmJ1hD'),(2,'Clothing','https://ibb.co/cTnRY7g'),(3,'Books','https://ibb.co/w7rvKB0'),(4,'Home and Furniture','https://ibb.co/JtrBctF'),(5,'Vehicles','https://ibb.co/jvsT4Hr'),(404,'Other',NULL);
/*!40000 ALTER TABLE `category` ENABLE KEYS */;
UNLOCK TABLES;

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comment`
--

LOCK TABLES `comment` WRITE;
/*!40000 ALTER TABLE `comment` DISABLE KEYS */;
/*!40000 ALTER TABLE `comment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `dairas`
--

DROP TABLE IF EXISTS `dairas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `dairas` (
  `daira_code` varchar(5) NOT NULL,
  `daira_name` varchar(255) DEFAULT NULL,
  `wilaya_code` varchar(5) DEFAULT NULL,
  PRIMARY KEY (`daira_code`),
  KEY `wilaya_code` (`wilaya_code`),
  CONSTRAINT `dairas_ibfk_1` FOREIGN KEY (`wilaya_code`) REFERENCES `algeria_cities` (`wilaya_code`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `dairas`
--

LOCK TABLES `dairas` WRITE;
/*!40000 ALTER TABLE `dairas` DISABLE KEYS */;
INSERT INTO `dairas` VALUES ('0101','Adrar','01'),('0102','Tsabit','01'),('0103','Tamest','01'),('0104','Reggane','01'),('0105','In Salah','01'),('0106','In Ghar','01'),('0107','Timimoun','01'),('0108','Tindouf','01'),('0109','Fenoughil','01'),('0201','Chlef','02'),('0202','El Karimia','02'),('0203','Beni Haoua','02'),('0204','Tenes','02'),('0205','Tadjna','02'),('0206','Taougrite','02'),('0207','Ouled Fares','02'),('0208','Boukadir','02'),('0209','Sobha','02'),('0210','Hassasna','02'),('0211','Abou El Hassan','02'),('0212','Ouled Ben Abdelkader','02'),('0301','Laghouat','03'),('0302','Ksar El Hirane','03'),('0303','Gueltat Sidi Saad','03'),('0304','Ain Madhi','03'),('0305','Hassi Delaa','03'),('0306','Sidi Makhlouf','03'),('0307','Brida','03'),('0308','Hadj Mechri','03'),('0309','Tadjmout','03'),('0310','Oued Morra','03'),('0401','Oum El Bouaghi','04'),('0402','Ain Beida','04'),('0403','Ain Mlila','04'),('0404','Ain Fakroun','04'),('0405','El Amiria','04'),('0406','Sigus','04'),('0407','Souk Naamane','04'),('0408','Ksar Sbahi','04'),('0409','El Belala','04'),('0410','Fkirina','04'),('0501','Batna','05'),('0502','Ain Yagout','05'),('0503','Merouana','05'),('0504','Seriana','05'),('0505','Ain Djasser','05'),('0506','Arris','05'),('0507','Timgad','05'),('0508','Ouyoun El Assafir','05'),('0509','NGaous','05'),('0510','Guigba','05'),('0601','Bejaia','06'),('0602','Akbou','06'),('0603','Barbacha','06'),('0604','Beni Maouch','06'),('0605','Chemini','06'),('0606','El Kseur','06'),('0607','Ifri Ouzellaguen','06'),('0608','Kherrata','06'),('0609','Seddouk','06'),('0610','Souk El Thenine','06'),('0611','Tazmalt','06'),('0612','Taskriout','06'),('0613','Tichy','06'),('0701','Biskra','07'),('0702','Oumache','07'),('0703','Sidi Khaled','07'),('0704','MChouneche','07'),('0705','El Ghrous','07'),('0706','Sidi Okba','07'),('0707','Tolga','07'),('0801','Bechar','08'),('0802','Erg Ferradj','08'),('0803','Abadla','08'),('0804','Kenedsa','08'),('0805','Mogheul','08'),('0806','Beni Ounif','08'),('0807','Mechraa Houari Boumedienne','08'),('0808','Igli','08'),('0809','Boukais','08'),('0810','Tabelbala','08'),('0901','Blida','09'),('0902','Chrea','09'),('0903','Oued El Alleug','09'),('0904','Boufarik','09'),('0905','Larbaa','09'),('0906','Ouled Yaich','09'),('0907','Meftah','09'),('0908','Bouinan','09'),('0909','Beni Mered','09'),('1001','Bouira','10'),('1002','Ait Laaziz','10'),('1003','Bechloul','10'),('1004','El Asnam','10'),('1005','Haizer','10'),('1006','Kadiria','10'),('1007','Ait Laaziz','10'),('1008','Taghzout','10'),('1009','Raouraoua','10'),('1101','Tamanrasset','11'),('1102','Abalessa','11'),('1103','In Ghar','11'),('1104','In Guezzam','11'),('1105','Idles','11'),('1106','Tazrouk','11'),('1107','Foggaret Ezzaouia','11'),('1201','Tebessa','12'),('1202','Bir El Ater','12'),('1203','Bir Mokadem','12'),('1204','Boukhadra','12'),('1205','Cheria','12'),('1206','El Aouinet','12'),('1207','El Kouif','12'),('1208','El Ogla','12'),('1209','Morsott','12'),('1210','Negrine','12'),('1301','Tlemcen','13'),('1302','Ain Fezza','13'),('1303','Beni Mester','13'),('1304','Bab El Assa','13'),('1305','Sabra','13'),('1306','Ghazaouet','13'),('1307','Souani','13'),('1401','Tiaret','14'),('1402','Ain Deheb','14'),('1403','Ain Kermes','14'),('1404','Bougara','14'),('1405','Chehaima','14'),('1406','Dahmouni','14'),('1407','Frenda','14'),('1408','Ksar Chellala','14'),('1409','Mahdia','14'),('1410','Mechraa Safa','14'),('1501','Tizi Ouzou','15'),('1502','Ain El Hammam','15'),('1503','Azeffoun','15'),('1504','Boghni','15'),('1505','Bouzguen','15'),('1506','Draa El Mizan','15'),('1507','Freha','15'),('1508','Larba Nait Irathen','15'),('1509','Ouadhia','15'),('1510','Tigzirt','15'),('1601','Alger Centre','16'),('1602','Bab El Oued','16'),('1603','Bir Mourad Rais','16'),('1604','Birkhadem','16'),('1605','Bir Mourad Rais','16'),('1606','Birkhadem','16'),('1607','Bir Mourad Rais','16'),('1608','Birkhadem','16'),('1609','Bir Mourad Rais','16'),('1701','Djelfa','17'),('1702','Ain El Ibel','17'),('1703','Ain Oussera','17'),('1704','Birine','17'),('1705','El Guedid','17'),('1706','Faidh El Botma','17'),('1801','Jijel','18'),('1802','Chekfa','18'),('1803','Chahna','18'),('1804','Taher','18'),('1805','El Milia','18'),('1806','Settara','18'),('1901','Setif','19'),('1902','El Eulma','19'),('1903','Bir El Arch','19'),('1904','Bougaa','19'),('1905','Bir Haddada','19'),('1906','Ain Oulmene','19'),('2001','Saida','20'),('2002','Ain El Hadjar','20'),('2003','Ain Sekhouna','20'),('2004','Doui Thabet','20'),('2005','Ouled Khaled','20'),('2006','Sidi Amar','20'),('2101','Skikda','21'),('2102','Azzaba','21'),('2103','Collo','21'),('2104','El Hadaik','21'),('2105','Benazouz','21'),('2106','Bekkouche Lakhdar','21'),('2201','Sidi Bel Abbes','22'),('2202','Tessala','22'),('2203','Sfisef','22'),('2204','Ain El Berd','22'),('2205','Sidi Lahcene','22'),('2301','Annaba','23'),('2302','El Bouni','23'),('2303','Berrahel','23'),('2304','El Hadjar','23'),('2305','Cheurfa','23'),('2306','Seraidi','23'),('2401','Guelma','24'),('2402','Ain Sandel','24'),('2403','Bouati Mahmoud','24'),('2404','Djeballah Khemissi','24'),('2405','Khezara','24'),('2406','Medjez Amar','24'),('2501','Constantine','25'),('2502','Didouche Mourad','25'),('2503','El Khroub','25'),('2504','El Khroub','25'),('2505','El Khroub','25'),('2506','El Khroub','25'),('2507','El Khroub','25'),('2601','Medea','26'),('2602','Benchicao','26'),('2603','Beni Slimane','26'),('2604','Ouled Bouachra','26'),('2605','Tamesguida','26'),('2606','Ain Ouksir','26'),('2607','Aziz','26'),('2701','Mostaganem','27'),('2702','Ain Nouissy','27'),('2703','Ain Tedeles','27'),('2704','Ain Tedeles','27'),('2705','Ain Tedeles','27'),('2801','MSila','28'),('2802','Ain El Hadjel','28'),('2803','Ain Khadra','28'),('2804','Ain Khadra','28'),('2805','Ain Khadra','28'),('2901','Mascara','29'),('2902','Alaimia','29'),('2903','Alaimia','29'),('2904','Alaimia','29'),('2905','Alaimia','29'),('3001','Ouargla','30'),('3002','Ain Beida','30'),('3003','Ain Beida','30'),('3004','Ain Beida','30'),('3005','Ain Beida','30'),('3101','Oran','31'),('3102','Arzew','31'),('3103','Bir El Djir','31'),('3104','Bir El Djir','31'),('3105','Bir El Djir','31'),('3201','El Bayadh','32'),('3202','Arbaouet','32'),('3203','Arbaouet','32'),('3204','Arbaouet','32'),('3205','Arbaouet','32'),('3301','Illizi','33'),('3302','Djanet','33'),('3303','Bordj Omar Driss','33'),('3304','Bordj Omar Driss','33'),('3305','Bordj Omar Driss','33'),('3401','Bordj Bou Arreridj','34'),('3402','El Achir','34'),('3403','Bordj Ghdir','34'),('3404','El Hamadia','34'),('3405','Ghailasa','34'),('3501','Boumerdes','35'),('3502','Boudouaou','35'),('3503','Boudouaou','35'),('3504','Boudouaou','35'),('3505','Boudouaou','35'),('3601','El Tarf','36'),('3602','Ain El Assel','36'),('3603','Ain Kerma','36'),('3604','Ain El Assel','36'),('3605','Ain El Assel','36'),('3701','Tindouf','37'),('3702','Oum El Assel','37'),('3703','Oum El Assel','37'),('3704','Oum El Assel','37'),('3705','Oum El Assel','37'),('3801','Tissemsilt','38'),('3802','Tissemsilt','38'),('3803','Tissemsilt','38'),('3804','Bordj Bou Naama','38'),('3805','Bordj Bou Naama','38'),('3901','El Oued','39'),('3902','El Oued','39'),('3903','El Oued','39'),('3904','El Oued','39'),('3905','El Oued','39'),('4001','Khenchela','40'),('4002','Babar','40'),('4003','Babar','40'),('4004','Babar','40'),('4005','Babar','40'),('4101','Souk Ahras','41'),('4102','Merahna','41'),('4103','Haddada','41'),('4104','Ouled Driss','41'),('4105','Safel El Ouiden','41'),('4201','Tipaza','42'),('4202','Hadjout','42'),('4203','Bou Ismail','42'),('4204','Sidi Ghiles','42'),('4205','Chaiba','42'),('4301','Mila','43'),('4302','Tassadane Haddada','43'),('4303','Ferdjioua','43'),('4304','Grarem Gouga','43'),('4305','Ahmed Rachedi','43'),('4401','Ain Defla','44'),('4402','Ain Lechiakh','44'),('4403','Ain Lechiakh','44'),('4404','Ain Lechiakh','44'),('4405','Ain Lechiakh','44'),('4501','Naama','45'),('4502','Ain Sefra','45'),('4503','Ain Ben Khelil','45'),('4504','Ain Ben Khelil','45'),('4505','Ain Ben Khelil','45'),('4601','Ain Temouchent','46'),('4602','Ain El Arbaa','46'),('4603','Ain El Arbaa','46'),('4604','Ain El Arbaa','46'),('4605','Ain El Arbaa','46'),('4701','Ghardaia','47'),('4702','Ghardaia','47'),('4703','Ghardaia','47'),('4704','Ghardaia','47'),('4705','Ghardaia','47'),('4801','Relizane','48'),('4802','Relizane','48'),('4803','Relizane','48'),('4804','Relizane','48'),('4805','Relizane','48'),('4901','El MGhair','49'),('4902','El MGhair','49'),('4903','El MGhair','49'),('4904','El MGhair','49'),('4905','El MGhair','49'),('5001','El Menia','50'),('5002','El Menia','50'),('5003','El Menia','50'),('5004','El Menia','50'),('5005','El Menia','50'),('5101','Ouled Djellal','51'),('5102','Ouled Djellal','51'),('5103','Ouled Djellal','51'),('5104','Ouled Djellal','51'),('5105','Ouled Djellal','51'),('5201','Bordj Baji Mokhtar','52'),('5202','Bordj Baji Mokhtar','52'),('5203','Bordj Baji Mokhtar','52'),('5204','Bordj Baji Mokhtar','52'),('5205','Bordj Baji Mokhtar','52'),('5301','Beni Abbes','53'),('5302','Beni Abbes','53'),('5303','Beni Abbes','53'),('5304','Beni Abbes','53'),('5305','Beni Abbes','53'),('5401','Timimoun','54'),('5402','Timimoun','54'),('5403','Timimoun','54'),('5404','Timimoun','54'),('5405','Timimoun','54'),('5501','Touggourt','55'),('5502','Touggourt','55'),('5503','Touggourt','55'),('5504','Touggourt','55'),('5505','Touggourt','55'),('5601','Djanet','56'),('5602','Djanet','56'),('5603','Djanet','56'),('5604','Djanet','56'),('5605','Djanet','56'),('5701','In Salah','57'),('5702','In Salah','57'),('5703','In Salah','57'),('5704','In Salah','57'),('5705','In Salah','57'),('5801','In Guezzam','58'),('5802','In Guezzam','58'),('5803','In Guezzam','58'),('5804','In Guezzam','58'),('5805','In Guezzam','58');
/*!40000 ALTER TABLE `dairas` ENABLE KEYS */;
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
  `posted_by` int DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `category` int DEFAULT NULL,
  `images` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin,
  `pending` tinyint(1) DEFAULT '1',
  `old_price` double(5,2) DEFAULT NULL,
  `description` varchar(2200) DEFAULT NULL,
  `price` double(10,2) DEFAULT NULL,
  `sub_category` int DEFAULT NULL,
  `shipping` tinyint(1) NOT NULL DEFAULT '1',
  PRIMARY KEY (`product_id`),
  KEY `posted_by` (`posted_by`),
  KEY `category` (`category`),
  KEY `sub_category` (`sub_category`),
  CONSTRAINT `product_ibfk_1` FOREIGN KEY (`posted_by`) REFERENCES `user` (`user_id`) ON DELETE CASCADE,
  CONSTRAINT `product_ibfk_2` FOREIGN KEY (`category`) REFERENCES `category` (`category_id`) ON DELETE SET NULL,
  CONSTRAINT `product_ibfk_3` FOREIGN KEY (`sub_category`) REFERENCES `sub_category` (`sub_id`),
  CONSTRAINT `product_chk_1` CHECK (json_valid(`images`))
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product`
--

LOCK TABLES `product` WRITE;
/*!40000 ALTER TABLE `product` DISABLE KEYS */;
INSERT INTO `product` VALUES (7,'SAMSUNG Galaxy Tab A9+',2,'2024-03-23 13:51:51',1,'[\"https://i.ibb.co/7CWLQsK/024e4b13d36d.webp\", \"https://i.ibb.co/1Z6Z9BZ/339b141d3a23.webp\", \"https://i.ibb.co/D7YJSFn/1a01f9e9ec37.png\"]',0,NULL,'SAMSUNG Galaxy Tab A9+ Tablet 11?├ç┬Ñ 64GB Android Tablet, Big Screen, Quad Speakers, Upgraded Chipset, Multi Window Display, Slim, Light, Durable Design, US Version, 2023, Graphite ',45000.00,1,1),(8,'Sceptre 24-inch Professional',2,'2024-03-23 13:56:09',1,'[\"https://i.ibb.co/KxsVdSd/c1d2dbe38d6f.jpg\", \"https://i.ibb.co/CzRfDx9/55aac08cc995.jpg\", \"https://i.ibb.co/fvMhhwR/e3cd9eea6d94.jpg\"]',1,NULL,'Sceptre 24-inch Professional Thin 1080p LED Monitor 99% sRGB 2x HDMI VGA Build-in Speakers, Machine Black (E248W-19203R Series) ',53500.00,2,1),(9,'SAMSUNG 990 PRO Series',2,'2024-03-23 13:59:15',1,'[\"https://i.ibb.co/xsb59wW/028fdf06f68d.jpg\", \"https://i.ibb.co/9WrX4Cr/16c43470b1d1.jpg\"]',1,NULL,'SAMSUNG 990 PRO Series - 2TB PCIe Gen4. X4 NVMe 2.0c - M.2 Internal SSD (MZ-V9P2T0B/AM) ',32000.00,2,1),(10,'Jerzees Men Dri-Power Cotton Blend Long Sleeve Tees',1,'2024-03-23 14:02:42',2,'[\"https://i.ibb.co/HFPh2Hd/145990a8ba82.jpg\", \"https://i.ibb.co/N9cHS7f/c1df8ce89d4f.jpg\", \"https://i.ibb.co/2n8cfDV/bee3a3ae4117.jpg\"]',1,NULL,'Jerzees Men Dri-Power Cotton Blend Long Sleeve Tees, Moisture Wicking, Odor Protection, UPF 30+, Sizes S-3x',3200.00,4,1),(11,'Leg Duck Carpenter Jean ',1,'2024-03-23 14:05:47',2,'[\"https://i.ibb.co/j5jnhk2/0a4c674ce282.jpg\", \"https://i.ibb.co/qM51Rqt/4fa9805d9f71.jpg\"]',1,NULL,' Dickies Men Relaxed Fit Straight-Leg Duck Carpenter Jean ',2800.00,5,1),(12,'Men Crewneck Sweater',1,'2024-03-23 14:16:02',2,'[\"https://i.ibb.co/j5jnhk2/0a4c674ce282.jpg\", \"https://i.ibb.co/qM51Rqt/4fa9805d9f71.jpg\"]',1,NULL,'Amazon Essentials Men Crewneck Sweater (Available in Big & Tall) ',2800.00,4,1),(13,'The idiot brain',1,'2024-03-23 14:17:41',3,'[\"https://i.ibb.co/WKWsDKc/4a52597b1d2a.jpg\"]',1,NULL,'The idiot brain',1800.00,10,1),(14,'Atomic habits',1,'2024-03-23 14:18:02',3,'[\"https://i.ibb.co/d7DxsDk/6ea73472671d.jpg\"]',1,NULL,'Atomic Habits',1800.00,10,1),(15,'Rich dad poor dad',1,'2024-03-23 14:18:45',3,'[\"https://i.ibb.co/0hQSsLz/690d532c87cc.jpg\"]',1,NULL,'Rich dad poor dad',1800.00,10,1),(16,'Stephan Armchair',1,'2024-03-23 14:20:35',4,'[\"https://i.ibb.co/b7wjRBd/4d57d78f8dfe.jpg\"]',1,NULL,'Stephan Armchair | ARTFUL LIVING DESIGN-BLACK',4800.00,12,1),(18,'Yaris 2002',1,'2024-03-23 14:24:01',5,'[\"https://i.ibb.co/w05d0Qn/9b99fffccd08.jpg\"]',1,NULL,'Yaris 2002',1200000.00,9,1);
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
INSERT INTO `sessions` VALUES ('H-hwRDk9bIpB5dgFV_nw339fY_8_g2ac',1712989107,'{\"cookie\":{\"originalMaxAge\":604800000,\"expires\":\"2024-04-12T07:48:33.519Z\",\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}'),('KgJ7Uxg794oiR7jdFWw5e8w3fl-GfJh6',1713107268,'{\"cookie\":{\"originalMaxAge\":604800000,\"expires\":\"2024-04-12T07:11:53.036Z\",\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}'),('S6vAmxIse9F9X0u4__zxIfXl0czw32q1',1713476581,'{\"cookie\":{\"originalMaxAge\":604800000,\"expires\":\"2024-04-18T21:42:09.935Z\",\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}'),('V1YrJjJzVjX6yGDFuVxFJ2SILaFO5ZeU',1713573410,'{\"cookie\":{\"originalMaxAge\":604800000,\"expires\":\"2024-04-20T00:17:08.052Z\",\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}'),('rsrxacx8G--H-5LdiaXuYSFYyN2pD_i5',1713575355,'{\"cookie\":{\"originalMaxAge\":604800000,\"expires\":\"2024-04-20T00:45:30.196Z\",\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}');
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
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sub_category`
--

LOCK TABLES `sub_category` WRITE;
/*!40000 ALTER TABLE `sub_category` DISABLE KEYS */;
INSERT INTO `sub_category` VALUES (1,'Phones',NULL,1),(2,'PCs',NULL,1),(3,'Devices',NULL,1),(4,'T-Shirts',NULL,2),(5,'Pants',NULL,2),(6,'Shoes',NULL,2),(7,'Jackets',NULL,2),(8,'Bicycles',NULL,5),(9,'Cars',NULL,5),(10,'Books',NULL,3),(12,'Other',NULL,404);
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
  `wilaya` varchar(5) DEFAULT NULL,
  PRIMARY KEY (`user_id`),
  KEY `fk_user_wilaya` (`wilaya`),
  CONSTRAINT `fk_user_wilaya` FOREIGN KEY (`wilaya`) REFERENCES `algeria_cities` (`wilaya_code`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'John','Doe','123 Main St','555-123-4567','john.doe@example.com','password123','user','46'),(2,'Jane','Smith','456 Elm St','555-987-6543','jane.smith@example.com','securepassword','user','07'),(3,'Alice','Johnson','789 Oak St','555-555-5555','alice.johnson@example.com','strongpassword','user','14'),(4,'Michael','Brown','101 Pine St','555-111-2222','michael.brown@example.com','pass1234','user','29'),(5,'Emily','Davis','202 Maple St','555-333-4444','emily.davis@example.com','qwerty123','user','27'),(6,'James','Wilson','303 Cedar St','555-555-6666','james.wilson@example.com','letmein','user','44'),(7,'Sarah','Martinez','404 Birch St','555-777-8888','sarah.martinez@example.com','password1','user','18'),(8,'David','Anderson','505 Walnut St','555-999-0000','david.anderson@example.com','abc123','user','29'),(9,'Jessica','Taylor','606 Oak St','555-121-2121','jessica.taylor@example.com','welcome123','user','34'),(11,'John','Doe','123 Main St','555-123-4567','john.doe1@example.com','$2b$10$qeRvLFNxMkTJKNyV.yDZnezmT3jVe7CsjQj.OZfVvGUrVdFUtCfGq','user','20'),(12,'John','Doe','123 Main St','555-123-4567','john.dojjd@example.com','$2b$10$rcyZ.qMsNZf1LjKtNwsaxu1mIpEGpxj88Btp4LG/cVsUdWH7qUIjq','user','30'),(13,'hamani','deraji','','','droj@gmail.com','$2b$10$pW6wVGzNmfwzO6viXAXfP.gB2YwVXXARKfoh6qit0tQH6avM4Hgea','user','27'),(14,'Issam','Hosni','','','IssamHosni@gmail.com','$2b$10$7AByJhYGO/he1img3E8yQulENXXrareQ3GVzh2K5.TldM8P46TAae','user','56'),(15,'Belalia','Anis','','','anis@gmail.com','$2b$10$/dCMgcE.1vKJA9wCue0HFO4YzAOuG.pcP2Cqduwma6F1wg86r6c02','user','37'),(16,'Ibrahim','Chaibedraa','','','ibradzm@gmail.com','$2b$10$XX4tYP83IVoJRbZLup/0xuA5Uel4EukG81n.dkQ8Fk4geCH4AQtze','admin','58'),(17,'Ibrahim','Chaibedraa','','','ibrahim@gmail.com','$2b$10$/VaNRI//GhXMvT192cKfneU1eHGieVd4OTBQLF9ERSYaPs4XuWaE2','user','41');
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

-- Dump completed on 2024-04-13  2:11:14
