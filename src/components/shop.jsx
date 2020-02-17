import React, { Component } from "react";

class Shop extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        {" "}
        <h5>Walker</h5>
        <p>
          {" "}
          CPS: 1 | Price: {this.props.walkerPrice} | Owned:{" "}
          <span className={this.getWalkerBadgeClasses()}>
            {this.props.numberOfWalkers}
          </span>
        </p>
        <button
          onClick={this.props.onPurchaseWalker}
          className={this.getWalkerBtnClasses()}
        >
          Buy Walker
        </button>
        <br />
        <br />
        <h5>Car</h5>
        <p>
          {" "}
          CPS: 5 | Price: {this.props.carPrice} | Owned:{" "}
          <span className={this.getCarBadgeClasses()}>
            {this.props.numberOfCars}
          </span>
        </p>
        <button
          onClick={this.props.onPurchaseCar}
          className={this.getCarBtnClasses()}
        >
          Buy Car
        </button>
        <br />
        <br />
        <h5>Van</h5>
        <p>
          {" "}
          CPS: 10 | Price: {this.props.vanPrice} | Owned:{" "}
          <span className={this.getVanBadgeClasses()}>
            {this.props.numberOfVans}
          </span>
        </p>
        <button
          onClick={this.props.onPurchaseVan}
          className={this.getVanBtnClasses()}
        >
          Buy Van
        </button>{" "}
      </React.Fragment>
    );
  }

  getWalkerBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.numberOfWalkers === 0 ? "warning" : "primary";
    return classes;
  }

  getWalkerBtnClasses() {
    let classes = "btn  btn-outline-dark btn-";
    classes +=
      this.props.count >= this.props.walkerPrice ? "primary" : "disabled";
    return classes;
  }

  getCarBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.numberOfCars === 0 ? "warning" : "primary";
    return classes;
  }

  getCarBtnClasses() {
    let classes = "btn btn-outline-dark btn-";
    classes += this.props.count >= this.props.carPrice ? "primary" : "disabled";
    return classes;
  }

  getVanBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.numberOfVans === 0 ? "warning" : "primary";
    return classes;
  }

  getVanBtnClasses() {
    let classes = "btn  btn-outline-dark btn-";
    classes += this.props.count >= this.props.vanPrice ? "primary" : "disabled";
    return classes;
  }
}

export default Shop;
