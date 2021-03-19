import React from "react";
import { Redirect } from "react-router-dom";
import Navbar from "../Navbar";
import UserNav from "../UserNav";
import { isAuthenticated } from "../../apiCore";

const Operator = () => {
  const { user } = isAuthenticated();
  const operatorPage = () => (
    <div className="operator">
      <div className="operator__title">Plantas asignadas</div>
    </div>
  );
  const redirectUser = () => {
    if (isAuthenticated()) {
      if (user.role === 0) {
        return <Redirect to="/operator" />;
      } else if (user.role === 1) {
        return <Redirect to="/supervisor" />;
      } else if (user.role === 2) {
        return <Redirect to="/admin" />;
      }
    }
  };

  return (
    <>
      {redirectUser()}
      <Navbar />
      <UserNav />
      {operatorPage()}
    </>
  );
};

export default Operator;
