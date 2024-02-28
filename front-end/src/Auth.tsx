import React from 'react';
import { Link } from 'react-router-dom';

const Auth = () => {
    return (
        <div className="auth">
            <Link to="/Login">Sign In</Link>
            <Link to="/Signup">Sign Up</Link>
        </div>
    );
};
export default Auth;