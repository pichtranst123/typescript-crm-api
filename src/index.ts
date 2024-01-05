import express from 'express';
import { connectDB } from './db';
import bookRouter from './router';


const app = express();
const port = 5030;
app.use(express.json()); // for parsing application/json
app.use(bookRouter);
// Define a root route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Connect to the database and start the server
connectDB().then(() => {
  app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
  });
});
