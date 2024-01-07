const mongoose = require('mongoose');

const issueSchema = mongoose.Schema({
    projectName: String,
    issueDescription: String,
  });
  
  const IssueModel = mongoose.model('issues', issueSchema);

  module.exports = IssueModel;