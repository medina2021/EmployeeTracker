CREATE DATABASE employeetracker;

USE employeetracker;

-- Table for department
CREATE TABLE department(
    id INT NOT NULL AUTO_INCREMENT,
    dept_name VARCHAR(30) NOT NULL,
    PRIMARY KEY (id)
);

-- Table for employeerole
CREATE TABLE employeerole(
  id INT NOT NULL PRIMARY KEY auto_increment,
  title VARCHAR(30) NOT NULL,
  salary DECIMAL (10,2) NOT NULL,
  department_id INT NOT NULL,
  CONSTRAINT fk_department
  FOREIGN KEY (department_id) REFERENCES department(id)
);

-- Table for employee
CREATE TABLE employee(
id INT NOT NULL PRIMARY KEY auto_increment, 
first_name VARCHAR(30) NOT NULL,
 last_name VARCHAR(30) NOT NULL,
 role_id INT NOT NULL,
 CONSTRAINT fk_role
 FOREIGN KEY (role_id) REFERENCES employeerole(id),
 manager_id INT,
 CONSTRAINT fk_manager
 FOREIGN KEY (manager_id) REFERENCES employee(id)
);