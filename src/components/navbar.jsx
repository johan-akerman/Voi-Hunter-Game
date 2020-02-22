import React, { Component } from "react";
import "./styles/navbar.css";
import Logo from "../images/voi_logo_white.svg";
class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-logo" href="voi.com">
          <img className="img-fluid" alt="logo" src={Logo}></img>
        </a>

        {/*    <span className="badge badge-pill badge-secondary">
          No of VOIs: {this.props.noOfVOIs}
        </span>
 */}
        {/*         <span className="badge badge-pill badge-secondary">
          CPS: {this.props.totalBonus}
        </span> */}
      </nav>
    );
  }
}

export default NavBar;
