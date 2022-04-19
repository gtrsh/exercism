CREATE TABLE weathers
(
  id          bigint PRIMARY KEY,
  date        date,
  temperature integer
);

INSERT INTO weathers (id, date, temperature) VALUES
(1, '2016-01-01', 10),
(2, '2016-01-02', 25),
(4, '2016-01-03', 20),
(8, '2016-01-04', 30);
