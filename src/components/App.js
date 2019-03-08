import React from "react";
import NavBar from "../components/NavBar";
import PropTypes from "prop-types";

const App = (props) =>
{
    return (
        <div className="App">
            <NavBar/>
            {props.children}
        </div>
    );
};

App.propTypes =
{
    children: PropTypes.node.isRequired,
};

export default App;

