import React from "react";
import pin from "../images/uncharged.svg";
import "./styles/general.css";

class Clicker extends React.Component {
  render() {
    return (
      <img
        onLoad={this.props.onLoad}
        className="pin"
        src={pin}
        style={{
          top: this.props.topPosition,
          left: this.props.leftPosition
        }}
        onClick={this.props.onVoiClick}
        alt="pin"
      />
    );
  }
}

export default Clicker;
