import React, { useState } from 'react';
import './signup.css';
import { Route, Routes, Link } from 'react-router-dom';
import Login from './Login';

function Signup() {
  const [id, setId] = useState('');
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch('http://localhost/signup.php', {
      method: 'POST',
      body: JSON.stringify({ id, fullname, email, password }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        // handle response
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="outer-box">
      <div className="inner-box">
        <header className="signup-header">
          <h1>Signup</h1>
          <p>It just takes 30 seconds</p>
        </header>
        <main className="signup-body">
          <form onSubmit={handleSubmit} >
            <p>
              <label htmlFor="id">Create New ID</label>
              <input
                type="text"
                id="id"
                placeholder="Vishal_Verma_27"
                required
                value={id}
                onChange={(event) => setId(event.target.value)}
              />
            </p>
            <p>
              <label htmlFor="fullname">Full Name</label>
              <input
                type="text"
                id="fullname"
                placeholder="Vishal Kumar Verma"
                required
                value={fullname}
                onChange={(event) => setFullname(event.target.value)}
              />
            </p>
            <p>
              <label htmlFor="email">Your Email</label>
              <input
                type="email"
                id="email"
                placeholder="itsvkv00@gmail.com"
                required
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </p>
            <p>
              <label htmlFor="password">Your New Password</label>
              <input
                type="password"
                id="password"
                placeholder="At least 8 characters"
                required
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
            </p>
            <p>
              <input type="submit" id="submit" value="Create" />
            </p>
          </form>
        </main>
        <footer className="signup-footer">
          <p>
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </footer>
      </div>
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default Signup;
