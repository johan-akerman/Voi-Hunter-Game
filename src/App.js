import React, { Component } from "react";
import { Tabs, Tab } from "react-bootstrap";
import NavBar from "./components/navbar";
import VOI from "./components/VOI";
import Shop from "./components/shop";
import Stats from "./components/stats";
import "./components/styles/general.css";
import "bootstrap/dist/css/bootstrap.min.css";
import SimpleStorage from "react-simple-storage";

class App extends Component {
  state = {
    CollectedVOIsAllTime: 0,
    CollectedVOIs: 0,
    numberOfWalkers: 0,
    numberOfCars: 0,
    numberOfVoilas: 0,
    walkerPrice: 10,
    carPrice: 200,
    voilaPrice: 375,
    CollectedVOIsPerSecond: 0,
    noOfUpgrades: 0
  };

  //Function for restarting the game. Resets the state to initial values.
  restartGame = () => {
    this.setState(state => ({
      CollectedVOIsAllTime: 0,
      CollectedVOIs: 0,
      numberOfWalkers: 0,
      numberOfCars: 0,
      numberOfVoilas: 0,
      walkerPrice: 10,
      carPrice: 200,
      voilaPrice: 375,
      CollectedVOIsPerSecond: 0,
      noOfUpgrades: 0
    }));
  };

  //Function for running the addBonus function once a second. Runs onLoad in the VOI component.
  auto = () => {
    setInterval(this.addBonus, 1000);
  };

  //Function collecting all the bonuses based on earlier purchases
  addBonus = () => {
    this.setState(state => ({
      CollectedVOIs:
        this.state.CollectedVOIs + this.state.CollectedVOIsPerSecond,
      CollectedVOIsAllTime:
        this.state.CollectedVOIsAllTime + this.state.CollectedVOIsPerSecond
    }));
  };

  //Function for adding VOI (currency) when the VOI pin is clicked in the VOI component.
  addVOI = () => {
    this.setState(state => ({
      CollectedVOIs: this.state.CollectedVOIs + 1,
      CollectedVOIsAllTime: this.state.CollectedVOIsAllTime + 1
    }));
  };

  //Function for purchasing a Walker
  purchaseWalker = () => {
    if (this.state.CollectedVOIs >= this.state.walkerPrice) {
      this.setState({
        walkerPrice: Math.round(50 * 1.15 ** (this.state.numberOfWalkers + 1)),
        CollectedVOIs: Math.round(
          this.state.CollectedVOIs - this.state.walkerPrice
        ),
        CollectedVOIsPerSecond: this.state.CollectedVOIsPerSecond + 1,
        numberOfWalkers: this.state.numberOfWalkers + 1,
        noOfUpgrades: this.state.noOfUpgrades + 1
      });
    }
  };

  //Function for purchasing a Car
  purchaseCar = () => {
    if (this.state.CollectedVOIs >= this.state.carPrice) {
      this.setState({
        carPrice: Math.round(200 * 1.15 ** (this.state.numberOfCars + 1)),
        CollectedVOIs: Math.round(
          this.state.CollectedVOIs - this.state.carPrice
        ),
        CollectedVOIsPerSecond: this.state.CollectedVOIsPerSecond + 5,
        numberOfCars: this.state.numberOfCars + 1,
        noOfUpgrades: this.state.noOfUpgrades + 1
      });
    }
  };

  //Function for purchasing a Voila
  purchaseVoila = () => {
    if (this.state.CollectedVOIs >= this.state.voilaPrice) {
      this.setState({
        voilaPrice: Math.round(375 * 1.15 ** (this.state.numberOfVoilas + 1)),
        CollectedVOIs: Math.round(
          this.state.CollectedVOIs - this.state.voilaPrice
        ),
        CollectedVOIsPerSecond: this.state.CollectedVOIsPerSecond + 10,
        numberOfVoilas: this.state.numberOfVoilas + 1,
        noOfUpgrades: this.state.noOfUpgrades + 1
      });
    }
  };

  render() {
    return (
      <div className="mainContainer">
        <SimpleStorage parent={this} />
        <NavBar noOfVOIs={this.state.CollectedVOIs} />
        <div className="cointainer">
          <div className="row" id="theRow">
            <div id="sidebarColumn" className="col-xl-4 col-lg-6 col-md-12">
              <div className="tab" id="tab">
                <Tabs justify defaultActiveKey="Shop">
                  <Tab eventKey="Shop" title="Shop" className="tab-content">
                    <Shop
                      numberOfWalkers={this.state.numberOfWalkers}
                      walkerPrice={this.state.walkerPrice}
                      CollectedVOIs={this.state.CollectedVOIs}
                      onPurchaseWalker={this.purchaseWalker}
                      onPurchaseCar={this.purchaseCar}
                      numberOfCars={this.state.numberOfCars}
                      carPrice={this.state.carPrice}
                      onPurchaseVoila={this.purchaseVoila}
                      numberOfvoilas={this.state.numberOfvoilas}
                      voilaPrice={this.state.voilaPrice}
                    />
                  </Tab>
                  <Tab eventKey="Stats" title="Stats" className="tab-content">
                    <Stats
                      CollectedVOIsAllTime={this.state.CollectedVOIsAllTime}
                      noOfVOIs={this.state.CollectedVOIs}
                      totalBonus={this.state.CollectedVOIsPerSecond}
                      noOfUpgrades={this.state.noOfUpgrades}
                    />
                  </Tab>

                  <Tab
                    eventKey="Settings"
                    title="Settings"
                    className="Settings tab-content"
                  >
                    <button
                      onClick={this.restartGame}
                      className="btn btn-primary btn-reset"
                    >
                      Restart game
                    </button>
                  </Tab>
                </Tabs>
              </div>
            </div>

            <div id="mapColumn" className="col-xl-8 col-lg-6  col-md-12">
              <VOI onVoiClick={this.addVOI} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
