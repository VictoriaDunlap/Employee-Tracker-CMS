const express = require('express');
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
  console.log(`Connected to the employee_data database.`)
);

// creates a query that selects all the data from classlist to run it 
db.query('SELECT * FROM employee', function (err, results) {
  console.log(results);
});

app.use((req, res) => {
  res.status(404).end();
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});