USE employeetracker;

INSERT INTO department (dept_name)
VALUES ("Accounting");
INSERT INTO department (dept_name)
VALUES ("Operations");
INSERT INTO department (dept_name)
VALUES ("Engineering");
INSERT INTO department (dept_name)
VALUES ("Creative");
INSERT INTO department (dept_name)
VALUES ("Logistics");

INSERT INTO employeerole (title, salary, department_id)
VALUES ("Operations Manager", 80000, 2);
INSERT INTO employeerole (title, salary, department_id)
VALUES ("Creative Director", 75000, 4);
INSERT INTO employeerole (title, salary, department_id)
VALUES ("Controller", 70000, 1);
INSERT INTO employeerole (title, salary, department_id)
VALUES ("Accounts Payable", 60000, 1);
INSERT INTO employeerole (title, salary, department_id)
VALUES ("Accounts Receivable", 60000, 1);
INSERT INTO employeerole (title, salary, department_id)
VALUES ("Lead Engineer", 90000, 3);
INSERT INTO employeerole (title, salary, department_id)
VALUES ("Logistics Director", 65000, 5);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Gilbert", "Garcia", 1, NULL);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Elizabeth", "Ceballos", 2, NULL);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Gen", "Wong", 3, NULL);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Jennifer", "Wills", 4, 3);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Xi", "Young", 5, 1, 3);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Carlos", "Duncan", 6, NULL);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Dave", "Bell", 7, NULL);

