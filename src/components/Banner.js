import React from "react";

const Banner = (props) =>
{
    return (
        <div className="Banner">
            <img className="img-fluid" src={ require("../assets/img/pathos.jpg") } alt="Pathos" onLoad={ props.onLoad }/>
        </div>
    );
};

export default Banner;

