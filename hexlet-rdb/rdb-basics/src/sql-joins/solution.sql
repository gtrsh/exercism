SELECT
  topics.id,
  users.first_name
FROM topics
JOIN users ON topics.user_id = users.id
WHERE users.email LIKE '%@lannister.com'
ORDER BY topics.created_at;
