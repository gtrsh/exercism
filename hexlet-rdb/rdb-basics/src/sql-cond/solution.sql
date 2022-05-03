SELECT * FROM users
WHERE created_at BETWEEN '2018-11-23' AND '2018-12-12' OR house = 'stark'
ORDER BY created_at DESC;
