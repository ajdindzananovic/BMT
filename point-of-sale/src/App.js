import React, { Component } from "react";
import "./App.css";
import TopNavBar from "./components/topNavBar";
import Store from "./components/store";
import Office from "./components/office";
import Stock from "./components/stock";
import { Route, Switch } from "react-router-dom";
import VerticalNav from "./components/navbar/verticalNav";
import Logo from "./components/logo";
import Product from "./components/product";

class App extends Component {
  state = {

    data:[{
      itemName: "",
      linkTo: "",
       parentLink:""
      
    }],
    verticalNavLinks: [
      {
        itemName: "Products",
        linkTo: "/stock/products",
         parentLink:"stock"
        
      },
      {
        itemName: "Inventory",
        linkTo: "/inventory",
        parentLink:"stock"
      },
      {
        itemName: "Transaction",
        linkTo: "/transaction",
        parentLink:"stock"
      },
     
      {
        itemName: "Sales Invoices",
        linkTo: "/invoices",
        parentLink:"office",
      },
      {
        itemName: "Sales Reports",
        linkTo: "/reports",
        parentLink:"office"
      },
      {
        itemName: "Suppliers",
        linkTo: "/suppliers",
        parentLink:"office"
      },
      {
        itemName: "Seller",
        linkTo: "/seller",
        parentLink:"store"
      }
    ],
    parentLinks:[
      {_id:1,
        parentLink:"stock"
      
      },
      {_id:2,
        parentLink:"store"
      
      },
      {_id:3,
        parentLink:"office"
      
      }
    ]
  };

  handleOnClick =(parentLink)=>{

    const data = this.state.verticalNavLinks.filter(p => p.parentLink===parentLink)
    
    this.setState({data});
    
  

  }
 

  render() {
    return (
      <React.Fragment>
        <div className="container">
          <header className="row">
            <div className="col-3">
              <Logo />
            </div>
            <div className="col-9">
              <TopNavBar  parentLink={this.state.parentLinks} onClickButton={this.handleOnClick} />
            </div>
          </header>
          <main>
           
          
            <div className="row">
            <div className="col-3">
          <VerticalNav navData={this.state.data} />
        </div>
            
              <Switch>
                <Route
                

                  path="/stock"
                  exact
                  component={Stock}
                />
                <Route path="/store" component={Store} />
                <Route
                  path="/office"
                  component={Office}
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
