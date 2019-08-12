import React from "react";
import { NavLink } from "react-router-dom";
const VerticalNav = ({ navData }) => {
  return (
    <ul className="nav flex-column">
      {navData.map(item => (
        <li key={item.itemName} className="nav-item">
          <NavLink className="nav-link " to={item.linkTo}>
            {item.itemName}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default VerticalNav;
