
import React, { useState } from "react";

import "./Login.css";

import { Link, useNavigate } from "react-router-dom";

import { MdOutlineMailOutline } from "react-icons/md";

import { FaEye, FaEyeSlash } from "react-icons/fa6";

import { IoPersonCircleSharp } from "react-icons/io5";

const Login = () => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (event) => {
    event.preventDefault();

    navigate("/");
  };

  return (
    <section className="login-section">
      <div className="login-container">

        <div className="login-left">
          <div className="overlay">
            <div className="left-content">
              <h1>Welcome Back 🚴</h1>

              <p>
                Login to explore premium bicycles, accessories and exclusive
                offers.
              </p>
            </div>
          </div>
        </div>

        <div className="login-right">

          <div className="login-title">
            <h2>Login</h2>
            <IoPersonCircleSharp />
          </div>

          <p>Sign in to continue</p>

          <form onSubmit={handleLogin}>

            <div className="input-box">
              <input
                type="email"
                placeholder="Email Address"
                required
              />

              <div className="email-icon">
                <MdOutlineMailOutline />
              </div>
            </div>

       
            <div className="input-box">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                required
              />

              <div
                className="password-icon"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEye /> : <FaEyeSlash />}
              </div>
            </div>

            <div className="login-options">
              <label>
                <input type="checkbox" /> Remember Me
              </label>
            </div>

            <button type="submit">
              Login
            </button>

         
            <div className="signup-text">
              Don't have an account?{" "}
              <Link to="/signup">Signup</Link>
            </div>

          </form>
        </div>

      </div>
    </section>
  );
};

export default Login;