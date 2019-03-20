import React, { Component } from "react";
import PropTypes from "prop-types";
import { withTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import
{
    Collapse,
    Nav,
    Navbar,
    NavbarToggler,
    NavItem,
    DropdownItem
} from "reactstrap";

import "../assets/css/NavBar.css";

import BR from "../assets/image/Brasil.png";
import US from "../assets/image/USA.png";
import rapture from "../assets/image/rapture/01.jpg";
import elixir from "../assets/image/elixir/01.png";

class NavBar extends Component
{
    constructor(props)
    {
        super(props);
        this.lang = this.lang.bind(this);
        this.toggle = this.toggle.bind(this);
        this.state = { isOpen: false, lang: "pt" };
    }

    toggle()
    {
        this.setState({ isOpen: !this.state.isOpen });
    }

    lang()
    {
        var newlang = this.state.lang === "pt" ? "en" : "pt";
        this.props.i18n.changeLanguage(newlang);
        this.setState({ lang: newlang });
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

                    <Collapse navbar isOpen={ this.state.isOpen } onEntered={ () => { this.props.onToggle(); } } onExited={ () => { this.props.onToggle(); } }>
                        <Nav className="ml-auto" navbar>

                            <NavItem>
                                <Link to="/rapture" className="nav-link NavBar-link">
                                    <div className="NavBar-img">
                                        <img src={ rapture } alt="" />
                                        &nbsp; Rapture, 2019 &nbsp;
                                    </div>
                                </Link>
                            </NavItem>

                            <NavItem>
                                <Link to="/rapture" className="nav-link NavBar-link">
                                    <div className="NavBar-img">
                                        <img src={ elixir } alt="" />
                                        &nbsp; Elixir, 2015 &nbsp;
                                    </div>
                                </Link>
                            </NavItem>

                            {/*<NavItem>
                                <Link className="NavBar-link nav-link" to="/biography"> { this.props.t("nav2") } </Link>
                            </NavItem>*/}

                            <div className="NavBar-img NavBar-lang" onClick={ this.lang } >
                                <img src={ this.state.lang === "pt" ? BR : US } alt="" />
                            </div>

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
    i18n: PropTypes.object.isRequired,
    onToggle: PropTypes.func.isRequired
};

export default withTranslation()(NavBar);

