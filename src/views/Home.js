import React from "react";
import App from "../components/App";
import Biography from "../components/Biography";
import Gallery from "../components/Gallery";

// pictures
import p1 from "../assets/image/01.jpg";
import p2 from "../assets/image/02.jpg";
import p3 from "../assets/image/03.jpg";
import p4 from "../assets/image/04.jpg";

const photos = [
    {
        src: p1,
        width: 12,
        height: 11
    },
    {
        src: p2,
        width: 12,
        height: 10
    },
    {
        src: p3,
        width: 4,
        height: 3
    },
    {
        src: p4,
        width: 14,
        height: 9
    }
];

const Home = () =>
{
    return (
        <App>
            <div className="Home">
                <Biography/>
                <Gallery photos={ photos } />
            </div>
        </App>
    );
};

export default Home;

