import React from "react";
import "./App.css";
import Routes from "./Routes";
import Header from "./components/Header";
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => (
  <div>
    <Header />
    <Routes />
  </div>
);

export default App;
