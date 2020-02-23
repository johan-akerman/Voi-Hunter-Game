import React, { Component } from "react";
import { Tabs, Tab } from "react-bootstrap";
import NavBar from "./components/navbar";
import Clicker from "./components/clicker";
import Shop from "./components/shop";
import Stats from "./components/stats";
import "./components/styles/general.css";
import "bootstrap/dist/css/bootstrap.min.css";
import SimpleStorage from "react-simple-storage";

class App extends Component {
  state = {
    CollectedVOIs: 0,
    count: 0,
    walkerPrice: 10,
    numberOfWalkers: 0,
    carPrice: 200,
    numberOfCars: 0,
    vanPrice: 375,
    numberOfVans: 0,
    countPerSecond: 0,
    left: 50,
    top: 50,
    noOfUpgrades: 0
  };

  reset = () => {
    this.setState(state => ({
      CollectedVOIs: 0,
      count: 0,
      walkerPrice: 10,
      numberOfWalkers: 0,
      carPrice: 200,
      numberOfCars: 0,
      vanPrice: 375,
      numberOfVans: 0,
      countPerSecond: 0,
      left: 50,
      top: 50,
      noOfUpgrades: 0
    }));
  };

  //Function for adding VOI (currency) when the VOI pin is clicked in the clicker component.
  addVOI = () => {
    this.setState(state => ({
      count: this.state.count + 1,
      CollectedVOIs: this.state.CollectedVOIs + 1,
      left:
        Math.random() * (document.getElementById("map").clientWidth - 500 - 0) +
        250,
      top:
        Math.random() *
          (document.getElementById("map").clientHeight - 500 - 0) +
        250
    }));
  };

  //Function for running the addBonus function once a second. Runs onLoad in the clicker component.
  auto = () => {
    setInterval(this.addBonus, 1000);
  };

  //Function collecting all the bonuses based on earlier purchases
  addBonus = () => {
    this.setState(state => ({
      count: this.state.count + this.state.countPerSecond,
      CollectedVOIs: this.state.CollectedVOIs + this.state.countPerSecond
    }));
  };

  //Function for purchasing a walker hunter
  purchaseWalker = () => {
    if (this.state.count >= this.state.walkerPrice) {
      this.setState({
        numberOfWalkers: this.state.numberOfWalkers + 1,
        walkerPrice: Math.round(50 * 1.15 ** (this.state.numberOfWalkers + 1)),
        count: Math.round(this.state.count - this.state.walkerPrice),
        countPerSecond: this.state.countPerSecond + 1,
        noOfUpgrades: this.state.noOfUpgrades + 1
      });
    }
  };

  //Function for purchasing a car hunter
  purchaseCar = () => {
    if (this.state.count >= this.state.carPrice) {
      this.setState({
        numberOfCars: this.state.numberOfCars + 1,
        carPrice: Math.round(200 * 1.15 ** (this.state.numberOfCars + 1)),
        count: Math.round(this.state.count - this.state.carPrice),
        countPerSecond: this.state.countPerSecond + 5,
        noOfUpgrades: this.state.noOfUpgrades + 1
      });
    }
  };

  //Function for purchasing a van hunter
  purchaseVan = () => {
    if (this.state.count >= this.state.vanPrice) {
      this.setState({
        numberOfVans: this.state.numberOfVans + 1,
        vanPrice: Math.round(375 * 1.15 ** (this.state.numberOfVans + 1)),
        count: Math.round(this.state.count - this.state.vanPrice),
        countPerSecond: this.state.countPerSecond + 10,
        noOfUpgrades: this.state.noOfUpgrades + 1
      });
    }
  };

  render() {
    return (
      <React.Fragment>
        <SimpleStorage parent={this} />
        <div className="cointainer">
          <div className="row">
            <div className="col-lg-3 col-md-12 sidebar">
              <NavBar
                money={this.state.money}
                noOfVOIs={this.state.count}
                totalBonus={this.state.countPerSecond}
              />
              <div className="tab">
                <Tabs justify defaultActiveKey="Shop">
                  <Tab eventKey="Shop" title="Shop" className="tab-content">
                    <Shop
                      numberOfWalkers={this.state.numberOfWalkers}
                      walkerPrice={this.state.walkerPrice}
                      count={this.state.count}
                      perSecond={this.state.countPerSecond}
                      onPurchaseWalker={this.purchaseWalker}
                      onPurchaseCar={this.purchaseCar}
                      numberOfCars={this.state.numberOfCars}
                      carPrice={this.state.carPrice}
                      onPurchaseVan={this.purchaseVan}
                      numberOfVans={this.state.numberOfVans}
                      vanPrice={this.state.vanPrice}
                    />
                  </Tab>
                  <Tab eventKey="Stats" title="Stats" className="tab-content">
                    <Stats
                      CollectedVOIs={this.state.CollectedVOIs}
                      noOfVOIs={this.state.count}
                      totalBonus={this.state.countPerSecond}
                      noOfUpgrades={this.state.noOfUpgrades}
                    />

                    <button
                      onClick={this.reset}
                      className="btn btn-primary btn-reset"
                    >
                      Restart game
                    </button>
                  </Tab>

                  <Tab
                    eventKey="About"
                    title="About"
                    className="about tab-content"
                  >
                    <h2>About</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi.
                      <br />
                      <br />
                      <bold>Made by:</bold>{" "}
                      <a href="https://www.linkedin.com/in/johan-akerman/">
                        Johan Åkerman
                      </a>
                    </p>
                  </Tab>
                </Tabs>
              </div>
            </div>

            <div className="map col-lg-9 col-md-12" id="map">
              <Clicker
                leftPosition={this.state.left}
                topPosition={this.state.top}
                onLoad={this.auto}
                onVoiClick={this.addVOI}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
