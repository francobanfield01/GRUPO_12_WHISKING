-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema whisking
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema whisking
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `whisking` DEFAULT CHARACTER SET utf8 ;
USE `whisking` ;

-- -----------------------------------------------------
-- Table `whisking`.`personal_information`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `whisking`.`personal_information` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `address` VARCHAR(100) NULL,
  `province` VARCHAR(30) NULL,
  `city` VARCHAR(30) NULL,
  `postal_code` VARCHAR(15) NULL,
  `createdAt` TIMESTAMP(15) NULL,
  `updatedAt` TIMESTAMP(15) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `whisking`.`order_carts`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `whisking`.`order_carts` (
  `id` INT(11) NOT NULL,
  `user_id` INT(11) NOT NULL,
  `state` VARCHAR(45) NOT NULL,
  `createdAt` TIMESTAMP(15) NULL,
  `updatedAt` TIMESTAMP(15) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `whisking`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `whisking`.`users` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `first_name` VARCHAR(45) NOT NULL,
  `last_name` VARCHAR(45) NOT NULL,
  `email` VARCHAR(70) NOT NULL,
  `pass` VARCHAR(70) NOT NULL,
  `rol` TINYINT(2) NOT NULL,
  `date_of_birth` DATE NOT NULL,
  `phone` VARCHAR(30) NULL,
  `cell_phone` VARCHAR(30) NULL,
  `image` VARCHAR(100) NULL,
  `order_cart_id` INT(11) NULL,
  `personal_information_id` INT(11) NOT NULL,
  `createdAt` TIMESTAMP(15) NULL,
  `updatedAt` TIMESTAMP(15) NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `email_UNIQUE` (`email` ASC) VISIBLE,
  CONSTRAINT `personal_information_id`
    FOREIGN KEY ()
    REFERENCES `whisking`.`personal_information` ()
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `order_cart_id`
    FOREIGN KEY ()
    REFERENCES `whisking`.`order_carts` ()
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `whisking`.`order-items`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `whisking`.`order-items` (
  `id` INT(11) NOT NULL,
  `order_cart_id` INT(11) NOT NULL,
  `product_id` INT(11) NOT NULL,
  `quantity` INT(11) NOT NULL,
  `date_time` DATETIME(20) NULL,
  `createdAt` TIMESTAMP(15) NOT NULL,
  `updatedAt` TIMESTAMP(15) NOT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `order_cart_id`
    FOREIGN KEY ()
    REFERENCES `whisking`.`order_carts` ()
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `whisking`.`categories`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `whisking`.`categories` (
  `id` INT(11) NOT NULL,
  `name` VARCHAR(45) NULL,
  `banner` VARCHAR(60) NULL,
  `createdAt` TIMESTAMP(15) NULL,
  `updatedAt` TIMESTAMP(15) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `whisking`.`products`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `whisking`.`products` (
  `id` INT(11) NOT NULL,
  `name` VARCHAR(200) NOT NULL,
  `price` DECIMAL(11) UNSIGNED NOT NULL,
  `discount` TINYINT(3) UNSIGNED NOT NULL,
  `description` TEXT(800) NULL,
  `cata` TEXT(800) NULL,
  `origen` CHAR(20) NULL,
  `stock` INT(10) NULL,
  `productscol` VARCHAR(45) NULL,
  `image_id` INT(11) NULL,
  `category_id` INT(11) NULL,
  `createdAt` TIMESTAMP(15) NOT NULL,
  `updatedAt` TIMESTAMP(15) NOT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `order_item_id`
    FOREIGN KEY ()
    REFERENCES `whisking`.`order-items` ()
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `category_id`
    FOREIGN KEY ()
    REFERENCES `whisking`.`categories` ()
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `whisking`.`timestamps`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `whisking`.`timestamps` (
  `create_time` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  `update_time` TIMESTAMP NULL);


-- -----------------------------------------------------
-- Table `whisking`.`images`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `whisking`.`images` (
  `id` INT(11) NOT NULL,
  `image` VARCHAR(100) NOT NULL,
  `product_id` INT(11) NOT NULL,
  `createdAt` TIMESTAMP(15) NULL,
  `updatedAt` TIMESTAMP(15) NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `product_id`
    FOREIGN KEY ()
    REFERENCES `whisking`.`products` ()
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
