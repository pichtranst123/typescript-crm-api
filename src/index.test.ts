import request from 'supertest';
import express from 'express';
import { connectDB } from './db'; // Assuming you have a closeDB function

const app = express();

let server;

beforeAll(async () => {
  await connectDB();
  server = app.listen(3000); // Start server
});



describe('Test Express Server', () => {
  it('should return 200 on GET /', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
  });

  // Add more tests as needed
});
