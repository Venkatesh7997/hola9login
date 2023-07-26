import React, { useState } from "react";
import "./UserLogin.css"; // Import the CSS file for styling
import { Link } from "react-router-dom";

const Login = () => {
  // State to store email and password values
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    // Validate email with your company domain
    const companyDomain = "outlook.com";
    const emailRegex = new RegExp(`^[A-Za-z0-9._%+-]+@${companyDomain}$`, "i");

    if (!emailRegex.test(email)) {
      setEmailError("Invalid email format or not from your company");
      return;
    }

    // If validation passes, you can implement the login logic here
    // For this example, we will just log the email and password in the console
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <h2>Login</h2>
        <div className="form-group">
          <label htmlFor="email">Outlook:</label>
          <input
            type="email"
            placeholder="Outlook"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          {emailError && <div className="error">{emailError}</div>}
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            placeholder="* * * * * *"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <Link to="/ProjectDetails">
          <button className="button1" type="submit">
            Login
          </button>
        </Link>
      </form>
    </div>
  );
};

export default Login;
