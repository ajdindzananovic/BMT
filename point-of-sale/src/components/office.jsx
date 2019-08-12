import React, { Component } from "react";
import VerticalNav from "./navbar/verticalNav";
import Table from "./table";
class Office extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="col-3">
          <VerticalNav navData={this.props.navData} />
        </div>
        <div className="col-9">
          <Table />
        </div>
      </React.Fragment>
    );
  }
}

export default Office;
