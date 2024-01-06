/*import React, { useState, useEffect } from 'react';

import axios from 'axios';

const username = 'ravindu';

function Test() {
  const [userCreationDetails, setUserCreationDetails] = useState(null);

  useEffect(() => {
    fetchUserCreationDetails();
  }, []);

  const fetchUserCreationDetails = async () => {
    try {
      const response = await fetch('/api/user-creation-details');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const result = await response.json();
      setUserCreationDetails(result);
    } catch (error) {
      console.error('Error fetching user creation details:', error);
    }
  };

  return (
    <div className="Test">
      <h1>User Creation Details</h1>
      {userCreationDetails && (
        <ul>
          <li>User: {userCreationDetails.user}</li>
          <li>Password: {userCreationDetails.pwd}</li>
          <li>Roles: {userCreationDetails.roles.join(', ')}</li>
        </ul>
      )}
    </div>
  );
}

axios.get(`http://localhost:5001/user/${username}`)
  .then(response => {
    const user = response.data;
    console.log('User Details:', user);
    // Handle the user details as needed in your frontend
  })
  .catch(error => {
    console.error('Error fetching user details:', error);
  });


export default Test;*/


/*import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Test = () => {
  const [user, setUser] = useState(null);
  const username = 'ravindu'; // Replace with the desired username

  useEffect(() => {
    // Fetch user details when the component mounts
    axios.get(`http://localhost:5001/user/${username}`)
        .then(response => {
            const user = response.data;
            console.log('User Details:', user);
            // Handle the user details as needed in your frontend
        })
        .catch(error => {
            console.error('Error fetching user details:', error);
            console.log('Response:', error.response); // Log the full response for more details
        });
  }, []); // Empty dependency array means this effect runs once on component mount

  return (
    <div>
      <h1>User Details</h1>
      {user ? (
        <div>
          <p>Username: {user.username}</p>
          
          
        </div>
      ) : (
        <p>Loading user details...</p>
      )}
    </div>
  );
};

export default Test;*/

import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Test() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5001/record/getUsers')
      .then(response => setUsers(response.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>Username</th>
            <th>Password</th>
            <th>Name</th>
            <th>Age</th>
            <th>phone number</th>
            <th>email</th>
            <th>level</th>
            <th>Add or remove</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user._id}>
              <td>{user.id}</td>
              <td>{user.username}</td>
              <td>{user.password}</td>
              <td>{user.name}</td>
              <td>{user.age}</td>
              <td>{user.phone_number}</td>
              <td>{user.email}</td>
              <td>{user.level}</td>
              <td>{user.add_or_remove}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Test;




