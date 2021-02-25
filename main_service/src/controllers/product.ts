import { Request, Response } from 'express';
import { get, identity, pickBy } from 'lodash';
import { ProductService } from '../services/product';
import { HTTP_CODE } from '../constants/http';
import { TrackingAPI } from '../external/tracking';
import { Action } from '../constants/tracking';

export class ProductController {
  productService: ProductService;

  constructor() {
    this.productService = new ProductService();
  }

  index = async (req: Request, res: Response): Promise<Response> => {
    try {
      const products = await this.productService.getAll(req.query);
      const clientIP: string = get(req, 'connection.remoteAddress', '');
      if(req.query.name || req.query.category){
        const keyword: {} = pickBy({ name: req.query.name, category: req.query.category }, identity)
        TrackingAPI.track({ clientIP, action: Action.SEARCH, keyword })
      }

      return res.status(HTTP_CODE.SUCCESS).json({
        status: true,
        code: HTTP_CODE.SUCCESS,
        message: 'Get Product List Success',
        data: products
      });
    } catch (err) {
      return res.status(HTTP_CODE.INTERNAL_SERVER_ERROR).json({
        status: false,
        code: HTTP_CODE.INTERNAL_SERVER_ERROR,
        message: err.message,
      });
    }
  }

  getOne = async (req: Request, res: Response): Promise<Response> => {
    try {
      const product = await this.productService.getOneByID(req.params.id);
      const clientIP: string = get(req, 'connection.remoteAddress', '');

      TrackingAPI.track({ clientIP, action: Action.VIEW, keyword: {id: product.id}, product: product.name })

      return res.status(HTTP_CODE.SUCCESS).json({
        status: true,
        code: HTTP_CODE.SUCCESS,
        message: 'Get Product Success',
        data: product
      });
    } catch (err) {
      return res.status(HTTP_CODE.INTERNAL_SERVER_ERROR).json({
        status: false,
        code: HTTP_CODE.INTERNAL_SERVER_ERROR,
        message: err.message,
      });
    }
  }
}