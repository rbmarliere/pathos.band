import React, { Component } from "react";
import
{
    Collapse,
    Nav,
    Navbar,
    NavbarBrand,
    NavbarToggler,
    NavItem,
    NavLink
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
            <div>
                <Navbar color="light" expand="md" light className={ this.props.scroll > this.props.navtop ? "fixed-nav" : "" }>
                    <NavbarBrand href="/">
                        Pathos
                    </NavbarBrand>
                    <NavbarToggler onClick={ this.toggle } />
                    <Collapse isOpen={ this.state.isOpen } navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="/rapture"> Rapture!  </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/elixir"> Elixir </NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}

export default NavBar;

