import React from "react";
import "../styles/weather.css";
//import faker from "faker";
//import ReactDOM from "react-dom";

class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      weather: null,
      text: ""
    };
  }

  componentDidMount() {
    let { latitude, month } = this.props;
    console.log("WEATHER - LAtitude:", latitude);
    const winter = { weather: "snowflake", text: "Burr, its chilly!" };
    const summer = { weather: "sun", text: "Let's hit the beach!" };
    if (month > 2 && month < 9) {
      latitude > 0 ? this.setState(summer) : this.setState(winter);
    } else {
      latitude < 0 ? this.setState(winter) : this.setState(summer);
    }
  }

  render() {
    return (
      <div className={`weather ${this.state.weather}`}>
        <i className={`left-icon massive ${this.state.weather} icon`} />
        <br />
        {/* Latitude: {this.props.latitude}
        <br />
        Month: {this.props.month}
        <br />
        Weather: {this.state.weather}
        <br /> */}
        <h1>{this.state.text}</h1>
        <br />
        <i className={`right-icon massive ${this.state.weather} icon`} />
      </div>
    );
  }
}

export default Weather;
