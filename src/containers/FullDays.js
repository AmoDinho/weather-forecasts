import React from "react";
import WeatherAPI from "../api";
import { Link } from "react-router-dom";
import { Container, Row,Col,Card, Button, CardImg, CardTitle, CardText, CardGroup,
  CardSubtitle, CardBody } from "reactstrap";

const FullDays = () => (
  <div>
    <Container>
      <Row>
        <Col>
        {WeatherAPI.all().map(f => (


<CardGroup key={f.number}>
  <Card className="mt-4">
    <CardImg top src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
   <CardBody>
     <CardTitle><Link to={`/Days/${f.number}`}>{f.day}</Link></CardTitle>
   </CardBody>
  </Card>
</CardGroup>

))}
        </Col>
      </Row>
    </Container>
      
    
  </div>
);

export default FullDays;
