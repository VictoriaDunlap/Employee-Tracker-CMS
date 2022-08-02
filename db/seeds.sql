INSERT INTO department (dep_name)
VALUES ('Engineering'),
('Finance'),
('Legal'),
('Sales');

INSERT INTO role_types (title, salary, department_id)
VALUES ('Sales Lead', '100000', 4),
('Salesperson', '80000', 4),
('Lead Engineer', '150000', 1),
('Software Engineer', '120000', 1),
('Account Manager', '160000', 2),
('Accountant', '125000', 2),
('Legal Team Lead', '250000', 3),
('Lawyer', '190000', 3);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('John', 'Doe', 9, NULL),
('Mike', 'Chan', 10, 33),
('Ashley', 'Rodriguez', 11, NULL),
('Kevin', 'Tupik', 12, 35),
('Kunal', 'Singh', 13, NULL),
('Malia', 'Brown', 14, 37),
('Sarah', 'Lourd', 15, NULL),
('Tom', 'Allen', 16, 39);quit 