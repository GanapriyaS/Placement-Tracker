import React from "react";
import { Outlet } from "react-router-dom";

import Home from "./Home";
import Header from "./navbar/header";
import NavBarLg from "./navbar/navbar_lg";

const Navbar = ({ type }) => {
  var check = type === "home";
  return (
    <>
      <div className=" bg-gray-300">
        <Header />
        <div className="pt-12 lg:flex">
          <NavBarLg />

          <span className="lg:ml-64"> </span>

          {!check && <Outlet />}
          {check && <Home />}
        </div>
      </div>
    </>
  );
};

export default Navbar;
