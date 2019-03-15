import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import
{
    Collapse,
    Nav,
    Navbar,
    NavbarToggler,
    NavItem,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from "reactstrap";

import "../assets/css/NavBar.css";

import { withTranslation } from "react-i18next";
import BR from "../assets/image/Brasil.png";
import US from "../assets/image/USA.png";

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

                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret>
                                    <FontAwesomeIcon icon={ ["fas", "language"] }  size="2x"/>&nbsp;
                                </DropdownToggle>

                                <DropdownMenu right>
                                    <DropdownItem onClick={ () => { this.props.i18n.changeLanguage("pt"); } }>
                                        <img src={ BR } alt="" />
                                    </DropdownItem>

                                    <DropdownItem onClick={ () => { this.props.i18n.changeLanguage("en"); } }>
                                        <img src={ US } alt="" />
                                    </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
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

export default withTranslation()(NavBar);

