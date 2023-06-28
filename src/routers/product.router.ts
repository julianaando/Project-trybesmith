import { Router } from 'express';
import productController from '../controllers/product.controller';
import ProductNameValidation from '../middlewares/validationProductName';
import ProductPriceValidation from '../middlewares/validationProductPrice';

const productRouter = Router();

productRouter.post('/', ProductNameValidation, ProductPriceValidation, productController.create);
productRouter.get('/', productController.listAll);

export default productRouter;