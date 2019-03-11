import React from "react";
import App from "../components/App";
import Biography from "../components/Biography";

const Home = () =>
{
    return (
        <App>
            <div className="Home">
                <Biography/>
            </div>
        </App>
    );
};

export default Home;

