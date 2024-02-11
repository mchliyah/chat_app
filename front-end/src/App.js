// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import LoginPage from './LoginPage';
import HomePage from './HomePage';

class App extends React.Component {
  state = {
    isAuthenticated: false, // Set the initial authentication status to false
  };

  // Simulate a function to check the user's authentication status
  checkAuthentication = () => {
    //ned to get the user data from the server
    // save the data and set the isAuthenticated to true
    
    this.setState({ isAuthenticated });
  };

  componentDidMount() {
    // Perform initial authentication check when the component mounts
    this.checkAuthentication();
  }

  render() {
    const { isAuthenticated } = this.state;

    return (
      <Router>
        <Switch>
          <Route path="/login">
            {isAuthenticated ? <Redirect to="/" /> : <LoginPage />}
          </Route>
          <Route path="/">
            {isAuthenticated ? <HomePage /> : <Redirect to="/login" />}
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
