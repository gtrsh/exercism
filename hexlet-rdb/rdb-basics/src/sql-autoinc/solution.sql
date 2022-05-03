CREATE TABLE article_categories
(
  id   bigint PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name varchar(255)
);

INSERT INTO article_categories (name) VALUES ('Интересное'), ('Популярное');
