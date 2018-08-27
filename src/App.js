import React, { Component } from "react";
import CityPicker from "./components/CityPicker";
import "./App.css";
import Routes from "./Routes";
import Header from "./components/Header";

const App = () => (
  <div>
    <Header />
    <Routes />
  </div>
);

export default App;
