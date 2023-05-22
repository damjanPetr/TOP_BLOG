-- MySQL Workbench Forward Engineering
SET @OLD_UNIQUE_CHECKS = @@UNIQUE_CHECKS,
    UNIQUE_CHECKS = 0;
SET @OLD_FOREIGN_KEY_CHECKS = @@FOREIGN_KEY_CHECKS,
    FOREIGN_KEY_CHECKS = 0;
SET @OLD_SQL_MODE = @@SQL_MODE,
    SQL_MODE = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';
-- -----------------------------------------------------
-- Schema blog_
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema blog_
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `blog_` DEFAULT CHARACTER SET utf8;
USE `blog_`;
-- -----------------------------------------------------
-- Table `blog_`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `blog_`.`users` (
    `id` INT NOT NULL,
    `username` VARCHAR(20) NULL,
    `password` VARCHAR(15) NULL,
    `posts_id` INT NULL,
    `date_created` DATETIME NULL,
    PRIMARY KEY (`id`)
) ENGINE = InnoDB;
-- -----------------------------------------------------
-- Table `blog_`.`posts`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `blog_`.`posts` (
    `id` INT NOT NULL,
    `comments` VARCHAR(45) NULL,
    `title` VARCHAR(45) NULL,
    `body` TEXT NULL,
    `date_created` DATE NULL,
    `users_id` INT NOT NULL,
    PRIMARY KEY (`id`, `users_id`),
    INDEX `fk_posts_users1_idx` (`users_id` ASC) VISIBLE,
    CONSTRAINT `fk_posts_users1` FOREIGN KEY (`users_id`) REFERENCES `blog_`.`users` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE = InnoDB;
-- -----------------------------------------------------
-- Table `blog_`.`comments`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `blog_`.`comments` (
    `id` INT NOT NULL,
    `date_created` DATE NULL,
    `users_id` INT NULL,
    `body` VARCHAR(255) NULL,
    PRIMARY KEY (`id`),
    CONSTRAINT `post_id` FOREIGN KEY (`id`) REFERENCES `blog_`.`posts` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE = InnoDB COMMENT = '	';
SET SQL_MODE = @OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS = @OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS = @OLD_UNIQUE_CHECKS;