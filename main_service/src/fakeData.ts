import { getRepository, createConnection } from 'typeorm';
import { Product } from './database/entity/Product';
import faker from 'faker';

let products: Array<{ name: string, category: string, quantity: number, price: number }> = [];

for (let i = 1; i < 200; i++) {
  products.push({
    name: faker.commerce.productName(),
    category: faker.commerce.product(),
    quantity: faker.random.number(50),
    price: parseInt(faker.commerce.price(1000, 3000))
  })
}

const databaseConnection = createConnection();
databaseConnection.then(() => {
  console.log('Connect to database successfully!');

  const productRepository = getRepository(Product);

  const seedData = async () => {
    await productRepository.save(products);
  }
  seedData();
})

