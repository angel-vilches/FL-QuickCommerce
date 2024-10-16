import React from "react";
import { Navbar, NavbarBrand, NavItem, NavLink, Nav } from "reactstrap";
import Cart from "./Cart";

class NavigationBar extends React.Component{
    render(){
        return(
            <Navbar color="light" light expand="lg">
                <NavbarBrand href="/">{this.props.title}</NavbarBrand>
                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <Cart/>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/">About</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/">React</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/">JS</NavLink>
                    </NavItem>
                </Nav>
            </Navbar>
        );
    }
}

export default NavigationBar;
