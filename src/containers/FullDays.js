import React from "react";
import WeatherAPI from "../api";
import { Link } from "react-router-dom";
import { Container, Row,Col,Card,  CardImg, CardTitle, 
  CardBody,CardDeck} from "reactstrap";
import "./FullDays.css";
import PropTypes from "prop-types";

const FullDays = () => (
  <div>
    <Container>
      <Row>
        
        <Col   className="ml-5" >
        <CardDeck  className="mt-4">
        {WeatherAPI.all().map(f => (


<Link to={`/Days/${f.number}`}>
  <Card key={f.number}  className="mt-4 mb-5 card">
  <CardImg top width="100%" src={f.thumbnail} alt="Card image cap" />

   <CardBody>
     <CardTitle className="text-center"><Link to={`/Days/${f.number}`}>{f.day}</Link></CardTitle>
     <Row>    
       <Col >
       <p className="d-inline card-text mr-5">{f.tempH}°C</p>
       <p className="d-inline text-right card-text ml-4">{f.tempL}°C</p>
     
    </Col>
    </Row>
   </CardBody>
  </Card>
  </Link>

))}
</CardDeck>
        </Col>
      </Row>
    </Container>
      
    
  </div>
);

Card.propTypes = {
  className: PropTypes.string
};

CardBody.propTypes ={
  className: PropTypes.string
}

CardDeck.propTypes ={
  className: PropTypes.string
}

CardImg.propTypes ={
  top: PropTypes.bool,
  className: PropTypes.string
}

CardTitle.propTypes ={
  className: PropTypes.string
}

export default FullDays;
