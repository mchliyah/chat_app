import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Signup = () => {
  const csrftoken = '';
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirm_password: ''
  });

  useEffect(() => {
    const fetchCSRFToken = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/csrftoen`);
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

  const handleChange = (e:any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    
    try {
      await axios.post(`${process.env.REACT_APP_BACKEND_URL}/signup`, formData, {
        headers: {
          'X-CSRFToken': csrftoken, // Include CSRF token in the request headers
          'Content-Type': 'application/json' // Set content type to JSON
        }
      });
      // await axios.post(`${process.env.REACT_APP_BACKEND_URL}/signu`, formData); // Replace '/api/signup' with your actual signup API endpoint
      // Handle successful signup
    } catch (error) {
      console.error('Error signing up:', error);
      // Handle signup error
    }
  };

  return (
    <div>
      <h2>Signup</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" value={formData.username} onChange={handleChange} required />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} required />
        </div>
        <div>
          <label htmlFor="confirm_password">Confirm Password:</label>
          <input type="password" id="confirm_password" name="confirm_password" value={formData.confirm_password} onChange={handleChange} required />
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;