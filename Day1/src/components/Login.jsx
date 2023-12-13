import React, { useState } from 'react';
import './App.css';
import logo from './Images/logo.jpg';
const Login = () => {
  
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (username === 'user' && password === 'password') {
      setMessage('Login successful!');
    } else {
      setMessage('Invalid username or password please try again');
    }
  };

  return (
    <div>
      <div class="dim">
       <img src={logo} alt=""></img>
       </div>
      <form onSubmit={handleSubmit}>
      <h2>Login Form</h2>
      <div class="fir">
        <span class="uname">
          Username:
          </span>
          <input type="text" placeholder='Email or Phone' value={username} onChange={handleUsernameChange} />
        <br></br>
        <br></br>
        <label class="password">
          Password:
          </label>
          <input type="password" placeholder='Password' value={password} onChange={handlePasswordChange} />
        <button type="submit">Login</button>
        <div class="forget">Forget Password</div>
        </div>
        <p>Don't have an Account? <a href="Signup.jsx">SignUp</a>
        </p>
      </form>
      <p1 class="success">{message}</p1>
    </div>
  );
};

export default Login;

