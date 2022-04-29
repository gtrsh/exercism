CREATE TABLE universities
(
  id   bigint PRIMARY KEY,
  name varchar(255) NOT NULL
);

CREATE TABLE students
(
  id            bigint PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name          varchar(255)                        NOT NULL,
  university_id bigint REFERENCES universities (id) NOT NULL
);

INSERT INTO universities (id, name) VALUES
(1, 'name1'),
(2, 'name2'),
(3, 'name3');

INSERT INTO students (name, university_id) VALUES
('vASYA', 1),
('petya', 2),
('misha', 2),
('anna', 3);
