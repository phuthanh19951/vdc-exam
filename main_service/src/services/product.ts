import { getRepository, Raw } from 'typeorm';
import { Product } from '../database/entity/Product';
import { Format } from '../utils/format';

export class ProductService {
  async getAll(query: { name?: string, category?: string, price?: number, sort?: string | Array<string>, skip?: number, take?: number }) {
    const repository = getRepository(Product);

    const queryObj: { where?: any, order?: any, skip: number, take: number } = {
      skip: query.skip || 0,
      take: query.take || 20
    };

    if (query.name) {
      queryObj.where = { name: Raw(alias => `${alias} ILIKE '${query.name}%'`) }
    }

    if (query.category) {
      queryObj.where = { ...queryObj.where, category: query.category };
    }

    if (query.sort) {
      const sortColumns = ['name', 'quantity', 'price', 'category'];
      queryObj.order = Format.sort(query.sort, sortColumns);
    }

    const products = await repository.find(queryObj);
    return products;
  }

  async getOneByID(id: string) {
    const repository = getRepository(Product);
    const product = await repository.findOne(id);

    if (!product) {
      throw new Error('Product not found with id: ' + id);
    }

    return product;
  }
}