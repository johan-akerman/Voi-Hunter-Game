import React, { Component } from "react";
import Walker from "../images/walker.svg";
import Car from "../images/car.svg";
import Voila from "../images/voila.svg";

class Shop extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="row shopItem">
          <div className="col-sm-2">
            <img className="img-fluid" alt="logo" src={Walker}></img>
          </div>
          <div className="col-sm-7">
            <h5>Walker</h5>
            <p>
              CPS: 1 | Price: {this.props.walkerPrice} | Owned:
              <span>{this.props.numberOfWalkers}</span>
            </p>
          </div>
          <div className="col-sm-2">
            <button
              onClick={this.props.onPurchaseWalker}
              className={this.getWalkerBtnClasses()}
            >
              Buy
            </button>
          </div>
        </div>

        <div className="row shopItem">
          <div className="col-sm-2">
            <img className="img-fluid" alt="logo" src={Car}></img>
          </div>
          <div className="col-sm-7">
            <h5>Car</h5>
            <p>
              CPS: 5 | Price: {this.props.carPrice} | Owned:{" "}
              <span>{this.props.numberOfCars}</span>
            </p>
          </div>
          <div className="col-sm-2">
            <button
              onClick={this.props.onPurchaseCar}
              className={this.getCarBtnClasses()}
            >
              Buy
            </button>
          </div>
        </div>
        <div className="shopItem row">
          <div className="col-sm-2">
            <img className="img-fluid" alt="logo" src={Voila}></img>
          </div>

          <div className="col-sm-7">
            <h5>Voila</h5>
            <p>
              CPS: 10 | Price: {this.props.vanPrice} | Owned:
              <span>{this.props.numberOfVans}</span>
            </p>
          </div>

          <div className="col-sm-2">
            <button
              onClick={this.props.onPurchaseVan}
              className={this.getVanBtnClasses()}
            >
              Buy
            </button>
          </div>
        </div>
      </React.Fragment>
    );
  }

  getWalkerBtnClasses() {
    let classes = "btn  btn-outline-dark btn-";
    classes +=
      this.props.count >= this.props.walkerPrice ? "primary" : "disabled";
    return classes;
  }

  getCarBtnClasses() {
    let classes = "btn btn-outline-dark btn-";
    classes += this.props.count >= this.props.carPrice ? "primary" : "disabled";
    return classes;
  }

  getVanBtnClasses() {
    let classes = "btn  btn-outline-dark btn-";
    classes += this.props.count >= this.props.vanPrice ? "primary" : "disabled";
    return classes;
  }
}

export default Shop;
