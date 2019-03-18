import React, { Component } from "react";
import PropTypes from "prop-types";
import Banner from "./Banner";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { Container } from "reactstrap";

class App extends Component
{
    constructor(props)
    {
        super(props);
        this.handleBannerLoaded = this.handleBannerLoaded.bind(this);
        this.handleScroll = this.handleScroll.bind(this);
        this.handleNavToggle = this.handleNavToggle.bind(this);
        this.state = { bannerLoaded: false, scroll: 0 };
    }

    handleBannerLoaded()
    {
        const banner = document.querySelector(".Banner");
        this.setState({ navtop: banner.offsetHeight });
    }

    handleScroll()
    {
        this.setState({ scroll: window.scrollY });
    }

    handleNavToggle()
    {
        const height = document.querySelector("nav").offsetHeight;
        if ( height !== this.state.height )
            this.setState({ height: height });
    }

    componentDidMount()
    {
        window.scrollTo(0, 0);
        window.addEventListener("scroll", this.handleScroll);
        window.addEventListener("resize", this.handleBannerLoaded);
        this.handleNavToggle();
    }

    componentDidUpdate()
    {
        this.state.scroll > this.state.navtop ?
            document.body.style.paddingTop = `${this.state.height}px` :
            document.body.style.paddingTop = 0;
    }

    render()
    {
        return (
            <div className="App">
                <Banner onLoad={ this.handleBannerLoaded.bind(this) }/>
                <NavBar scroll={ this.state.scroll } navtop={ this.state.navtop } onToggle={ this.handleNavToggle.bind(this) } />
                <div className="Content">
                    <Container>
                        { this.props.children }
                    </Container>
                </div>
                <Footer/>
            </div>
        );
    }
}

App.propTypes =
{
    children: PropTypes.node.isRequired
};

export default App;

