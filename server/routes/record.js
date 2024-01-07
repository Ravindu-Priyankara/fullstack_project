// routes/record.js
const express = require('express');
const { UserModel } = require('../db/conn'); // Import the UserModel
const {ProjectsModel } = require('../db/conn')
const authService = require('../services/authService');


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

router.get('/getProjects', async (req, res) => {
  try {
    const projects = await ProjectsModel.find({});
    res.json(projects);
  } catch (error) {
    console.error('Error fetching projects:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
  /*UserModel.find()
  .then(users => res.json(users))
  .catch(err => res.json(err))*/
});


router.post('/insertData', async (req, res) => {
  try {
    const { id, name, email, age, level, add_or_remove, address, city, zip, phone_number, username, password } = req.body;

    const newData = new UserModel({ id, name, email, age, level, add_or_remove, address, city, zip, phone_number, username, password });
    await newData.save();

    res.status(201).json({ message: 'Data inserted successfully' });
  } catch (error) {
    console.error('Error inserting data:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await authService.loginUser(username, password);
    res.status(200).json({ message: 'Login successful', user });
  } catch (error) {
    console.error('Login failed:', error.message);
    res.status(401).json({ message: error.message });
  }
});




module.exports = router;