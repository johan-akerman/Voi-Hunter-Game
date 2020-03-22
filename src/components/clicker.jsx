import React from "react";
import left from "../images/voi-left.png";
import right from "../images/voi-right.png";
import clickSound from "../sound/click.mp3";
import "./styles/general.css";

var imagesArray = [left, right];

class Clicker extends React.Component {
  state = {
    num: 0,
    leftPosition: 50,
    topPosition: 50
  };

  playAudio() {
    const audioEl = document.getElementsByClassName("audio-element")[0];
    audioEl.play();
  }

  generateNewVOI() {
    console.log(document.getElementsByClassName("pin").clientWidth);
    this.setState(state => ({
      leftPosition: Math.floor(
        Math.random() * (document.getElementById("map").clientWidth - 350) + 0
      ),
      topPosition: Math.floor(
        Math.random() * (document.getElementById("map").clientHeight - 350) + 0
      ),
      num: Math.floor(Math.random() * imagesArray.length)
    }));
  }

  onClick = () => {
    this.playAudio();
    this.generateNewVOI();
    this.props.onVoiClick();
  };

  render() {
    return (
      <div>
        <audio className="audio-element">
          <source src={clickSound}></source>>
        </audio>
        <img
          onLoad={this.props.onLoad}
          className="pin"
          src={imagesArray[this.state.num]}
          style={{
            top: this.state.topPosition,
            left: this.state.leftPosition
          }}
          onClick={this.onClick}
          alt="VOI"
        />
      </div>
    );
  }
}

export default Clicker;
