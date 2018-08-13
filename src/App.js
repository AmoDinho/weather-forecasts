import React, { Component } from "react";
import CityPicker from "./components/CityPicker";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectValue: "Cape Town"
    };

    this.handleSelectChange = this.handleSelectChange.bind(this);
  }

  handleSelectChange(value) {
    this.setState({ selectValue: value });
  }

  render() {
    const { selectValue } = this.state;
    return (
      <div className="App">
        <div className="App_Header">
          <h1>Weather App</h1>
        </div>

        <div>
          <CityPicker
            value={selectValue}
            onSelectChange={this.handleSelectChange}
          >
            Choose a city
          </CityPicker>
        </div>
      </div>
    );
  }
}

export default App;
