SELECT
  departments.name,
  max(employees.salary) AS salary
FROM departments
JOIN employees ON employees.department_id = departments.id
GROUP BY departments.id;
