// db/conn.js
const mongoose = require('mongoose');
const UserModel = require('../model/Users'); // Import the UserModel

const mongoURI = 'mongodb://localhost:27017/fullstack';

const connectDB = async () => {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1); // Exit the process if unable to connect
  }
};

module.exports = { connectDB, UserModel };
