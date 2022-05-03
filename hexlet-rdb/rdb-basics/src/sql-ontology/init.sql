DROP TABLE IF EXISTS users CASCADE;
CREATE TABLE users
(
  id         bigserial PRIMARY KEY,
  email      varchar(255),
  first_name varchar(255)
);
