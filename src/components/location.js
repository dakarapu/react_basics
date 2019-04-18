import React from "react";
// import ReactDOM from "react-dom";
//import faker from "faker";
import Weather from "./weather";
import "../styles/weather.css";

class Location extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      latitude: null,
      month: new Date().getMonth(),
      errorMessage: null
    };
  }

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ latitude: position.coords.latitude }),
      err => this.setState({ errorMessage: err.message })
    );
  }

  render() {
    console.log("Location :", this.state.latitude);
    if (this.state.errorMessage && !this.state.latitude) {
      return (
        <div className={`weather`}>
          <i class="exclamation circle icon" />
          {this.state.errorMessage}
        </div>
      );
    } else if (!this.state.errorMessage && !this.state.latitude) {
      return (
        <div className={`weather`}>
          <i class="asterisk loading icon" />
          {"Loading..."}
        </div>
      );
    }

    return <Weather latitude={this.state.latitude} month={this.state.month} />;
  }
}

export default Location;
