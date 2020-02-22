import React, { Component } from "react";

class Stats extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-sm-6">
            <h3>Collected VOIs</h3>
            <h1>{this.props.noOfVOIs}</h1>
          </div>

          <div className="col-sm-6">
            <h3>Count per second</h3>
            <h1>{this.props.totalBonus}</h1>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Stats;
