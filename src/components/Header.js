import React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink} from "reactstrap";

import "./Header.css";

  export default class Example extends React.Component {
    constructor(props) {
      super(props);
  
      this.toggle = this.toggle.bind(this);
     // this.toogleNavbar = this.toogleNavbar.bind(this);
      this.state = {
        isOpen: false
        //collapsed:false
      };
    }

    
    toggle() {
      this.setState({
        isOpen: !this.state.isOpen
      });
    }
/*
toogleNavbar(){
  this.setState({
    collapsed: !this.state.collapsed
  });
}*/
    render() {
      return (
        <div>
          <Navbar className="Navbar" light  expand="md">
            <NavbarBrand href="/">Weather App</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                <NavLink className="Link" href="/"> Home</NavLink>
                          
                </NavItem>

                

                <NavItem>
                   <NavLink className="Link" href="/days"> Forecasts</NavLink>
                </NavItem>

                <NavItem>
                <NavLink  className="Link" href="/warnings"> Warnings</NavLink>


                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </div>
      );
    }
  }

  /*
const Header = () => (
  <header>
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/days">Days</Link>
        </li>
        <li>
          <Link to="/warnings">Warnings</Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
*/