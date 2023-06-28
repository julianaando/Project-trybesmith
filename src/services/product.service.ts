// função com as validações de erro e sucesso

import { Product } from '../types/Product';
import ProductModel, {
  ProductInputtableTypes,
  ProductSequelizeModel,
} from '../database/models/product.model';
import { ServiceResponse } from '../types/ServiceResponse';

async function create(product: ProductInputtableTypes): Promise<ServiceResponse<Product>> {
  const newProduct = await ProductModel.create(product);
  return {
    status: 'SUCCESSFUL',
    data: newProduct.dataValues,
  };
}

async function listAll(): Promise<ServiceResponse<ProductSequelizeModel[]>> {
  const products = await ProductModel.findAll();
  return {
    status: 'SUCCESSFUL',
    data: products,
  };
}

export default {
  create,
  listAll,
};
