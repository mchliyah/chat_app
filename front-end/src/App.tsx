import React, { useState, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Home';
import Login from './Login';
import Signup from './Signup';
import Landing from './Landing';

function App() {
  const [firstLogin, setFirstLogin] = React.useState(false);
  const [update, setUpdate] = React.useState(false);
  const buttonClicked = useRef<HTMLButtonElement | null>(null);
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
        {/* <Route path="/Login" element={<LoginPage onLogin={undefined} />} /> */}
        <Route path="/Login" element={<Login/>} />
        <Route path="/Signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;