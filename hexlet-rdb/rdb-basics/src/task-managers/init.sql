CREATE TABLE employees
(
  id         bigint PRIMARY KEY,
  name       varchar(10),
  salary     integer,
  manager_id bigint
);

INSERT INTO employees (id, name, salary, manager_id) VALUES
(1, 'Joe', 70000, 3),
(2, 'Henry', 80000, 4),
(3, 'Sam', 60000, NULL),
(4, 'Max', 90000, NULL);
