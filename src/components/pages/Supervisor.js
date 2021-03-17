import React from "react";
import { Redirect } from "react-router-dom";
import Navbar from "../Navbar";
import { isAuthenticated, getPlants } from "../../apiCore";

const Supervisor = () => {
  //const Plants = JSON.parse(getPlants());
  const { user } = isAuthenticated();
  const supervisorPage = (plants) => (
    <>
      <div className="supervisor">
        <div className="supervisor__menu">
          <h4 className="supervisor__menu__title">MENU</h4>
          <ul className="supervisor__menu__list">
            <li className="supervisor__menu__link">PLANTAS</li>
          </ul>
        </div>
        <div className="supervisor__mainZone">Plants</div>
      </div>
    </>
  );
  const redirectUser = () => {
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
