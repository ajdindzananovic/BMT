import React from "react";
import { Link, NavLink } from "react-router-dom";
const TopNavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="#">
        Point of sale
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <NavLink className="nav-link" to="/stock">
              Stock
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/store">
              Store
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="office">
              Office
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default TopNavBar;
