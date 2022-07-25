DROP DATABASE IF EXISTS employee_data; 
CREATE DATABASE employee_data; 

USE employee;

CREATE TABLE department (
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT, 
    name VARCHAR(30)NOT NULL,
);

CREATE TABLE role (
    id INT PRIMARY KEY NOT NULL, 
    title VARCHAR(30) NOT NULL,
    salary DECIMAL 
    department_id INT NOT NULL,
    FOREIGN KEY (department_id)
    REFERENCES department(id)
    ON DELETE SET NULL 
);

CREATE TABLE employee (
    id INT PRIMARY NOT NULL,
    first_name VARCHAR(30) NOT NULL, 
    last_name VARCHAR(30) NOT NULL, 
    role_id INT NOT NULL,
    manager_id INT NOT NULL,
    FOREIGN KEY (role_id)
    REFERENCES role(title)
    ON DELETE SET NULL,
    FOREIGN KEY (manager_id)
    REFERENCES employee(role_id)
    ON DELETE SET NULL,
);