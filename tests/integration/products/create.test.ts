import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import  app  from '../../../src/app';
import productsMock from '../../mocks/products.mocks';
import ProductModel from '../../../src/database/models/product.model';

// cenários: 1- erro sem nome, 2- erro sem preço, 3- erro sem orderId, 4- sucesso

chai.use(chaiHttp);

describe('POST /products', function () { 
  beforeEach(function () { sinon.restore(); });

  // it('caso não seja enviado o nome, deve retornar status 400', async function () {
  //   const httpRequestBody = productsMock.noNameCreateProduct;
  //   const httpResponse = await chai.request(app).post('/products').send(httpRequestBody);
  //   expect(httpResponse).to.have.status(400);
  //   expect(httpResponse.body).to.be.eq({ message: 'O campo "name" é obrigatório' });
  // });
  // it('caso não seja enviado o preço, deve retornar status 400', async function () {});
  // it('caso não seja enviado o orderId, deve retornar status 400', async function () {});
  it('caso seja enviado os dados corretamente, deve retornar status 201', async function () {
    const httpRequestBody = productsMock.validProductBody;
    const mockCreatedProduct = ProductModel.build(productsMock.validResponse);
    sinon.stub(ProductModel, 'create').resolves(mockCreatedProduct);
    const httpResponse = await chai.request(app).post('/products').send(httpRequestBody);

    expect(httpResponse.status).to.equal(201);
    expect(httpResponse.body).to.be.deep.equal(productsMock.validResponse);
  });

});
