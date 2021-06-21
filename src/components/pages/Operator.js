import React from "react";
import { Redirect } from "react-router-dom";
import Navbar from "../Navbar";
import UserNav from "../UserNav";
import { isAuthenticated, requirePlants } from "../../apiCore";

const Operator = () => {
  const { user } = isAuthenticated();
  const printPlants = (res) => {
    console.log(res);
  };
  //const plants = getPlants();
  //console.log(plants);
  const operatorPage = () => (
    <div className="operator">
      <div className="operator__title">Plantas asignadas</div>
    </div>
  );
  const redirectUser = () => {
    if (isAuthenticated()) {
      if (user.role === 1) {
        return <Redirect to="/operator" />;
      } else if (user.role === 2) {
        return <Redirect to="/supervisor" />;
      } else if (user.role === 3) {
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
