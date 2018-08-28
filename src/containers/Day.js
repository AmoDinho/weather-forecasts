import React from "react";
import WeatherAPI from "../api";
import { Link } from "react-router-dom";
import "./Days.css";
import { Container, Row, Col } from 'reactstrap';

const Day = props => {
  const day = WeatherAPI.get(parseInt(props.match.params.number, 10));
  if (!day) {
    return <div>Sorry the weather for that day was not found</div>;
  }
  return (
    
      <Container>
        <Row>
          <Col>
          <h1>{day.day}</h1>
      <h2>
        Temp High:{day.tempH} - Temp Low:{day.tempL}
      </h2>
      <h3>There is a {day.rainProb}% it might rain</h3>
      <Link to="/days">Back</Link>
          </Col>
        </Row>
      </Container>
      
   
  );
};

export default Day;
