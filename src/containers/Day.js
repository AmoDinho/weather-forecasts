import React from "react";
import WeatherAPI from "../api";
import "./Days.css";
import { Container, Row, Col, Button } from 'reactstrap';
import PropTypes from "prop-types";
import InfoCards from "../components/InfoCards";
import MiscCard from "../components/MiscCard";

const Day = props => {
  const day = WeatherAPI.get(parseInt(props.match.params.number, 10));
  if (!day) {
    return <div>Sorry the weather for that day was not found</div>;
  }
  return (
    <div>
      <Container>
        <Row>
          <Col  sm="8" >
          <h1 className="text-left display-1">{day.day}</h1>
<h2>
  Temp High:{day.tempH}°C - Temp Low:{day.tempL}°C
</h2>
<h3>There is a {day.rainProb}% it might rain</h3>
          </Col>
        </Row>
      </Container>
      
      

<Container>
<Row>
  <Col sm="4" className="align-items-left mt-5">
   <InfoCards 
   rise={day.sunrise} 
   set={day.sunset} 
   />

  </Col>
  <Col sm="4" className="align-items-right mb-5 mx-auto">
  <MiscCard
wind={day.windSpeed}
dir={day.windDir}
uv={day.uvIndex}
cloud={day.cloudCover}
dew={day.dewPoint}
vis={day.visibility}

/>
   
  
  </Col>
</Row>
</Container>

<Container>
      <Row>
        <Col sm="4" >
        <Button className="align-items-right mb-2" outline color="info" href="/days"> Back</Button>
     
        </Col>
      </Row>
    </Container>
</div>
  );
};

export default Day;

Button.PropTypes ={
  color: PropTypes.string
}

