const express = require('express');
const inquirer = require('inquirer');
const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;
// create a server 
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// this connects express to mysql
const db = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: 'iwantin',
    database: 'employee_data'
  },
);

const initialQuestion = async () => {
  inquirer.prompt([
  {
      type: 'list',
      message: 'What would you like to do?',
      choices: ['View All Employees', 'Add Employee', 'Update Employee Role', 'View All Roles', 'Add Role', 'View All Departments', 'Add Department', 'Quit'],
      name: 'init',
  }
]).then(({init}) => {
    switch (init) {
      case 'View All Employees':
        allEmployees()
      break;
      case 'Add Employee':
        addEmployee()
      break;
      case 'Update Employee Role':
        updateEmloyeeRole()
      break;
      // case 'View All Roles':
      // break;
      // case 'Add Role':
      // break;
      // case 'View All Departments':
      // break;
      // case 'Add Department':
      // break;
      // case 'Quit':
    }}
  )
}

initialQuestion()

// SELECT employee.manager_id FROM employee WHERE employee.manager_id <> employee.id
// need to work on te join function 
// const allEmployees = () => {
//   db.query('SELECT employee.id, employee.first_name, employee.last_name, role_types.title, role_types.salary, department.dep_name, employee.manager_id FROM department INNER JOIN role_types ON role_types.department_id = department.id INNER JOIN employee ON role_types.id = employee.role_id', function (err, results) {
//   console.table(results);
//   })
// }

const addEmployee = () => {
  inquirer.prompt([
    {
      type: 'input',
      message: 'What is their first name?',
      name: 'firstName',
    },
    {
    type: 'input',
    message: 'What is their last name?',
    name: 'lastName',
    },
    {
    type: 'list',
    message: 'What is their role?',
    choices: ['Sales Lead', 'Salesperson', 'Lead Engineer', 'Software Engineer', 'Account Manager', 'Accountant', 'Legal Team Lead', 'Lawyer'],
    name: 'employeeRole',
    },
    {
      type: 'input',
      message: 'Who is their manager?',
      name: 'employeeManager',
    },
  ])
  
  db.query('INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES = ?', function (err, results) {
    console.table(results)
  })
}

const updateEmloyeeRole = () => {
  // collects employees from the database
  const getEmployees = () => {
  return new Promise((res, rej) => {
    db.query(`SELECT CONCAT(employee.first_name, ' ', employee.last_name) AS Name FROM employee`, (err,res) => {
      console.table(res)
    })
  })
}
  const employeesToUpdate = getEmployees()
  console.log(employeesToUpdate)
  return new Promise((res,rej) => {
    inquirer.prompt({
      type: 'list',
      message: 'Select employee.',
      choices: [employeesToUpdate],
      name: 'employeesToUpdateQuestion',
    })
  })
}

// collects employees from the database
const getEmployees = () => {
  return new Promise((res, rej) => {
    db.query(`SELECT CONCAT(employee.first_name, ' ', employee.last_name) AS Name FROM employee`, (err,res) => {
      console.table(res)
    })
  })
}

app.use((req, res) => {
  res.status(404).end();
});

app.listen(PORT, () => {
  // console.log(`Server running on port ${PORT}`);
});