const request = require('supertest');
const app = require('./index'); // Adjust the path as necessary to import your Express app

describe('GET /', () => {
  it('should return Hello World with a status code of 200', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
    expect(response.text).toBe('Hello, World!');
  });
});
