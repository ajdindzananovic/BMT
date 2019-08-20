import React, { Component } from 'react';
import { Link, NavLink } from "react-router-dom";
import Store from './store';
class TopNavBar extends Component {
  


  render() { 
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
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
            {this.props.parentLink.map(item => ( <li className="nav-item active">
              <NavLink className="nav-link" to={item.parentLink} onClick={()=> this.props.onClickButton(item.parentLink)}>
              {item.parentLink}
              </NavLink>
            </li>))}
          </ul>
        </div>
      </nav>
    );
  }
}
 



 
export default TopNavBar;
