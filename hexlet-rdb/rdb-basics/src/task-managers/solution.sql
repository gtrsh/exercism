SELECT em.name FROM employees AS em
JOIN employees AS mn ON em.manager_id = mn.id
WHERE em.salary > mn.salary;
