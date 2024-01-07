// routes/record.js
const express = require('express');
const { UserModel } = require('../db/conn'); // Import the UserModel
const {ProjectsModel } = require('../db/conn')
const authService = require('../services/authService');
const ProModel = require('../model/pro')
const IssueModel = require('../model/issue')


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

router.post('/projects/create', async (req, res) => {
  const { projectName, projectDescription, projectManager } = req.body;

  try {
    // Create a new project document in MongoDB
    const newPro = new ProModel({ projectName, projectDescription, projectManager });
    await newPro.save();

    res.json({ message: 'Project created successfully' });
  } catch (error) {
    console.error('Project creation error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

router.post('/projects/issue', async (req, res) => {
  const { projectName, issueDescription } = req.body;

  try {
    // Create a new project document in MongoDB
    const newIssue = new IssueModel({ projectName, issueDescription });
    await newIssue.save();

    res.json({ message: 'Issue created successfully' });
  } catch (error) {
    console.error('Project creation error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

router.get('/project/getIssue', async (req, res) => {
  try {
    const issues = await IssueModel.find({});
    res.json(issues);
  } catch (error) {
    console.error('Error fetching projects:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
  /*UserModel.find()
  .then(users => res.json(users))
  .catch(err => res.json(err))*/
});


module.exports = router;