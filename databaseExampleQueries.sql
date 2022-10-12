-- This file is only my notes, changing
-- this file doesn't change anything in
-- the database

-- Create animals table
CREATE TABLE products(
  id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  type varchar(30) NOT NULL,
  name varchar(100) NOT NULL,
  alt varchar(500) NOT NULL,
  description varchar(1000) NOT NULL,
  price integer
  );


-- Insert some animals (C in CRUD - Create)
INSERT INTO products
  (type, name, alt, description, price)
VALUES
  ('baby', 'Baby Jackalope', 'A light brown baby jackalope sitting on a grey porch.', 'The perfect time to bring a jackalope into your home is as a baby! Not only do you get to enjoy those adorable baby bunny bonding moments, but jackalope rearing is much easier when they are trained by their owner from an early age. Our baby jackalopes are acquired from skilled and humane breeders, who select the healthiest traits in jackalopes, not the traits that meet the whims and styles of the highest pedigree. This ensures that our babies are created with an eye toward a long and happy lifespan that won''t be mired with the health problems of inbreeding.', 200),
  ('adolescent', 'Adolescent Jackalope', 'A light brown adolescent jackalope sitting in a grassy field amongst some leaves.', 'An adolescent jackalope is a great choice for people who want to enjoy the earlier stages of their pet''s life but prefer not to struggle with the training period required for baby jackalopes. All our adolescent jackalopes come fully house-trained, vaccinated, and neutered, providing an easy experience for first-time jackalope owners.', 450),
  ('adult', 'Adult Jackalope', 'black and white photos of an adult jackalope with light fur in a field with a landscape of trees in the background.', 'The best way to build rapport with an adult jackalope is to offer its favorite drink, whiskey. They have the unique ability to imitate human voices, and they only procreate during lightning strikes. Our adult jackalopes come fully house-trained, vaccinated, and neutered, providing an easy experience for first-time jackalope owners.', 500),
  ('warrior', 'Warrior Jackalope', 'A highly saturated photo of a warrior jackalope jumping over green bushes in front of a blue sky with a few clouds.', 'Warrior jackalopes are one of the fiercest animals in North America. Hunters settling the Wild West were known to wear stove pipes on their legs to avoid being gorged by the antlers of the jackalopes who would ambush them. Warrior jackalopes are trained by their elders at an early age to jump great heights and sharpen their antlers on stones. They are also taught boxing and grappling techniques to establish ground control over a downed foe. These powerful animals make for excellent guardians. Our jackalopes have been specially trained to achieve peak situational awareness and identify security threats.', 1000);


-- Read some animals (R in CRUD - Read)
SELECT * FROM products;
