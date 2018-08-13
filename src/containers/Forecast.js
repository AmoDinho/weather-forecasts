import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Container, Row, Col, Jumbotron } from "reactstrap";
import WeatherCard from "../components/WeatherCard";

class Forecast extends Component {
  render() {
    //const { value, children } = this.props;

    return (
      <div>
        <Jumbotron fluid>
          <Container>
            <Row>
              <Col>
                <WeatherCard />
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

export default Forecast;
