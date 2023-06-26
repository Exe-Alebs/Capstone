const request = require('supertest');
const app = require('./index');

describe('Test the root path', () => {
  test('It should response the GET method', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
  });
});

describe('Test the /shorten path', () => {
  test('It should response the POST method', async () => {
    const response = await request(app).post('/shorten');
    expect(response.statusCode).toBe(200);
  });
});
