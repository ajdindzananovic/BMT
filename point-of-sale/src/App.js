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
    navStoreProperty: [
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
          <main className="row">
            <div className="col-3">
              <VerticalNav navData={this.state.navStockProperty} />
            </div>
            <div className="col-9">
              <Switch>
                <Route path="/stock" component={Stock} />
                <Route path="/store" component={Store} />
                <Route path="/office" component={Office} />
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
