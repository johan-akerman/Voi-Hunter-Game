import React, { Component } from "react";
import "./styles/general.css";
import Logo from "../images/voi_logo_white.svg";
import Hamburger from "../images/voi-hamburger-menu.png";

class NavBar extends Component {
  toggleMenu = () => {
    var sidebarColumn = document.getElementById("sidebarColumn");
    var mapColumn = document.getElementById("mapColumn");
    sidebarColumn.classList.toggle("smallScreenTab");
    mapColumn.classList.toggle("smallScreenMap");
  };

  render() {
    return (
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-logo" href="voi.com">
          <img className="img-fluid" alt="logo" src={Logo}></img>
        </a>
        <span className="count">
          Collected VOIs:
          <span className="badge badge-pill badge-count">
            {this.props.noOfVOIs}
          </span>
        </span>
        <button onClick={this.toggleMenu} className="btn" id="myBtn">
          <img className="img-fluid hamburger" alt="logo" src={Hamburger}></img>
        </button>
      </nav>
    );
  }
}

export default NavBar;
