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

const initialQuestion = () => {
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
      // case 'Update Employee Role':
      // break;
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

// need to work on te join function 
const allEmployees = () => {
  db.query('SELECT * FROM employee', function (err, results) {
  console.table(results);
  })
}

const addEmployee = () => {
  
  db.query('')
}

app.use((req, res) => {
  res.status(404).end();
});

app.listen(PORT, () => {
  // console.log(`Server running on port ${PORT}`);
});