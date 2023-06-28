// função com as validações de erro e sucesso

import { Product } from '../types/Product';
import ProductModel, {
  ProductInputtableTypes,
} from '../database/models/product.model';
import { ServiceResponse } from '../types/ServiceResponse';

async function create(product: ProductInputtableTypes): Promise<ServiceResponse<Product>> {
  const newProduct = await ProductModel.create(product);
  return {
    status: 'SUCCESSFUL',
    data: newProduct.dataValues,
  };
}

export default {
  create,
};
