import { Format } from '../../utils/format'

describe('Test formatSort function', () => {
  test('Should return empty result if the column is invalid', () => {
    const sortColumns = ['name', 'category', 'price', 'quantity'];
    const sortQuery = 'other:DESC';

    const result = Format.sort(sortQuery, sortColumns);
    expect(result).toEqual({});
  });

  test('Should return order with a `ASC` value if order value is invalid', () => {
    const sortColumns = ['name', 'category', 'price', 'quantity'];
    const sortQuery = 'name:invalid';

    const result = Format.sort(sortQuery, sortColumns);
    expect(result).toEqual({ name: 'ASC' });
  });

  test('Should return right value if sort value is valid (Single sort value)', () => {
    const sortColumns = ['name', 'category', 'price', 'quantity'];
    const sortQuery = 'name:DESC';

    const result = Format.sort(sortQuery, sortColumns);
    expect(result).toEqual({ name: 'DESC' });
  });

  test('Should return right value if sort value is valid (Multiple sort values)', () => {
    const sortColumns = ['name', 'category', 'price', 'quantity'];
    const sortQuery = ['name:DESC', 'category:ASC', 'quantity:DESC', 'price:ASC'];

    const result = Format.sort(sortQuery, sortColumns);
    expect(result).toEqual({ name: 'DESC', category: 'ASC', quantity:'DESC', price: 'ASC' });
  });
})