const bcrypt = require('bcrypt');
const User = require('../model/userModel');

const loginUser = async (username, password) => {
  try {
    const user = await User.findOne({ username });
    

    if (!user) {
      throw new Error('Invalid username or password');
    }

    const passwordMatch = await bcrypt.compare(password, user.password);
    const pass = await User.findOne({password})

    if (!pass) {
      throw new Error('Invalid  password');
    }

    return user;
  } catch (error) {
    throw error;
  }

};

module.exports = { loginUser };
