import React, { useState } from 'react';
import './Login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
  };

  return (
    <div className="login-container">
      <div className="login-left">
        <div className="logo">
          <span className="logo-icon">+</span>
          <span className="logo-text">Pharma<span className="logo-chain">Chain</span></span>
        </div>
        <h2>Welcome Back to SmartTrack</h2>
        <p>Secure access to Ethiopia's medication traceability system</p>
      </div>
      <div className="login-right">
        <form className="login-form" onSubmit={handleSubmit}>
          <h2>Login</h2>
          <p>Enter your credentials to access your account</p>
          <label>Email</label>
          <input
            type="email"
            placeholder="yourname@gmail.com"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
          <label>Password</label>
          <div className="password-input">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="************"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
            />
            <span
              className="toggle-password"
              onClick={() => setShowPassword(!showPassword)}
              style={{ cursor: 'pointer' }}
            >👁️</span>
          </div>
          <a href="#" className="forgot-password">Forget password</a>
          <button type="submit" className="login-btn">Login</button>
          <p className="signup-link">Don't have an account? <a href="#">Sign up.</a></p>
        </form>
      </div>
    </div>
  );
}

export default Login; 