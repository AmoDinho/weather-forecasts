import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Container, Row, Col, Jumbotron } from "reactstrap";
import WeatherCard from "../components/WeatherCard";

const weather = [
  {
    "Cape Town": {
      Days: [
        {
          ObjectId: 1,
          Day: "Monday",
          tempH: 23,
          tempL: 12,
          sunrise: "7:25",
          sunset: "7:25",
          windSpeed: "14 km/h",
          humidity: "24%",
          pressure: "1026.00 mb",
          uvIndex: 4,
          cloudCover: "40%",
          ceiling: "9144m",
          dewPoint: -6,
          visibility: 16
        },
        {
          ObjectId: 2,
          Day: "Tuesday",
          tempH: 23,
          tempL: 12,
          sunrise: "7:25",
          sunset: "7:25",
          windSpeed: "14 km/h",
          humidity: "24%",
          pressure: "1026.00 mb",
          uvIndex: 4,
          cloudCover: "40%",
          ceiling: "9144m",
          dewPoint: -6,
          visibility: 16
        },

        {
          ObjectId: 3,
          Day: "Wednesday",
          tempH: 23,
          tempL: 12,
          sunrise: "7:25",
          sunset: "7:25",
          windSpeed: "14 km/h",
          humidity: "24%",
          pressure: "1026.00 mb",
          uvIndex: 4,
          cloudCover: "40%",
          ceiling: "9144m",
          dewPoint: -6,
          visibility: 16
        },
        {
          ObjectId: 4,
          Day: "Thursday",
          tempH: 23,
          tempL: 12,
          sunrise: "7:25",
          sunset: "7:25",
          windSpeed: "14 km/h",
          humidity: "24%",
          pressure: "1026.00 mb",
          uvIndex: 4,
          cloudCover: "40%",
          ceiling: "9144m",
          dewPoint: -6,
          visibility: 16
        },
        {
          ObjectId: 5,
          Day: "Friday",
          tempH: 23,
          tempL: 12,
          sunrise: "7:25",
          sunset: "7:25",
          windSpeed: "14 km/h",
          humidity: "24%",
          pressure: "1026.00 mb",
          uvIndex: 4,
          cloudCover: "40%",
          ceiling: "9144m",
          dewPoint: -6,
          visibility: 16
        }
      ]
    }
  }
];

export default class Forecast extends Component {
  constructor(props) {
    super(props);

    this.state = {
      weather
    };
  }

  render() {
    //const { value, children } = this.props;

    return (
      <div>
        <Jumbotron fluid>
          <Container>
            <Row>
              <Col>
                <WeatherCard
                  weather={this.state.weather}
                  Day={this.props.Day}
                  Tempreture={this.props.tempH}
                />
                <WeatherCard />
                <WeatherCard />
                <WeatherCard />
                <WeatherCard />
              </Col>
            </Row>
          </Container>
        </Jumbotron>
      </div>
    );
  }
}
