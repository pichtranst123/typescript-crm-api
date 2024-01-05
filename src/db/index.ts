import { MongoClient, Db } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();

const url = process.env.MONGODB_URI;

if (!url) {
  throw new Error("MONGODB_URI is not defined in the environment variables");
}

const dbName = 'Book'; // Replace with your database name
let db: Db | null = null;

export const connectDB = async () => {
    try {
      const client = await MongoClient.connect(url);
      db = client.db(dbName);
      console.log('Connected to MongoDB Atlas');
    } catch (error) {
      console.error('Could not connect to MongoDB Atlas', error);
      process.exit(1); // Exit the process with an error code
    }
  };
  

export const getDB = () => {
  if (!db) {
    throw new Error("Database not initialized");
  }
  return db;
};
