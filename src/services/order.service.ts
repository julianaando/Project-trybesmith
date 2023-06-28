import OrderModel, {
  OrderSequelizeModel,
} from '../database/models/order.model';
import { ServiceResponse } from '../types/ServiceResponse';

async function listAll(): Promise<ServiceResponse<OrderSequelizeModel[]>> {
  const orders = await OrderModel.findAll();
  return {
    status: 'SUCCESSFUL',
    data: orders,
  };
}

export default {
  listAll,
};