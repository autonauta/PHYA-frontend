import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import Navbar from "../Navbar";
import { login, authenticate, isAuthenticated } from "../../apiCore";

const Login = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
    error: "",
    loading: false,
    redirectToReferrer: false,
  });

  const { email, password, loading, error, redirectToReferrer } = values;
  const { user } = isAuthenticated();

  const handleChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const clickSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: false, loading: true });
    login({ email, password }).then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error, loading: false });
      } else {
        authenticate(data, () => {
          setValues({
            ...values,
            redirectToReferrer: true,
          });
        });
      }
    });
  };

  const logInForm = () => (
    <form className="form" autoComplete="off">
      <h4 className="form__title">Log in</h4>
      <div className="form__group">
        <label className="form__label">Email</label>
        <input
          onChange={handleChange("email")}
          type="email"
          className="form__input"
          value={email}
          autoComplete="off"
        />
      </div>
      <div className="form__group">
        <label className="form__label">Password</label>
        <input
          onChange={handleChange("password")}
          type="password"
          className="form__input"
          value={password}
          autoComplete="off"
        />
      </div>
      <button onClick={clickSubmit} className="form__button">
        Log in
      </button>
    </form>
  );

  const redirectUser = () => {
    if (redirectToReferrer) {
      if (user && user.role === 0) {
        return <Redirect to="/operador" />;
      } else if (user.role === 1) {
        return <Redirect to="/supervisor" />;
      } else if (user.role === 2) {
        return <Redirect to="/admin" />;
      }
    }
    if (isAuthenticated()) {
      if (user.role === 0) {
        return <Redirect to="/operador" />;
      } else if (user.role === 1) {
        return <Redirect to="/supervisor" />;
      } else if (user.role === 2) {
        return <Redirect to="/admin" />;
      }
    }
  };

  const showError = () => (
    <div className="error" style={{ display: error ? "" : "none" }}>
      {error}
    </div>
  );

  const showLoading = () =>
    loading && (
      <div className="success">
        <h2>Loading...</h2>
      </div>
    );

  return (
    <>
      <Navbar />
      <div className="container">
        {showError()}
        {showLoading()}
        {logInForm()}
        {redirectUser()}
      </div>
    </>
  );
};

export default Login;
