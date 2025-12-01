// test.js
const { MongoClient } = require('mongodb');
require('dotenv').config();

const uri = process.env.MONGO_URI;

async function run() {
  try {
    const client = new MongoClient(uri);
    await client.connect();
    console.log('✅ Connected to MongoDB Atlas successfully');
    await client.close();
  } catch (err) {
    console.error('❌ Connection failed:', err);
  }
}

run();
