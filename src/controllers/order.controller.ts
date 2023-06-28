import { Request, Response } from 'express';
import orderService from '../services/order.service';

async function listAll(_req: Request, res: Response) {
  const serviceResponse = await orderService.listAll();
  return res.status(200).json(serviceResponse.data);
}

export default {
  listAll,
};