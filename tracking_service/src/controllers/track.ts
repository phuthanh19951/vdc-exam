import { Request, Response } from 'express';
import { trackingService } from '../services/tracking';

export const trackController = {
  getAll: async (req: Request, res: Response) => {
    try{
      const result = await trackingService.getAll();
      
      return res.status(200).json({
        status: true,
        code: 200,
        message: 'Get user tracking success',
        data: result
      })
    }catch(err){
      return res.status(500).json({
        status: false,
        code: 500,
        message: 'Get user tracking failed',
      });
    }
  },
  create: async (req: Request, res: Response) => {
    try{
      const payload = req.body;
      const result = await trackingService.create(payload);
      
      return res.status(200).json({
        status: true,
        code: 200,
        message: 'Insert user tracking success',
        data: result
      })
    }catch(err){
      return res.status(500).json({
        status: false,
        code: 500,
        message: 'Insert user tracking failed',
      });
    }
  }
}