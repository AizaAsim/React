import React from "react";
import { Outlet } from "react-router-dom";
import header from "./header/header";
import footer from "./footer/footer";
const Layout1 = () => {
  return (
    <div>
      <header></header>
      <Outlet />
      <footer></footer>
    </div>
  );
};

export default Layout1;
