const mongoose = require('mongoose');
const env = require('./env');


async function connectDB() {
  try {
    await mongoose.connect(env.mongo_url);
    console.log('Connected to MongoDB');
}catch(error) {
    console.error('Error connecting to MongoDB:', error);
   
  }
};


module.exports = connectDB;