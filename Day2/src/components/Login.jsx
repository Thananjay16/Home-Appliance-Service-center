import React, { useState } from 'react';
import './Signup.css';
import logo from "./Images/logo.jpg";
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [messageColor, setMessageColor] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const mockAuthentication = () => {
    // Mock authentication logic (replace with your real authentication logic)
    const mockUsername = 'Thananjay16';
    const mockPassword = 'Thananjay16';

    if (username === mockUsername && password === mockPassword) {
        navigate("/Home");
    } else {
      setMessage('Invalid username or password. Please try again.');
      setMessageColor('error');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    mockAuthentication();
  };
  return (
    <div>
      <div className='imf'>
        <img src={logo} alt="" />
      </div>
      <form onSubmit={handleSubmit}>
        <div class="t"><h2>Login</h2></div>
        <br /><br /><br /><br /><br />
        <div className="fir">
          <span className="uname">
            Username:
          </span>
          <input type="text" placeholder="Username" value={username} onChange={handleUsernameChange} />
          <br /><br/>
  
          <span className="uname">
            Password:
          </span>
          <input type="password" placeholder="Password" value={password} onChange={handlePasswordChange} />
          <button type="submit">Log In</button>
          <p>Don't have an Account ? <Link to="Signup">Sign Up</Link></p>
        </div>
      </form>
      <p className={messageColor === 'success' ? 'success1' : 'error'}>{message}</p>
    </div>
  );
};

export default Login;