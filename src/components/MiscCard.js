import React from 'react';
import { Card, CardText, CardBody} from 'reactstrap';
  import PropTypes from "prop-types";

const MiscCard = ({
    
    wind,
    dir,
    uv,
    cloud,
    dew,
    vis

}) => (


    <div>
   
   

      <Card>
        <CardBody>
          <CardText> Wind Speed: {wind} km/p</CardText>
          <CardText> Wind Direction:{dir}</CardText>
          <CardText> UV Index:{uv}</CardText>
          <CardText> Cloud Cover:{cloud}%</CardText>
          <CardText>Dew Point:{dew}</CardText>
          <CardText>Visability:{vis} km</CardText>

           
        </CardBody>
      </Card>
     
    </div>
);


Card.propTypes = {
    className: PropTypes.string
  };

CardText.propTypes = {
    className: PropTypes.string
};

export default MiscCard;