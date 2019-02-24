CREATE DATABASE burgers_db;
use burgers_db;

CREATE TABLE burgers (
id INTEGER(30) NOT NULL AUTO_INCREMENT,
item_name VARCHAR(30) NOT NULL,
devoured BOOLEAN,
PRIMARY KEY (id)
);