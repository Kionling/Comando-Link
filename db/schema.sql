DROP DATABASE IF EXISTS linkDB; 
CREATE DATABASE linkDB; 
USE linkDB;

CREATE TABLE user (
    id INTEGER AUTO_INCREMENT, 
    username VARCHAR(100), 
    password VARCHAR(30), 
    PRIMARY KEY (id)
);

CREATE TABLE email (
    id INTEGER AUTO_INCREMENT,
    name VARCHAR(300),
    message VARCHAR(500), 
    PRIMARY KEY (id)
);