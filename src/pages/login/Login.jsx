import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // For navigation
import './login.scss'; // Assuming you have this SCSS file with your styles

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(''); // State to handle error messages
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent form from submitting the default way

    // Validation logic
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters long.');
      return;
    }

    // Clear the error if validation passes
    setError('');

    // Add your authentication logic here
    // For demonstration, we'll assume authentication is successful

    // After successful sign-in, redirect to the home page
    navigate('/home');
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h1 className="title">Sign In</h1>
        <p className="subtitle">Enter your email and password to sign in!</p>

        {error && <p className="error-message">{error}</p>} {/* Display error message */}

        <form method='POST' className='form' onSubmit={handleSubmit}>
          <div className='form-group'>
            <label className='label'>Email*</label>
            <input 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className='input' 
              type="text" 
              placeholder='mail@gmail.com'
            />
            <label className='label'>Password*</label>
            <input 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className='input' 
              type='password' 
              placeholder='Min. 6 characters'
            />
          </div>

          <div className="form-footer">
            <div className='checkbox-group'>
              <input type="checkbox" id="keep-logged-in" />
              <label htmlFor="keep-logged-in">Keep me logged in</label>
            </div>
            <Link to="/" className="forgot-password">Forgot password?</Link>
          </div>
          <button type='submit' className='submit-button'>Sign In</button>
        </form>
      </div>

      <div className="image-container">
        <img src="./img/image.png" alt="Login" className='login-image' />
      </div>
    </div>
  );
};

export default Login;
