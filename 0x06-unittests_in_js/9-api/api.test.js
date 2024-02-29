const expect = require('chai').expect;
const request = require('supertest');
const app = require('./api');

describe('GET /cart/:id', () => {
  it('should return correct message when id is a number', (done) => {
    request(app)
      .get('/cart/1')
      .end((err, res) => {
        expect(res.statusCode).to.equal(200);
        expect(res.body.message).to.equal('Payment methods for cart 1');
        done();
      });
  });

  it('should return 404 status code when id is not a number', (done) => {
    request(app)
      .get('/cart/abc')
      .end((err, res) => {
        expect(res.statusCode).to.equal(404);
        done();
      });
  });
});
