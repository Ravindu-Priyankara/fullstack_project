import React, { useState } from 'react';
import { Card, CardContent, Button, TextField, Typography } from '@mui/material';
import { styled } from '@mui/system';
import axios from 'axios';

const CenteredCard = styled(Card)({
  maxWidth: 400,
  margin: 'auto',
  marginTop: '50vh',  // Adjust this value based on your needs
  transform: 'translateY(-50%)',
});

const FormInput = styled(TextField)({
  marginBottom: 2,
});

const ProjectForm = () => {
  const [projectName, setProjectName] = useState('');
  const [projectDescription, setProjectDescription] = useState('');
  const [projectManager, setProjectManager] = useState('');

  const handleCreateProject = async () => {
    try {
      const response = await axios.post('http://localhost:5001/record/projects/create', {
        projectName,
        projectDescription,
        projectManager,
      });

      console.log(response.data.message);
      setProjectName('');
      setProjectDescription('');
      setProjectManager('');
    } catch (error) {
      console.error('Project creation failed:', error.response.data.message);
    }
  };

  return (
    <CenteredCard>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          Create New Project
        </Typography>
        <FormInput
          label="Project Name"
          fullWidth
          variant="outlined"
          value={projectName}
          onChange={(e) => setProjectName(e.target.value)}
        />
        <FormInput
          label="Project Description"
          fullWidth
          variant="outlined"
          multiline
          rows={3}
          value={projectDescription}
          onChange={(e) => setProjectDescription(e.target.value)}
        />
        <FormInput
          label="Project Manager"
          fullWidth
          variant="outlined"
          value={projectManager}
          onChange={(e) => setProjectManager(e.target.value)}
        />
        <Button variant="contained" color="primary" onClick={handleCreateProject}>
          Create Project
        </Button>
      </CardContent>
    </CenteredCard>
  );
};

export default ProjectForm;
