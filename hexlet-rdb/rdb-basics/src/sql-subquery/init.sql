CREATE TABLE categories
(
  id    SERIAL PRIMARY KEY,
  name  character varying UNIQUE NOT NULL,
  state character varying        NOT NULL
);

CREATE TABLE goods
(
  id          SERIAL PRIMARY KEY,
  category_id integer,
  name        character varying UNIQUE NOT NULL,
  price       numeric
);

INSERT INTO categories (id, name, state) VALUES
(1, 'cars', 'published'),
(2, 'products', 'unpublished'),
(3, 'computers', 'published');

INSERT INTO goods (category_id, name, price) VALUES
(1, 'bmw', 2.10), (null, 'kia', 10.02), (2, 'eggs', 2.13),
(1, 'nissan', 0.9), (2, 'milk', 1.02), (null, 'butter', 2.2);
