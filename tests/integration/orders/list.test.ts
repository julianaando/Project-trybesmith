import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../../../src/app';
import OrderModel from '../../../src/database/models/order.model';
import orderMock from '../../mocks/orders.mocks';

chai.use(chaiHttp);

describe('GET /orders', function () { 
  beforeEach(function () { sinon.restore(); });
  it('lista todos os produtos', async function () {
    const mockProducts = OrderModel.build(orderMock.validOrder);
    sinon.stub(OrderModel, 'findAll').resolves([mockProducts]);
    const httpResponse = await chai.request(app).get('/orders');
    expect(httpResponse.status).to.equal(200);
    expect(httpResponse.body).to.be.deep.equal([orderMock.validOrder]);
  });
});
