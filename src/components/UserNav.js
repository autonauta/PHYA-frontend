import React from "react";
import { Link } from "react-router-dom";

import { isAuthenticated } from "../apiCore";

const UserNavbar = () => {
  const { user } = isAuthenticated();
  return (
    <>
      <nav className="usernav">
        <div className="usernav__name">Operador: {user.name}</div>
      </nav>
    </>
  );
};

export default UserNavbar;
