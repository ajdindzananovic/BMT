import React, { Component } from "react";
import VerticalNav from "./navbar/verticalNav";
import { Route, Switch } from "react-router-dom";
import Product from "./product";
import Inventory from './inventory';


import Table from "./table";
class Stock extends Component {
  
  state = {};
  render() {
    return (
      <React.Fragment>
        
        <div className="col-9">
       <Table></Table>
        </div>
      </React.Fragment>
    );
  }
}

export default Stock;
