

const express = require('express');
const authService = require('../services/authService');

const router = express.Router();

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
