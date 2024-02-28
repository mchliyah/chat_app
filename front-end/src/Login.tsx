import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Login (onLogin: any) {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  useEffect(() => {
    const fetchCSRFToken = async () => {
      try {
        const response = await axios.get('http://localhost:8000/csrftoken'); // Replace '/api/csrf-token' with your actual API endpoint
        setFormData((prevData) => ({
          ...prevData,
          csrfToken: response.data.csrfToken
        }));
      } catch (error) {
        console.error('Error fetching CSRF token:', error);
      }
    };

    fetchCSRFToken();
  }, []);

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    axios.post(`${process.env.REACT_APP_BACKEND_URL}/login`, formData)
      .then(res => {
        console.log('User logged in successfully:', res.data);
        // Call onLogin callback function with user data after successful login
        onLogin(res.data);
      })
      .catch(err => {
        console.error('Error logging in:', err);
        // Handle error
      });
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" value={formData.username} onChange={handleChange} required />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} required />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
