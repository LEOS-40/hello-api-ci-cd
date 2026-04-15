const request = require('supertest');
const app = require('../src/index');

describe('GET /', () => {
  it('should return hello world message', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({ message: 'hello world' });
  });
});