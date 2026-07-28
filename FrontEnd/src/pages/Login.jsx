import React, { useState } from "react";
import "../CSS/Login.css";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const [currentState, setCurrentState] = useState("Sign Up");

  const handleChange = (field) => (e) => {
    setFormData((prev) => ({ ...prev, [field]: e.target.value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="login-page" dir="ltr">
      {/* Form panel */}
      <main className="login-page__form-panel">
        <div className="login-page__form-wrap">
          <header className="login-page__header">
            <h2 className="login-page__title">{currentState}</h2>
          </header>

          <form className="login-form" onSubmit={handleSubmit}>
            {currentState === "Login" ? (
              ""
            ) : (
              <div className="login-form__field">
                <input
                  id="name"
                  type="text"
                  className="login-form__input"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange("name")}
                  autoComplete="name"
                  required
                />
                <label htmlFor="name" className="login-form__label">
                  Name
                </label>
              </div>
            )}
            <div className="login-form__field">
              <input
                id="email"
                type="email"
                className="login-form__input"
                placeholder=" "
                value={formData.email}
                onChange={handleChange("email")}
                autoComplete="email"
                required
              />
              <label htmlFor="email" className="login-form__label">
                Email address
              </label>
            </div>

            <div className="login-form__field">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                className="login-form__input"
                placeholder=" "
                value={formData.password}
                onChange={handleChange("password")}
                autoComplete="current-password"
                required
              />
              <label htmlFor="password" className="login-form__label">
                Password
              </label>
              <button
                type="button"
                className="login-form__toggle"
                onClick={() => setShowPassword((v) => !v)}
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>

            <div className="login-form__row">
              <label className="login-form__checkbox">
                <input type="checkbox" />
                <span>Remember me</span>
              </label>
              <a href="#forgot" className="login-form__link">
                Forgot password?
              </a>
            </div>

            <button type="submit" className="login-form__submit">
              {currentState}
            </button>
          </form>

          <div className="login-page__footer">
            {currentState === "Login" ? (
              <p onClick={() => setCurrentState("Sign Up")}>
                Don&apos;t have an account?{" "}
                <button type="button" className="login-page__footer-button">
                  Create one
                </button>
              </p>
            ) : (
              <p onClick={() => setCurrentState("Login")}>
                Do you have an account ?{" "}
                <button type="button" className="login-page__footer-button">
                  Login
                </button>
              </p>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Login;
