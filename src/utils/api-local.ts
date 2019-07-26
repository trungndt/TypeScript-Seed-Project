import { Product } from '../models/Product';

let sampleData = [
  {
    name: 'Xiaomi',
    price: '4.900.000',
    quantity: 10,
    imageUrl: 'xiaomi.jpg'
  },
  {
    name: 'Samsung',
    price: '9.200.000',
    quantity: 34,
    imageUrl: 'samsung.jpg'
  },
  {
    name: 'iPhone',
    price: '9.900.000',
    quantity: 21,
    imageUrl: 'iphone.jpg'
  },
  {
    name: 'Oppo',
    price: '8.400.000 ',
    quantity: 17,
    imageUrl: 'oppo.jpg'
  },
  {
    name: 'Huawei',
    price: '7.900.000',
    quantity: 12,
    imageUrl: 'huawei.jpg'
  }
]
export let getProducts = () => {
  let data: Array<Product> = [];
  sampleData.forEach(e => data.push(new Product(e)));
  return data;
};