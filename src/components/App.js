import React, { Component } from "react";
import PropTypes from "prop-types";
import NavBar from "../components/NavBar";
import Banner from "../components/Banner";

class App extends Component
{
    constructor(props)
    {
        super(props);
        this.handleBannerLoaded = this.handleBannerLoaded.bind(this);
        this.handleScroll = this.handleScroll.bind(this);
        this.state = { bannerLoaded: false, scroll: 0 };
    }

    handleBannerLoaded()
    {
        const el = document.querySelector("nav");
        this.setState({navtop: el.offsetTop, height: el.offsetHeight});
        window.addEventListener("scroll", this.handleScroll);
    }

    handleScroll()
    {
        this.setState({ scroll: window.scrollY });
    }

    componentDidMount()
    {
        this.handleBannerLoaded();
        window.addEventListener("resize", this.handleBannerLoaded);
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
                <NavBar scroll={ this.state.scroll } navtop={ this.state.navtop }/>
                { this.props.children }
            </div>
        );
    }
}

App.propTypes =
{
    children: PropTypes.node.isRequired,
};

export default App;

