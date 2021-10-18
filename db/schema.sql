CREATE DATABASE employeetracker;

USE employeetracker;

-- Table for department
CREATE TABLE department(
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(30) NOT NULL,
    PRIMARY KEY (id)
);

-- Table for employeerole
CREATE TABLE employeerole(
  id INT NOT NULL auto_increment,
  title VARCHAR(30) NOT NULL,
  salary DECIMAL (10,2) NOT NULL,
  department_id INT NOT NULL,
  PRIMARY KEY (id)
);

-- Table for employee
CREATE TABLE employee(
id INT NOT NULL auto_increment, 
first_name VARCHAR(30) NOT NULL,
last_name VARCHAR(30) NOT NULL,
role_id INT NOT NULL,
manager_id INT,
PRIMARY KEY (id)
);