import React from "react";
import { Container, Row,Col, Alert } from "reactstrap";

const Warnings = () => (
  <div>
   <Container>
     <Row>
       <Col>
       <h1 className="text-left mt-5">Warnings</h1>

     <Alert color="primary">
      Dam levels are over 50%.
     </Alert>

      <Alert color="danger">
      Flash floods in Delft.
     </Alert>

      <Alert color="warning">
      March for Land Without Compensation on 23 October 2018 in CBD.
     </Alert>
       </Col>
     </Row>
   </Container>
  </div>
);
export default Warnings;
