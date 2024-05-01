import "./signup.css";
import React, { useState } from "react";

const Signup = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
  });
  const [formErrors, setFormErrors] = useState({});

  const toggleForm = () => {
    setIsSignIn(!isSignIn);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const errors = {};
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

    if (!formData.username.trim()) {
      errors.username = "Username is required";
    }

    if (isSignIn) {
      if (!formData.password) {
        errors.password = "Password is required";
      } else if (!passwordRegex.test(formData.password)) {
        errors.password = "Password must be at least 8 characters, including a number, a lowercase letter, and an uppercase letter";
      }
    }

    if (!isSignIn && (!formData.email.trim() || !emailRegex.test(formData.email))) {
      errors.email = "Enter a valid email address";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      
      console.log("Form data:", formData);
    } else {
      console.log("Form has errors");
    }
  };

  return (
    <div className="login">
      <div className="login__content">
        <div className="login__img">
          <img
            src="https://epayindia.com/assets/img/img-login2.svg"
            alt=""
          />
        </div>

        <div className="login__forms">
          <form className={`login__${isSignIn ? "registre" : "create"}`} id="login-form" onSubmit={handleSubmit}>
            <h1 className="login__title">{isSignIn ? "Sign In" : "Create Account"}</h1>

            <div className="login__box">
              <i className="bx bx-user login__icon"></i>
              <input
                type="text"
                placeholder="Username"
                className="login__input"
                name="username"
                value={formData.username}
                onChange={handleChange}
              />
              {formErrors.username && <span className="error">{formErrors.username}</span>}
            </div>

            {isSignIn && (
              <div className="login__box">
                <i className="bx bx-lock-alt login__icon"></i>
                <input
                  type="password"
                  placeholder="Password"
                  className="login__input"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                />
                {formErrors.password && <span className="error">{formErrors.password}</span>}
              </div>
           ) }

            {!isSignIn && (
              <div className="login__box">
                <i className="bx bx-at login__icon"></i>
                <input
                  type="text"
                  placeholder="Email"
                  className="login__input"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
                {formErrors.email && <span className="error">{formErrors.email}</span>}
              </div>
          )  }

            {isSignIn && (
              <a href="#" className="login__forgot">
                Forgot password?
              </a>
            )}

            <button type="submit" className="login__button">
              {isSignIn ? "Sign In" : "Sign Up"}
            </button>

            <div>
              <span className="login__account">
                {isSignIn ? "Don't have an Account ?" : "Already have an Account ?"}
              </span>
              <span className="login__signin" onClick={toggleForm}>
                {isSignIn ? "Sign Up" : "Sign In"}
              </span>
            </div>

            <div className="login__social">
              <a href="#" className="login__social-icon">
                <i className="bx bxl-facebook"></i>
              </a>
              <a href="#" className="login__social-icon">
                <i className="bx bxl-twitter"></i>
              </a>
              <a href="#" className="login__social-icon">
                <i className="bx bxl-google"></i>
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
