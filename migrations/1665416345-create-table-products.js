exports.up = async (sql) => {
  await sql`
    CREATE TABLE products(
  id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  type varchar(30) NOT NULL,
  name varchar(100) NOT NULL,
  alt varchar(500) NOT NULL,
  description varchar(1000) NOT NULL,
  price integer
  );
  `;
};

exports.down = async (sql) => {
  await sql`
    DROP TABLE products
  `;
};
