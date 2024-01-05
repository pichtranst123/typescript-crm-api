import mongoose from 'mongoose';

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  publishedYear: Number,
});

const Book = mongoose.model('Book', bookSchema, 'bookstore'); // Ensure 'bookstore' is the intended collection name
export default Book;
