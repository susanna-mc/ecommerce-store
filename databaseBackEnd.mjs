import { config } from 'dotenv-safe';
import postgres from 'postgres';

config();

const sql = postgres(
  'postgres://ecommerce_store:ecommerce_store@localhost:5432/ecommerce_store',
);

console.log(
  await sql`
  SELECT * FROM products;
  `,
);
