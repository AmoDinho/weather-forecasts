import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Label, Input } from "reactstrap";

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
        <Input type="select" value={value} onChange={this.handleChange}>
          <option value="Cape Town">Cape Town</option>
          <option value="Durban">Durban</option>
        </Input>
      </label>
    );
  }
}

export default CityPicker;
