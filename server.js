const mysql = require("mysql");
const inquirer = require("inquirer");
require("console.table");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "Emerald2020#",
  database: "employeetracker"
});

connection.connect((err) => {
  if (err) throw err;
  console.log(`connected as id ${connection.threadId}`);
    askQuestions();
});

// Function for main menu that asks the user what they want to do
function askQuestions() {
  inquirer.prompt([{
    type: "list",
    name: "choices",
    message: "What would you like to do?",
    choices: ["Add Departments", "Add Role", "Add Employee", "View Departments", "View Employees", "Update Employee Role", "Exit the application"],
  }]).then(answers => {
    console.log(answers.choices);
    switch(answers.choices) {
      case "Add Departments":
          addDepartment()
        break;
      case "Add Role":
          addRole()
        break;
      case "Add Employee":
          addEmployee()
          break;
      case "View Departments":
          viewDepartments()
          break;
      case "View Employees":
        viewEmployees()
          break;
      case "Update Employee Role":
            updateEmployeeRole()
          break;        
      default:
      connection.end();
    }
  })
}


// To view the department table
function viewDepartments() {
  connection.query('SELECT * FROM department', function (err, data){
    console.table(data);
    askQuestions();
  })
}

// To view the employee table
function viewEmployees() {
  connection.query('SELECT * FROM employee', function (err, data){
    console.table(data);
    askQuestions();
  })
}
function addEmployee(){
   inquirer.prompt([
      {
        name: 'firstName',
        type: 'input',
        message: 'What is employees first name?'
      },
      {
        name: 'lastName',
        type: 'input',
        message: 'What is employees last name?'
      },
      {
        name: 'roleId',
        type: 'number',
        message: 'What is employee role ID?'
      },
      {
        name: 'manager',
        type: 'number',
        message: 'What is the employee managers ID?'
      }
    ]).then(function (res) {
      connection.query('INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES(?, ?, ?, ?)',[res.firstName, res.lastName, res.roleId, res.managerId],
      function(err, data) {
        if(err) throw err;
        console.table("Successfully Inserted");
        askQuestions();
    })
  })
}
function addDepartment() {
        inquirer.prompt([{
          type: "input",
          name: "department",
          message: "What is the department you want to add?"
        },]).then(function(res){
          connection.query('INSERT INTO department (name) VALUES (?)', [res.department],function(err,data){
            if(err) throw err;
            console.table("Successfully Inserted");
            askQuestions();
          })
        })
    }
    function addRole() {
      inquirer.prompt([
        {
          type: "input",
          name: "title",
          message: "enter title:"
      },
      {
        type: "number",
        name: "salary",
        message: "enter salary:"
    },
    {
      type: "number",
      name: "department_id",
      message: "enter department ID:"
    }
    ]).then(function (response){
      connection.query("INSERT INTO roles (title, salary, department_id) values (?,?,?)"[response.title, response.salary, response.department_id], 
      function (err, data){ console.table(data);
      })
      askQuestions();
    })
    }

    function updateEmployeeRole() {
      inquirer.prompt([
        {
          type: "input",
          name: "name",
          message: "which employee would you like to update (use first name)"
        },
        {
          type: "number",
          name: "role_id",
          message: "enter the new role ID:"
        }
      ]).then(function (response){
        connection.query("UPDATE employee SET role_id = ? WHERE first_name = ?", [response.role_id, response.name],
        function (err, data){
          console.table(data);
        })
        askQuestions();
      })
    }