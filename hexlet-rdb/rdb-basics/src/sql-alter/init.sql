DROP TABLE IF EXISTS users CASCADE;
CREATE TABLE users
(
  id    bigserial PRIMARY KEY,
  email varchar(255) NOT NULL,
  age   integer,
  name  varchar(255)
);

INSERT INTO users (email, age, name) VALUES ('noc@mail.com', 44, 'mike');
