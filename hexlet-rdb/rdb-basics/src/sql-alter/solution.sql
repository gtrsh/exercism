ALTER TABLE users
  ADD UNIQUE (email),
  ADD COLUMN created_at timestamp;

ALTER TABLE users RENAME COLUMN name TO first_name;
ALTER TABLE users DROP COLUMN age;

ALTER TABLE users ALTER COLUMN first_name SET NOT NULL;
