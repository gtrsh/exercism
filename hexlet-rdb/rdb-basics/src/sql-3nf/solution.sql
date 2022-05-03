CREATE TABLE countries
(
  id   bigint PRIMARY KEY,
  name varchar(255)
);

CREATE TABLE country_regions
(
  id         bigint PRIMARY KEY,
  country_id bigint REFERENCES countries (id),
  name       varchar(255)
);

CREATE TABLE country_region_cities
(
  id                bigint PRIMARY KEY,
  country_region_id bigint REFERENCES country_regions (id),
  name              varchar(255)
);

INSERT INTO countries VALUES (1, 'Россия');
INSERT INTO country_regions VALUES (1, 1, 'Татарстан');
INSERT INTO country_regions VALUES (2, 1, 'Самарская область');
INSERT INTO country_region_cities VALUES (1, 1, 'Бугульма');
INSERT INTO country_region_cities VALUES (2, 1, 'Казань');
INSERT INTO country_region_cities VALUES (3, 2, 'Тольятти');
