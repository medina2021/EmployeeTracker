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
  choiceList();
});

// Function for main menu that asks the user what they want to do
function choiceList() {
  inquirer.prompt([{
    type: "list",
    name: "choices",
    message: "What would you like to do?",
    choices: ["Add Departments", "Add Role", "Add Employee", "View Departments", "View Roles", "View Employees", "Update Employee Role", "Exit the application"],
  }]).then(answers => {
    console.log(answers.choices);
    switch(answers.choices) {
      case "Add Departments":
          // code block
        break;
      case "Add Role":
          // code block
        break;
      case "Add Employee":
          // code block
          break;
      case "View Departments":
          viewDept()
          break;
      case "View Roles":
          viewRoles() 
          break;
      case "View Employees":
        viewEmployees()
          break;
      case "Update Employee Role":
              // code block
          break;        
      default:
      connection.end();
    }
  })
}



// To view the department table
const viewDept = () => {
  connection.query('SELECT * FROM department', (err, res) => {
    if (err) throw err;
    res.forEach(({ id, dept_name}) => {
      console.log(`${id} | ${dept_name}`);
    });
    console.log('-----------------------------------');
  });

  choiceList();
};

// To view the employeerole table
const viewRoles = () => {
  connection.query('SELECT * FROM employeerole', (err, res) => {
    if (err) throw err;
    res.forEach(({ id, title, salary, department_id}) => {
      console.log(`${id} | ${title} | ${salary} | ${department_id}`);
    });
    console.log('-----------------------------------');
  });
};

// To view the employee table
const viewEmployees = () => {
  connection.query('SELECT * FROM employee', (err, res) => {
    if (err) throw err;
    res.forEach(({ id, first_name, last_name, role_id, manager_id}) => {
      console.log(`${id} | ${first_name} | ${last_name} | ${role_id} | ${manager_id}`);
    });
    console.log('-----------------------------------');
  });
};

function addEmployee() {
  inquirer.prompt([{
    type: "input",
    name: "firstName",
    message: "What is employee's first name?",
  }, {
    type: "input",
    name: "lastname",
    message: "What is employee's last name?",
  }, {
    type: "input",
    role: "roleid",
    message: "What is your new role?",
  }, {
    type: "input",
    role: "managerid",
    message: "Are you a manager?",
  }, {
    type: "input",
    title: "title",
    message: "What is the title for this role?",
  }, {
    type: "input",
    Salary: "Salary",
    message: "What is the salary for this role?",
  }, {
    type: "input",
    name: "Departmentid",
    message: "What is the department id number?",
  }


    /* Pass your questions in here */
  ])
  .then((answers) => {
    console.log(answers.firstName, answers.lastname)
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  })
}