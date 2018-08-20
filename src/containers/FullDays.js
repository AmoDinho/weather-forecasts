import React from "react";
import WeatherAPI from "../api";
import { Link } from "react-router-dom";

const FullDays = () => (
  <div>
    <ul>
      {WeatherAPI.all().map(f => (
        <li key={f.number}>
          <Link to={`/Days/${f.number}`}>{f.day}</Link>
        </li>
      ))}
    </ul>
  </div>
);

export default FullDays;
