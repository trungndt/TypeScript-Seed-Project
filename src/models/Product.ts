export class Product {
  name: string;
  price: string;
  quantity: number;
  imageUrl: string;

  constructor(product: any) {
    this.name = product.name;
    this.price = product.price;
    this.quantity = product.quantity;
    this.imageUrl = product.imageUrl;
  }
}