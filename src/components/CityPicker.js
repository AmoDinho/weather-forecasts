import React, { Component } from "react";
import ReactDOM from "react-dom";

class CityPicker extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.props.onSelectChange(event.target.value);
  }

  render() {
    const { value, children } = this.props;

    return (
      <label>
        {children}:
        <select value={value} onChange={this.handleChange}>
          <option value="Cape Town">Cape Town</option>
          <option value="Durban">Durban</option>
        </select>
      </label>
    );
  }
}

export default CityPicker;
