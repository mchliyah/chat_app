import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Home';
import LoginPage from './Login';
import Signup from './Signup';
import Landing from './Landing';

function App() {
  // const [currentPage, setCurrentPage] = useState('');
  // trying to props to pass the state to the child components (not sure how they works yet)
  // const handleNavigation = (page) => {
  //   setCurrentPage(page);
  // };

  return (
    <Router>
      <Routes>
        <Route
          path="/" element={<Landing/>} />
        <Route path="/Home" element={<HomePage />} />
        <Route path="/Login" element={<LoginPage />} />
        <Route path="/Signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;
