import React from "react";
import { NavLink } from "react-router-dom";
const VerticalNavBar = () => {
  return (
    <ul className="nav flex-column">
      <li className="nav-item">
        <NavLink className="nav-link active" to="#">
          Products
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="#">
          Inventories
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="#">
          Transactions
        </NavLink>
      </li>
    </ul>
  );
};

export default VerticalNavBar;
