const mongoose = require('mongoose');

const proSchema = mongoose.Schema({
    projectName: String,
    projectDescription: String,
    projectManager: String, // Add this line for the project manager
  });
  
  const ProModel = mongoose.model('Pro', proSchema);

  module.exports = ProModel;