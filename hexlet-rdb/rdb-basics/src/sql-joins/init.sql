DROP TABLE IF EXISTS users;
CREATE TABLE users
(
  id         bigint PRIMARY KEY,
  birthday   DATE,
  email      VARCHAR(255) UNIQUE NOT NULL,
  first_name VARCHAR(50),
  created_at TIMESTAMP
);

INSERT INTO users (id, first_name, email, birthday) VALUES
(1, 'Sansa', 'sansa@winter.com', '1999-10-23'),
(2, 'Jon', 'jon@winter.com', '1999-10-07'),
(3, 'Daenerys', 'daenerys@drakaris.com', '1999-10-23'),
(4, 'Arya', 'arya@clonelannister.com', '2003-03-29'),
(5, 'Robb', 'robb@winter.com', '1999-11-23'),
(6, 'Brienne', 'brienne@tarth.com', '2001-04-04'),
(7, 'Sarsei', 'sarsei@lannister.com', '1975-01-11'),
(8, 'Bronn', 'bronn@nobody.com', '1998-03-01'),
(9, 'Tirion', 'tirion@lannister.com', '1980-09-03'),
(10, 'Mary', 'mary@lannister.com', '1985-10-05');

DROP TABLE IF EXISTS topics;
CREATE TABLE topics
(
  id         bigint PRIMARY KEY,
  user_id    bigint REFERENCES users (id) NOT NULL,
  title      varchar(255),
  body       text,
  created_at TIMESTAMP                    NOT NULL
);

INSERT INTO "topics" ("body", "created_at", "id", "title", "user_id") VALUES
(
  'Cupiditate id animi eveniet consequatur dolor et repudiandae vitae.',
  '2018-12-06 09:40:17.646',
  1,
  'beatae voluptatem commodi',
  1
),
(
  'Dolore eos nesciunt. Praesentium consectetur repellendus officia. Commodi quas corporis et ex numquam occaecati rem rem praesentium. Eveniet eos ea non. Eius a libero non soluta aliquid neque laborum tempora.',
  '2018-12-06 06:33:08.428',
  2,
  'tempora accusamus nostrum',
  2
),
(
  'vel eius itaque',
  '2018-12-06 00:20:11.835',
  3,
  'eaque fugiat consequatur',
  3
),
(
  'id facere eaque',
  '2018-12-06 14:55:08.990',
  4,
  'aut exercitationem expedita',
  4
),
(
  'Omnis accusamus voluptatem quo quos iusto. Non inventore asperiores quia optio in. Harum vitae eligendi. Voluptatem laborum omnis rerum sed quis maxime ipsam facilis. Explicabo aut omnis nihil in quod qui. Voluptas cum delectus suscipit quia saepe.',
  '2018-12-06 11:26:20.572',
  5,
  'voluptatem soluta similique',
  1
),
(
  'Ut blanditiis est tenetur nemo. Nesciunt quod architecto qui libero vitae veritatis nam velit quo. Et nulla blanditiis enim officia dolore non mollitia quia in.',
  '2018-12-06 00:46:27.093',
  6,
  'in facilis quasi',
  2
),
(
  'Odit repudiandae qui deleniti itaque nihil sint. Non est eos incidunt nulla ut. Dolore et assumenda voluptas iusto omnis.',
  '2018-12-06 00:46:32.712',
  7,
  'delectus in nihil',
  3
),
(
  'Amet deserunt a eum cum. Eveniet ut quo. Inventore qui cupiditate autem ratione. Doloremque ut consequatur illum et voluptatem delectus voluptas dolorum at. Sapiente consequatur magni illo eum qui.',
  '2018-12-05 17:10:37.949',
  8,
  'placeat maiores numquam',
  1
),
('repellendus', '2018-12-06 12:36:35.357', 9, 'enim maiores ut', 7),
(
  'Nemo voluptas accusamus sed delectus voluptatum.',
  '2018-12-05 23:36:42.776',
  10,
  'vero accusantium consectetur',
  1
),
(
  'Maxime sit aut molestiae non nesciunt magnam ad. Aut rerum enim aut laborum et et corporis et aperiam. Qui aut molestias neque ut sequi.',
  '2018-12-06 08:44:46.846',
  11,
  'nobis voluptatem officia',
  1
),
(
  'Libero ex aut facere temporibus molestias vel et ratione consectetur. Aspernatur repellat placeat sit optio nihil. Vel sunt numquam quidem harum cumque repellendus voluptatem vel nihil. Est voluptatibus explicabo reprehenderit dolor voluptates. Voluptate sapiente possimus cum esse quidem quo a.',
  '2018-12-06 09:45:12.285',
  12,
  'impedit quibusdam aut',
  9
),
(
  'A ipsam minus. Aut expedita nobis quia necessitatibus numquam quis. Neque sapiente delectus corporis labore beatae rerum. Asperiores eos nulla pariatur odio. Expedita aut modi ipsa a et laborum blanditiis dolorem.',
  '2018-12-05 17:40:37.284',
  13,
  'debitis iusto blanditiis',
  9
);
