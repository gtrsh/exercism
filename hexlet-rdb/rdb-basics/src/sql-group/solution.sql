SELECT
  EXTRACT(year FROM birthday) AS year_of_birthday,
  COUNT(*) AS count
FROM users
WHERE birthday IS NOT NULL
GROUP BY year_of_birthday
ORDER BY year_of_birthday;
