import express from 'express';
import Book from '../models';

const router = express.Router();

// POST /books - Create a new book
router.post('/books', async (req, res) => {
    console.log("Received request body:", req.body); // Log the request body
    try {
      const book = new Book(req.body);
      await book.save();
      console.log("Created book:", book); // Log the created book
      res.status(201).send(book);
    } catch (error) {
      console.error("Error:", error); // Log any errors
      res.status(400).send(error);
    }
  });
  
  

// GET /books - Retrieve all books
router.get('/books', async (req, res) => {
  try {
    const books = await Book.find({});
    res.send(books);
  } catch (error) {
    res.status(500).send(error);
  }
});

// GET /books/:id - Retrieve a book by its ID
router.get('/books/:id', async (req, res) => {
    console.log("Requested ID:", req.params.id); // Log the requested ID
    try {
      const book = await Book.findById(req.params.id);
      console.log("Found book:", book); // Log the found book
      if (!book) {
        return res.status(404).send();
      }
      res.send(book);
    } catch (error) {
      console.error("Error:", error);
      res.status(500).send(error);
    }
  });
  

// PATCH /books/:id - Update a book
router.patch('/books/:id', async (req, res) => {
  try {
    const book = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!book) {
      return res.status(404).send();
    }
    res.send(book);
  } catch (error) {
    res.status(400).send(error);
  }
});

// DELETE /books/:id - Delete a book
router.delete('/books/:id', async (req, res) => {
  try {
    const book = await Book.findByIdAndDelete(req.params.id);
    if (!book) {
      return res.status(404).send();
    }
    res.send(book);
  } catch (error) {
    res.status(500).send(error);
  }
});

export default router;
