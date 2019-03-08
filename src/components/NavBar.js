import React, { Component } from "react";
import { Link } from "react-router-dom";
import
{
    Collapse,
    Container,
    Nav,
    NavItem,
    Navbar,
    NavbarToggler,
    Row
} from "reactstrap";
import logo from "../assets/img/logo.svg";

class NavBar extends Component
{
    constructor(props)
    {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = { isOpen: false };
    }

    toggle()
    {
        this.setState({ isOpen: !this.state.isOpen });
    }

    render()
    {
        return (
            <div>
                <Navbar color="light" expand="md" light>
                    <Link className="navbar-brand" to="/">
                        <Container>
                            <Row className="d-flex align-items-center">
                                <div className="logo">
                                    <img src={logo} alt="Pathos"/>
                                </div>
                                    &nbsp;
                                    Pathos
                            </Row>
                        </Container>
                    </Link>
                    <NavbarToggler onClick={ this.toggle } />
                    <Collapse isOpen={ this.state.isOpen } navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                Hi
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}

export default NavBar;

