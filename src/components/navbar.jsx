import React, { Component } from "react";
import "./styles/navbar.css";
import Logo from "../images/voi_logo_coral.png";
class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-logo" href="voi.com">
          <img className="img-fluid" alt="logo" src={Logo}></img>
        </a>

        <span className="badge badge-pill badge-secondary">
          {this.props.totalCounters}
        </span>

        <form class="form-inline">
          <button class="btn btn-primary" type="submit">
            Shop
          </button>
        </form>
      </nav>
    );
  }
}

export default NavBar;
