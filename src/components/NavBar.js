import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import
{
    Collapse,
    Nav,
    Navbar,
    NavbarToggler,
    NavItem,
} from "reactstrap";

import "../assets/css/NavBar.css";

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
            <div className="NavBar">
                <Navbar color="dark" dark expand="md" className={ this.props.scroll > this.props.navtop ? "NavBar-fixed" : "" }>

                    <Link to="/" className="NavBar-brand">
                        PATHOS
                    </Link>

                    <NavbarToggler onClick={ this.toggle } />

                    <Collapse isOpen={ this.state.isOpen } navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <Link className="NavBar-link nav-link" to="/rapture"> Rapture!  </Link>
                            </NavItem>

                            <NavItem>
                                <Link className="NavBar-link nav-link" to="/elixir"> Elixir </Link>
                            </NavItem>
                        </Nav>
                    </Collapse>

                </Navbar>
            </div>
        );
    }
}

NavBar.propTypes =
{
    scroll: PropTypes.number.isRequired,
    navtop: PropTypes.number
};

export default NavBar;

