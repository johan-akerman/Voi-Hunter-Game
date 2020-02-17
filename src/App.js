import React, { Component } from "react";
import NavBar from "./components/navbar";
import Clicker from "./components/clicker";
import Shop from "./components/shop";
import "./components/styles/general.css";

class App extends Component {
  state = {
    money: 0,
    CollectedVOIs: 0,
    count: 20,
    walkerPrice: 10,
    numberOfWalkers: 0,
    carPrice: 200,
    numberOfCars: 0,
    vanPrice: 375,
    numberOfVans: 0,
    countPerSecond: 1
  };

  //Function for adding VOI (currency) when the VOI pin is clicked in the clicker component.
  addVOI = () => {
    this.setState(state => ({
      count: this.state.count + 1
    }));
  };

  //Function for running the addBonus function once a second. Runs onLoad in the clicker component.
  auto = () => {
    setInterval(this.addBonus, 1000);
  };

  //Function collecting all the bonuses based on earlier purchases
  addBonus = () => {
    this.setState(state => ({
      count: this.state.count + this.state.countPerSecond
    }));
  };

  //Function for purchasing a walker hunter
  purchaseWalker = () => {
    if (this.state.count >= this.state.walkerPrice) {
      this.setState({
        numberOfWalkers: this.state.numberOfWalkers + 1,
        walkerPrice: Math.round(50 * 1.15 ** (this.state.numberOfWalkers + 1)),
        count: Math.round(this.state.count - this.state.walkerPrice),
        countPerSecond: this.state.countPerSecond + 1
      });
    }
  };

  deploy = () => {
    this.setState(state => ({
      money: this.state.money + this.state.count,
      count: 0
    }));
  };

  //Function for purchasing a car hunter
  purchaseCar = () => {
    if (this.state.count >= this.state.carPrice) {
      this.setState({
        numberOfCars: this.state.numberOfCars + 1,
        carPrice: Math.round(200 * 1.15 ** (this.state.numberOfCars + 1)),
        count: Math.round(this.state.count - this.state.carPrice),
        countPerSecond: this.state.countPerSecond + 5
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
        countPerSecond: this.state.countPerSecond + 10
      });
    }
  };

  render() {
    return (
      <React.Fragment>
        <NavBar
          money={this.state.money}
          noOfVOIs={this.state.count}
          totalBonus={this.state.countPerSecond}
        />
        <div className="cointainer">
          <div className="row">
            <div className="col-lg-4 col-md-12 sidebar">
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

              <div className="btn-holder">
                <button onClick={this.deploy} className="btn btn-primary">
                  Deploy
                </button>
              </div>
            </div>

            <div className="col-lg-5 col-md-12 map">
              <Clicker onLoad={this.auto} onVoiClick={this.addVOI} />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;