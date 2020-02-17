import React from "react";
import pin from "../images/uncharged.svg";
import "./styles/general.css";

class Clicker extends React.Component {
  render() {
    return (
      <div className="row" onLoad={this.props.onLoad}>
        <img
          className="pin"
          src={pin}
          onClick={this.props.onVoiClick}
          alt="pin"
        />
      </div>
    );
  }
}

export default Clicker;
