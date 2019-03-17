import React from "react";
import banner from "../assets/image/banner.png";

const Banner = (props) =>
{
    return (
        <div className="Banner">
            <img className="img-fluid" src={ banner } alt="Pathos" onLoad={ props.onLoad }/>
        </div>
    );
};

export default Banner;

