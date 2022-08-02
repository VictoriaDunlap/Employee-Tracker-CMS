DROP DATABASE IF EXISTS employee_data; 
CREATE DATABASE employee_data; 

USE employee;

CREATE TABLE department (
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT, 
    dep_name VARCHAR(30)NOT NULL,
);

CREATE TABLE role_types (
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,  
    title VARCHAR(30) NOT NULL,
    salary DECIMAL, 
    department_id INT NOT NULL,
    FOREIGN KEY (department_id)
    REFERENCES department(id)
    ON DELETE SET NULL 
);

CREATE TABLE employee (
    id INT PRIMARY NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(30) NOT NULL, 
    last_name VARCHAR(30) NOT NULL, 
    role_id INT NOT NULL,
    manager_id INT,
    department_id INT NOT NULL,
    FOREIGN KEY (role_id)
    REFERENCES role_types(id)
    ON DELETE SET NULL,
    FOREIGN KEY (department_id)
    REFERENCES role_types(department_id)
    ON DELETE SET NULL,
    FOREIGN KEY (manager_id)
    REFERENCES employee(id)
    ON DELETE SET NULL,
);