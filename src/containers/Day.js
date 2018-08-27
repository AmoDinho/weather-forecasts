import React from "react";
import WeatherAPI from "../api";
import { Link } from "react-router-dom";

const Day = props => {
  const day = WeatherAPI.get(parseInt(props.match.params.number, 10));
  if (!day) {
    return <div>Sorry the weather for that day was not found</div>;
  }
  return (
    <div>
      <h1>{day.day}</h1>
      <h1>
        Temp High:{day.tempH} - Temp Low:{day.tempL}
      </h1>
      <h2>There is a {day.rainProb}% it might rain</h2>
      <Link to="/days">Back</Link>
    </div>
  );
};

export default Day;
