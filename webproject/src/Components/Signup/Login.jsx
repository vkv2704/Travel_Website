import React, { useState } from 'react';
// import { Helmet } from 'react-helmet';
import { Route, Routes, Link} from 'react-router-dom';

import "./login.css"
import Signup from './Signup';

function Login() {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  const handleIdChange = (event) => {
    setId(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted');
  };

  return (
    <div className="outer-box">
     
        <title>Login Page</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      
      <div className="inner-box">
        <div className="login-header">
          <h1>Login</h1>
          <p>It just take 30 second</p>
        </div>
        <div className="login-body">
          <form onSubmit={handleSubmit}>
            <p>
              <label htmlFor="id">Your ID</label>
              <input type="text" id="id" placeholder="Vishal_Verma_27" value={id} onChange={handleIdChange} required />
            </p>
            <p>
              <label htmlFor="password">Your Password</label>
              <input type="password" id="password" placeholder="At least 8 characters" value={password} onChange={handlePasswordChange} required />
            </p>
            <p>
              <input type="submit" id="submit" value="Login" />
            </p>
          </form>
        </div>
        <div className="login-footer">
          <p>Create an Account <Link to="/signup">Sign Up</Link></p>
        </div>
      </div>
      <Routes>
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default Login;
