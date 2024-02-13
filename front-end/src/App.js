import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom';
import axios from 'axios';
import HomePage from './HomePage';
// import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';

// A custom hook to handle user authentication
function useAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check the user's authentication status from the server
    axios.get('http://localhost:8000/test')
      .then(res => {
        setIsAuthenticated(res.data.isAuthenticated);
        setIsLoading(false);
      })
      .catch(err => {
        console.error('Error checking authentication status:', err);
        setIsLoading(false);
      });
  }, []);

  return { isAuthenticated, isLoading };
}

// Private route component to control access based on authentication status
function PrivateRoute({ children, ...rest }) {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <Route
      {...rest}
      render={({ location }) =>
        isAuthenticated ? (
          children
        ) : (
          <Navigate
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}

// Your app component
function App() {

  console.log('App is rendering');
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/HomePage" />} />
        <Route path="/login"
              element={
                <HomePage />
              }>
          
          {/* Render your login component here */}
        </Route>
        <Route path="/register">
          {/* Render your register component here */}
        </Route>
        <Route path="/HomePage">
          {/* Render your home component here */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;