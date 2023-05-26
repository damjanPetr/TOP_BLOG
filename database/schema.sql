create TABLE users(
    `id` int not null auto_increment,
    `username` VARCHAR(50) null DEFAULT null,
    `password` VARCHAR(32) NOT NULL,
    `registered_at` DATETIME NOT NULL,
    `lastLogin` DATETIME NULL DEFAULT NULL,
    `intro` TINYTEXT NULL DEFAULT NULL,
    `profile` TEXT NULL DEFAULT NULL,
    `email` VARCHAR(30) not null,
    PRIMARY KEY (`id`)
);
CREATE TABLE `blog`.`posts` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `author_id` INT NOT NULL,
    `title` VARCHAR(75) NOT NULL,
    `summary` TINYTEXT NULL,
    `published` TINYINT(1) NOT NULL DEFAULT 0,
    `created_at` DATETIME NOT NULL,
    `updated_at` DATETIME NULL DEFAULT NULL,
    `published_at` DATETIME NULL DEFAULT NULL,
    `content` TEXT NULL DEFAULT NULL,
    PRIMARY KEY (`id`),
    CONSTRAINT `fk_post_user` FOREIGN KEY (`author_Id`) REFERENCES `blog`.`users` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
);
CREATE TABLE `blog`.`comments`(
    `id` int not null auto_increment,
    `post_id` BIGINT not NULL,
    `body` VARCHAR(255) not null,
    `created_at` datetime not null,
    PRIMARY KEY (`id`),
    CONSTRAINT `fk_comment_post` FOREIGN KEY (`post_id`) REFERENCES `blog`.`posts` (`id`)
);