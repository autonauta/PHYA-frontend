import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import Navbar from "../Navbar";
import { isAuthenticated, requirePlants } from "../../apiCore";

const Supervisor = () => {
  //const Plants = JSON.parse(getPlants());
  const { user } = isAuthenticated();
  //[data, setData] = useState;
  const getPlants = async () => {
    return <h1>TEST</h1>;
  };
  const supervisorPage = (plants) => (
    <>
      <div className="supervisor">
        <div className="supervisor__menu">
          <h4 className="supervisor__menu__title">SUPERVISOR</h4>
        </div>
        <div className="supervisor__mainZone">
          <ul className="supervisor__menu__list">{getPlants()}</ul>
        </div>
      </div>
    </>
  );
  const redirectUser = () => {
    if (isAuthenticated()) {
      if (user.role === 1) {
        return <Redirect to="/operador" />;
      } else if (user.role === 2) {
        return <Redirect to="/supervisor" />;
      } else if (user.role === 3) {
        return <Redirect to="/admin" />;
      }
    }
  };

  return (
    <>
      <Navbar />
      <div className="container">
        {supervisorPage()}
        {redirectUser()}
      </div>
    </>
  );
};

export default Supervisor;
