import React, { Component } from "react";
import
{
    Collapse,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Nav,
    Navbar,
    NavbarBrand,
    NavbarToggler,
    NavLink,
    UncontrolledDropdown
} from "reactstrap";

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
                    <NavbarBrand href="/">
                        Pathos
                    </NavbarBrand>
                    <NavbarToggler onClick={ this.toggle } />
                    <Collapse isOpen={ this.state.isOpen } navbar>
                        <Nav className="ml-auto" navbar>
                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret>
                                    Discography
                                </DropdownToggle>
                                <DropdownMenu right>
                                    <DropdownItem>
                                        <NavLink href="/elixir">
                                            Elixir
                                        </NavLink>
                                    </DropdownItem>
                                    <DropdownItem>
                                        <NavLink href="/rapture">
                                            RAPTURE!
                                        </NavLink>
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

export default NavBar;

