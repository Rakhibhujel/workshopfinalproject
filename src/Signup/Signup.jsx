import React from "react";
import "./Signup.css";

const Signup = () => {
  return (
    <div className="container">
      <div className="image-section">
        <img
          src="c:\Users\Dell\AppData\Local\Temp\premium_photo-1691735665916-cf31006dffe3.avif"
          alt=""
        />
      </div>
      <div className="form-section">
        <h2>Sign Up</h2>
        <form>
          <label>Full Name</label>
          <input type="text" placeholder="Name" />

          <label>Email</label>
          <input type="email" placeholder="Email address" />

          <label>Username</label>
          <input type="text" placeholder="Username" />

          <label>Password</label>
          <input type="password" placeholder="Password" />

          <label>Repeat Password</label>
          <input type="password" placeholder="Repeat Password" />

          <div className="checkbox-container">
            <input type="checkbox" id="terms" />
            <label htmlFor="terms">I agree to the Terms of Use</label>
          </div>

          <button type="submit">Sign Up</button>
          <p>
            Already have an account? <a href="#">Sign in</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
