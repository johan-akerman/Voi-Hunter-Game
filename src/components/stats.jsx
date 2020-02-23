import React, { Component } from "react";

class Stats extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="row stats">
          <div className="col-sm-6">
            <h1>{this.props.noOfVOIs}</h1>
            <p>Collected VOIs</p>
          </div>

          <div className="col-sm-6">
            <h1>{this.props.CollectedVOIs}</h1>
            <p>Collected VOIs (all time)</p>
          </div>

          <div className="col-sm-6">
            <h1>{this.props.totalBonus}</h1>
            <p>Count per second</p>
          </div>

          <div className="col-sm-6">
            <h1>{this.props.noOfUpgrades}</h1>
            <p>Upgrades owned</p>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Stats;
