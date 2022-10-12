export const products = [
  {
    id: 1,
    type: 'baby',
    name: 'Baby Jackalope',
    alt: 'A light brown baby jackalope sitting on a grey porch.',
    description: `The perfect time to bring a jackalope into your home is as a baby! Not only do you get to enjoy those adorable baby bunny bonding moments, but jackalope rearing is much easier when they are trained by their owner from an early age. Our baby jackalopes are acquired from skilled and humane breeders, who select the healthiest traits in jackalopes, not the traits that meet the whims and styles of the highest pedigree. This ensures that our babies are created with an eye toward a long and happy lifespan that won't be mired with the health problems of inbreeding.`,
    price: 200,
  },
  {
    id: 2,
    type: 'adolescent',
    name: 'Adolescent Jackalope',
    alt: 'A light brown adolescent jackalope sitting in a grassy field amongst some leaves.',
    description: `An adolescent jackalope is a great choice for people who want to enjoy the earlier stages of their pet's life but prefer not to struggle with the training period required for baby jackalopes. All our adolescent jackalopes come fully house-trained, vaccinated, and neutered, providing an easy experience for first-time jackalope owners.`,
    price: 450,
  },
  {
    id: 3,
    type: 'adult',
    name: 'Adult Jackalope',
    alt: 'A black and white photos of an adult jackalope with light fur in a field with a landscape of trees in the background.',
    description:
      'The best way to build rapport with an adult jackalope is to offer its favorite drink, whiskey. They have the unique ability to imitate human voices, and they only procreate during lightning strikes. Our adult jackalopes come fully house-trained, vaccinated, and neutered, providing an easy experience for first-time jackalope owners.',
    price: 500,
  },
  {
    id: 4,
    type: 'warrior',
    name: 'Warrior Jackalope',
    alt: 'A highly saturated photo of a warrior jackalope jumping over green bushes in front of a blue sky with a few clouds.',
    description:
      'Warrior jackalopes are one of the fiercest animals in North America. Hunters settling the Wild West were known to wear stove pipes on their legs to avoid being gorged by the antlers of the jackalopes who would ambush them. Warrior jackalopes are trained by their elders at an early age to jump great heights and sharpen their antlers on stones. They are also taught boxing and grappling techniques to establish ground control over a downed foe. These powerful animals make for excellent guardians. Our jackalopes have been specially trained to achieve peak situational awareness and identify security threats.',
    price: 1000,
  },
];

exports.up = async (sql) => {
  await sql`
    INSERT INTO products ${sql(
      products,
      'type',
      'name',
      'alt',
      'description',
      'price',
    )}
  `;
};

exports.down = async (sql) => {
  for (const product of products) {
    await sql`
      DELETE FROM
        products
      WHERE
        type = ${product.type} AND
        name = ${product.name} AND
        alt = ${product.alt} AND
				description = ${product.description} AND
				price = ${product.price}
    `;
  }
};
