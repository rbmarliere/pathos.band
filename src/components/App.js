import React from "react";
import PropTypes from "prop-types";
import NavBar from "../components/NavBar";
import Banner from "../components/Banner";

const App = (props) =>
{
    return (
        <div className="App">
            <Banner/>
            <NavBar/>
            { props.children }
        </div>
    );
};

App.propTypes =
{
    children: PropTypes.node.isRequired,
};

export default App;

