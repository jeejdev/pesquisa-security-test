CREATE DATABASE IF NOT EXISTS teste;
USE teste;

CREATE TABLE IF NOT EXISTS users (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(100)
);

INSERT INTO users (name) VALUES ('Skylab'), ('Nicolas Cage'), ('Park Ji-min');
