import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../../../src/app';
import productsMock from '../../mocks/products.mocks';
import ProductModel from '../../../src/database/models/product.model';

chai.use(chaiHttp);

describe('GET /products', function () { 
  beforeEach(function () { sinon.restore(); });

  it('lista todos os produtos', async function () {
    const mockProducts = ProductModel.build(productsMock.validResponse);
    sinon.stub(ProductModel, 'findAll').resolves([mockProducts]);
    const httpResponse = await chai.request(app).get('/products');
    expect(httpResponse.status).to.equal(200);
    expect(httpResponse.body).to.be.deep.equal([productsMock.validResponse]);
  });
});
