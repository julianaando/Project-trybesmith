// funções que recebem a req e res e chamam a função do service

import { Request, Response } from 'express';
import productsService from '../services/product.service';
// import mapStatusHTTP from '../utils/mapStatusHTTP';

async function create(req: Request, res: Response) {
  const { name, price, orderId } = req.body;
  const serviceResponse = await productsService.create({ name, price, orderId });
  // if (serviceResponse.status !== 'SUCCESSFUL') {
  //   return res.status(mapStatusHTTP(serviceResponse.status)).json(serviceResponse.data);
  // }
  return res.status(201).json(serviceResponse.data);
}

async function listAll(_req: Request, res: Response) {
  const serviceResponse = await productsService.listAll();
  return res.status(200).json(serviceResponse.data);
}

export default {
  create,
  listAll,
};