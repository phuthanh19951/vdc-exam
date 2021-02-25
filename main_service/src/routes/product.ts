import express, { IRoute } from 'express';
import { BaseRoute } from './base';
import { ProductController } from "../controllers/product";

export class ProductRoute extends BaseRoute {
  private productController: ProductController;

  constructor(app: express.Application) {
    super(app, 'ProductRoutes');
    this.productController = new ProductController();
    this.initRoutes();
  }

  initRoutes() {
    this.app.route('/products').get(this.productController.index);
    this.app.route('/products/:id').get(this.productController.getOne);

    return this.app;
  }
}