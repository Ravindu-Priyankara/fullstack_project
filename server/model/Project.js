// model/users.js
const mongoose = require('mongoose');

const projectsSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  phone_number: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  project: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  }
});

const ProjectsModel = mongoose.model('Projects', projectsSchema);

module.exports = ProjectsModel;
