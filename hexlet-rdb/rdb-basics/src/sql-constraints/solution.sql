CREATE TABLE users
(
  id         bigserial PRIMARY KEY,
  username   varchar(255) UNIQUE NOT NULL,
  email      varchar(255)        NOT NULL,
  created_at timestamp           NOT NULL
);

CREATE TABLE topics
(
  id         bigserial PRIMARY KEY,
  user_id    bigserial REFERENCES users (id),
  body       text      NOT NULL,
  created_at timestamp NOT NULL
);
