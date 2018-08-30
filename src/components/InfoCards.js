import React from 'react';
import { Card,  CardText, CardBody} from 'reactstrap';

const InfoCards = ({
    rise, 
    set, 
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
       
          <CardText> Sunrise: {rise}AM</CardText>
          <CardText> Sunset: {set}PM</CardText>
           
        </CardBody>
      </Card>

    
    </div>
);

export default InfoCards;