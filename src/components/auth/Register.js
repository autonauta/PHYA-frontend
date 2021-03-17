import React, { useState } from "react";
import Navbar from "../Navbar";

import { register } from "../../apiCore";

const Register = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    password_check: "",
    role: "",
    error: "",
    success: false,
  });

  const {
    role,
    name,
    email,
    password,
    password_check,
    success,
    error,
  } = values;

  const handleChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const clickSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: false });
    register({ name, email, password, password_check, role }).then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error, success: false });
        setTimeout(() => {
          setValues({ ...values, error: false });
        }, 5000);
      } else {
        setValues({
          ...values,
          name: "",
          email: "",
          password: "",
          password_check: "",
          error: "",
          role: "",
          success: true,
        });
        setTimeout(() => {
          setValues({
            ...values,
            name: "",
            email: "",
            password: "",
            password_check: "",
            error: "",
            role: "",
            success: false,
          });
        }, 5000);
      }
    });
  };

  const registerForm = () => (
    <form className="form">
      <h4 className="form__title">Registro de usuarios</h4>
      <div className="form__group">
        <label className="form__label">Nombre</label>
        <input
          onChange={handleChange("name")}
          type="name"
          className="form__input"
          value={name}
          autoComplete="off"
        />
      </div>
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
      <div className="form__group">
        <label className="form__label">Password nuevamente</label>
        <input
          onChange={handleChange("password_check")}
          type="password"
          className="form__input"
          value={password_check}
          autoComplete="off"
        />
      </div>
      <div className="form__group">
        <label className="form__label">Rol</label>
        <select
          onChange={handleChange("role")}
          type="text"
          className="form__input"
          value={role}
        >
          <option value="">Selecciona uno</option>
          <option value="2">Admin</option>
          <option value="1">Supervisor</option>
          <option value="0">Operador</option>
        </select>
      </div>
      <button onClick={clickSubmit} className="form__button">
        Registrar
      </button>
    </form>
  );

  const showError = () => (
    <div className="error" style={{ display: error ? "" : "none" }}>
      {error}
    </div>
  );

  const showSuccess = () => (
    <div className="success" style={{ display: success ? "" : "none" }}>
      Nueva cuenta creada con éxito!!
    </div>
  );

  return (
    <>
      <Navbar />
      <div className="container">
        {registerForm()}
        {showError()}
        {showSuccess()}
      </div>
    </>
  );
};

export default Register;
