import React, { Component } from "react";
import "./App.css";
import TopNavBar from "./components/topNavBar";
import Store from "./components/store";
import Office from "./components/office";
import Stock from "./components/stock";
import { Route, Switch } from "react-router-dom";
import VerticalNav from "./components/navbar/verticalNav";
import Logo from "./components/logo";
class App extends Component {
  state = {
    navStockProperty: [
      {
        itemName: "Products",
        linkTo: "/products"
      },
      {
        itemName: "Inventory",
        linkTo: "/inventory"
      },
      {
        itemName: "Transaction",
        linkTo: "/transaction"
      }
    ],
    navOfficeProperty: [
      {
        itemName: "Sales Invoices",
        linkTo: "/invoices"
      },
      {
        itemName: "Sales Reports",
        linkTo: "/reports"
      },
      {
        itemName: "Suppliers",
        linkTo: "/suppliers"
      }
    ]
  };
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <header className="row">
            <div className="col-3">
              <Logo />
            </div>
            <div className="col-9">
              <TopNavBar />
            </div>
          </header>
          <main>
            <div className="row">
              <Switch>
                <Route
                  path="/stock"
                  render={() => <Stock navData={this.state.navStockProperty} />}
                />
                <Route path="/store" component={Store} />
                <Route
                  path="/office"
                  render={() => (
                    <Office navData={this.state.navOfficeProperty} />
                  )}
                />
              </Switch>
            </div>
          </main>
          <footer />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
