// routes/record.js
const express = require('express');
const { UserModel } = require('../db/conn'); // Import the UserModel


const router = express.Router();

// Define routes related to user records

// Route: /getUsers
router.get('/getUsers', async (req, res) => {
  try {
    const users = await UserModel.find({});
    res.json(users);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
  /*UserModel.find()
  .then(users => res.json(users))
  .catch(err => res.json(err))*/
});

module.exports = router;