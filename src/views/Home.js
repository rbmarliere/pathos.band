import React from "react";
import App from "../components/App";
import Biography from "../components/Biography";
import Gallery from "../components/Gallery";

// pictures
import p1 from "../assets/image/home/01.png";
import p2 from "../assets/image/home/02.png";
import p3 from "../assets/image/home/03.png";
import p4 from "../assets/image/home/04.png";
import p5 from "../assets/image/home/05.png";
import p6 from "../assets/image/home/06.png";
import p7 from "../assets/image/home/07.png";
import p8 from "../assets/image/home/08.png";
import p9 from "../assets/image/home/09.png";
const photos = [
    { src: p1, width: 12, height: 11 },
    { src: p2, width: 15, height: 10 },
    { src: p3, width: 10, height: 8 },
    { src: p4, width: 16, height: 12 },
    { src: p5, width: 11, height: 9 },
    { src: p6, width: 14, height: 9 },
    { src: p7, width: 14, height: 9 },
    { src: p8, width: 14, height: 9 },
    { src: p9, width: 14, height: 9 }
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

