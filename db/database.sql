-- CREATE DATABASE IF NOT EXISTS challenge;


CREATE TABLE users (
  id INT(11) NOT NULL AUTO_INCREMENT,
  email VARCHAR(45),
  password VARCHAR(45), 
  PRIMARY KEY(id)
);



CREATE TABLE tasks (
  id INT PRIMARY KEY AUTO_INCREMENT,
  date VARCHAR(50),
  description VARCHAR(500),
  user_id INT,
  FOREIGN KEY (user_id) REFERENCES users(id)
);