import React, { Component } from "react";
import ReactDOM from "react-dom";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";

const WeatherCard = props => {
  return (
    <div>
      <Card>
        <CardImg
          top
          width="100%"
          src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
          alt="Card image cap"
        />
        <CardBody>
          <CardTitle>Day</CardTitle>
          <CardSubtitle>23c</CardSubtitle>
        </CardBody>
      </Card>
    </div>
  );
};

export default WeatherCard;
