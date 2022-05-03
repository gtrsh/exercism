CREATE TABLE orders
(
  id         bigserial PRIMARY KEY,
  user_id    bigint REFERENCES users (id),
  created_at timestamp
);

CREATE TABLE goods
(
  id    bigserial PRIMARY KEY,
  name  varchar(255),
  price integer
);

CREATE TABLE order_items
(
  id       bigserial PRIMARY KEY,
  order_id bigint REFERENCES orders (id),
  good_id  bigint REFERENCES goods (id),
  price    integer
);
