import React, { useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import { useNavigate , Navigate, Route, BrowserRouter} from 'react-router-dom';
import axios from 'axios';
import Dashboard from "../pages/dashboard";
import App from "../App"

const Login = ({ onLoginSuccess }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const [isLoggedIn, setLoggedIn] = useState(false);

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:5001/record/login', {
        username,
        password,
      });

      console.log(response.data.message); // Success message
      // Redirect or perform other actions upon successful login
      setLoggedIn(true);
      console.log('Navigating to /dashboard...');
      //navigate('../dashboard/')
      onLoginSuccess(); 



    } catch (error) {
      console.error('Login failed:', error.response.data.message);
      console.log(username,password)
      // Handle login failure, show an error message, etc.
    }
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      height="100vh"
    >
      <Typography variant="h4" gutterBottom>
        Login
      </Typography>
      <TextField
        label="Username"
        margin="normal"
        variant="outlined"
        value={username.toString()}
        onChange={(e) => setUsername(e.target.value)}
      />
      <TextField
        label="Password"
        type="password"
        margin="normal"
        variant="outlined"
        value={password.toString()}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleLogin}
        style={{ marginTop: '16px' }}
      >
        Login
      </Button>
    </Box>
  );
};

export default Login;
