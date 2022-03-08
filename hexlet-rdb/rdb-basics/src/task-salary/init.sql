CREATE TABLE departments
(
  id   bigint PRIMARY KEY,
  name varchar(10)
);

CREATE TABLE employees
(
  id            bigint PRIMARY KEY,
  name          varchar(10),
  salary        integer,
  department_id bigint
);

INSERT INTO departments (id, name) VALUES
(1, 'IT'),
(2, 'Sales'),
(3, 'Marketing');

INSERT INTO employees (id, name, salary, department_id) VALUES
(1, 'Joe', 70000, 1),
(2, 'Henry', 80000, 2),
(3, 'Sam', 60000, 2),
(4, 'Max', 90000, 1),
(5, 'Mary', 100000, 2),
(6, 'Ada', 80000, 1),
(7, 'Sherlock', 100000, 2),
(8, 'John', 50000, 3);
