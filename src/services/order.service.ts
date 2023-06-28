import { literal } from 'sequelize';
import OrderModel, { OrderSequelizeModel } from '../database/models/order.model';
import { ServiceResponse } from '../types/ServiceResponse';
import ProductModel from '../database/models/product.model';

async function listAll(): Promise<ServiceResponse<OrderSequelizeModel[]>> {
  const orders = await OrderModel.findAll({
    attributes: [
      'id',
      'userId',
      [literal('JSON_ARRAYAGG(productIds.id)'), 'productIds'],
    ],
    include: [{
      model: ProductModel,
      as: 'productIds',
      attributes: [],
    }],
    group: ['Order.id'],
    raw: true,
  });
  return { status: 'SUCCESSFUL', data: orders };
}

export default {
  listAll,
};