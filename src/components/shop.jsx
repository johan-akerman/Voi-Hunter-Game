import React, { Component } from "react";
import Walker from "../images/walker.png";
import Car from "../images/car.png";
import Voila from "../images/voila.png";

class Shop extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <div className="row shopItem">
            <div className="col-2 image">
              <img className="img-fluid" alt="logo" src={Walker}></img>
            </div>
            <div className="col-6">
              <h5>Walker</h5>
              <p>CPS: 1 | Price: {this.props.walkerPrice}</p>
            </div>
            <div className="col-2">
              <button
                onClick={this.props.onPurchaseWalker}
                className={this.getWalkerBtnClasses()}
              >
                Buy
              </button>
            </div>
          </div>

          <div className="row shopItem">
            <div className="col-2 image">
              <img className="img-fluid" alt="logo" src={Car}></img>
            </div>
            <div className="col-6">
              <h5>Car</h5>
              <p>CPS: 5 | Price: {this.props.carPrice}</p>
            </div>
            <div className="col-2">
              <button
                onClick={this.props.onPurchaseCar}
                className={this.getCarBtnClasses()}
              >
                Buy
              </button>
            </div>
          </div>
          <div className="shopItem row">
            <div className="col-2 image">
              <img className="img-fluid" alt="logo" src={Voila}></img>
            </div>

            <div className="col-6">
              <h5>Voila</h5>
              <p>CPS: 10 | Price: {this.props.voilaPrice}</p>
            </div>

            <div className="col-2">
              <button
                onClick={this.props.onPurchaseVoila}
                className={this.getvoilaBtnClasses()}
              >
                Buy
              </button>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }

  getWalkerBtnClasses() {
    let classes = "btn  btn-outline-dark btn-";
    classes +=
      this.props.CollectedVOIs >= this.props.walkerPrice
        ? "primary"
        : "disabled";
    return classes;
  }

  getCarBtnClasses() {
    let classes = "btn btn-outline-dark btn-";
    classes +=
      this.props.CollectedVOIs >= this.props.carPrice ? "primary" : "disabled";
    return classes;
  }

  getvoilaBtnClasses() {
    let classes = "btn  btn-outline-dark btn-";
    classes +=
      this.props.CollectedVOIs >= this.props.voilaPrice
        ? "primary"
        : "disabled";
    return classes;
  }
}

export default Shop;
