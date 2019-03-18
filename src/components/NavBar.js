import React, { Component } from "react";
import PropTypes from "prop-types";
import { withTranslation } from "react-i18next";
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

                            <UncontrolledDropdown nav inNavbar className="NavBar-link">
                                <DropdownToggle nav caret>
                                    { this.props.t("nav1") }
                                </DropdownToggle>

                                <DropdownMenu right className="NavBar-dropdown">
                                    <Link to="/rapture">
                                        <DropdownItem className="nav-link NavBar-dropdown-btn">
                                            Rapture, 2019
                                        </DropdownItem>
                                    </Link>

                                    <Link to="/elixir">
                                        <DropdownItem className="nav-link NavBar-dropdown-btn">
                                             Elixir, 2015
                                        </DropdownItem>
                                    </Link>
                                </DropdownMenu>
                            </UncontrolledDropdown>

                            <NavItem>
                            </NavItem>

                            <NavItem>
                            </NavItem>

                            <NavItem>
                                <Link className="NavBar-link nav-link" to="/biography"> { this.props.t("nav2") } </Link>
                            </NavItem>

                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret>
                                    <FontAwesomeIcon icon={ ["fas", "language"] } size="1x"/>&nbsp;
                                </DropdownToggle>

                                <DropdownMenu right className="NavBar-dropdown">
                                    <DropdownItem onClick={ () => { this.props.i18n.changeLanguage("pt"); } } className="NavBar-dropdown-btn-lang">
                                        <img src={ BR } alt="" />
                                    </DropdownItem>

                                    <DropdownItem onClick={ () => { this.props.i18n.changeLanguage("en"); } } className="NavBar-dropdown-btn-lang">
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
    navtop: PropTypes.number,
    t: PropTypes.func.isRequired,
    i18n: PropTypes.object.isRequired
};

export default withTranslation()(NavBar);

