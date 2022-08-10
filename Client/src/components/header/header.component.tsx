import React from "react";
import { NavLink } from "react-router-dom";

import "./header.component.css";

const Header: React.FC = () => {
  return (
    <header>
      <nav>
        <NavLink to="/">BikeLife</NavLink>
      </nav>
    </header>
  );
};

export default Header;
