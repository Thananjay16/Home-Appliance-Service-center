import React, { useState } from 'react';
import './App1.css';
import logo from "./Images/logo.jpg";
const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [reenterPassword, setReEnterPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleReEnterPasswordChange = (e) => {
    setReEnterPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (password === reenterPassword) {
      setMessage('Successfully Registered !');
    } else  {
      setMessage('Password do not Matched Please try again');
    }
  };

  return (
    <div>
      <div className='imf'>
        <img src={logo} alt="" />
      </div>
      <form onSubmit={handleSubmit}>
        <h2>Sign Up</h2>
        <div className="fir">
          <span className="uname">
            Username:
          </span>
          <input type="text" placeholder="Username" value={username} onChange={handleUsernameChange} />
          <br />
          <br />
          <span className="uname">
            Email:
          </span>
          <input type="email" placeholder="Email or Phone" value={email} onChange={handleEmailChange} />
          <br />
          <br />
          <span className="uname">
            Password:
          </span>
          <input type="password" placeholder="Password" value={password} onChange={handlePasswordChange} />
          <span className="uname">
            Re-Enter Password:
          </span>
          <input type="password" placeholder="Re-Enter password" value={reenterPassword} onChange={handleReEnterPasswordChange} />
          <br />
          <br />
          <button type="submit">Register</button>
        </div>
        <p>You Already have an Account? <a href="Login.jsx">Login</a>
        </p>
      </form>
      <p className="success">{message}</p>
    </div>
  );
};

export default Signup;