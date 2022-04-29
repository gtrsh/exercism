SELECT students.name FROM students
INNER JOIN universities ON universities.id = students.university_id
WHERE universities.name = 'name2';
