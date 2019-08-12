import React, { Component } from "react";
import "./App.css";
import TopNavBar from "./components/topNavBar";
import Store from "./components/store";
import Office from "./components/office";
import Stock from "./components/stock";
import { Route, Switch } from "react-router-dom";
class App extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <header className="container-fluid">
          <TopNavBar />
          <Switch>
            <Route path="/stock" component={Stock} />
            <Route path="/store" component={Store} />
            <Route path="/office" component={Office} />
          </Switch>
        </header>
        <main />
        <footer />
      </React.Fragment>
    );
  }
}

export default App;
