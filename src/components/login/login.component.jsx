// src/components/LoginPage/LoginPage.jsx
import React, { useState } from 'react';
import './login.styles.scss'; // Import the dedicated SCSS file

/**
 * LoginPage Component
 * Renders a simple login form with email/username and password fields.
 * Manages input state and a basic submission handler.
 */
function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  /**
   * Handles changes in the email/username input field.
   * @param {React.ChangeEvent<HTMLInputElement>} e - The change event.
   */
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setErrorMessage(''); // Clear errors on input change
    setSuccessMessage('');
  };

  /**
   * Handles changes in the password input field.
   * @param {React.ChangeEvent<HTMLInputElement>} e - The change event.
   */
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setErrorMessage(''); // Clear errors on input change
    setSuccessMessage('');
  };

  /**
   * Handles the form submission.
   * This is where you would typically send credentials to an authentication service.
   * @param {React.FormEvent} e - The form submission event.
   */
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default browser form submission

    // Basic client-side validation
    if (!email || !password) {
      setErrorMessage('Please enter both email/username and password.');
      return;
    }

    setErrorMessage('');
    setSuccessMessage('');

    // Simulate an API call for login
    console.log('Attempting login with:', { email, password });
    try {
      // In a real application, you'd make a fetch/axios call here
      // const response = await fetch('/api/login', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify({ email, password }),
      // });

      // Simulate a delay
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Simulate success or failure
      if (email === 'user@example.com' && password === 'password123') {
        setSuccessMessage('Login successful! Redirecting...');
        // In a real app: redirect user, save token, etc.
        console.log('Login successful!');
      } else {
        setErrorMessage('Invalid credentials. Please try again.');
        console.log('Login failed: Invalid credentials');
      }
    } catch (error) {
      setErrorMessage('An error occurred during login. Please try again later.');
      console.error('Login error:', error);
    }
  };

  return (
    <div className="login-page-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2 className="login-title">Hi Welcome to YoAAI</h2>
        <p className="login-subtitle">Sign in to your account</p>

        {/* Error/Success Message Display */}
        {errorMessage && <div className="message-box error-message">{errorMessage}</div>}
        {successMessage && <div className="message-box success-message">{successMessage}</div>}

        {/* Email/Username Input Group */}
        <div className="form-group">
          <label htmlFor="email">Email or Username</label>
          <input
            type="text"
            id="email"
            className="form-input"
            value={email}
            onChange={handleEmailChange}
            required
            aria-describedby="email-error" // For accessibility
          />
          {errorMessage && email.length === 0 && <span id="email-error" className="input-error-text">Email/username is required.</span>}
        </div>

        {/* Password Input Group */}
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            className="form-input"
            value={password}
            onChange={handlePasswordChange}
            required
            aria-describedby="password-error" // For accessibility
          />
          {errorMessage && password.length === 0 && <span id="password-error" className="input-error-text">Password is required.</span>}
        </div>

        {/* Submit Button */}
        <button type="submit" className="submit-button">
          Login
        </button>

        {/* Optional: Links for forgotten password or sign up */}
        <div className="form-links">
          <a  className="link-text">Forgot password?</a>
          <span>Don't have an account? <a  className="link-text">Sign Up</a></span>
        </div>
      </form>
    </div>
  );
}

export default LoginPage;