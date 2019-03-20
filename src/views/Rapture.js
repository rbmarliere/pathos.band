import React from "react";
import PropTypes from "prop-types";
import { withTranslation } from "react-i18next";
import {
    Col,
    Row
} from "reactstrap";
import { Helmet } from "react-helmet";

import App from "../components/App";
import Gallery from "../components/Gallery";

import "../assets/css/Release.css";

// tracks
import RaptureTrack from "../components/tracks/rapture/Rapture";
import Coniunctio from "../components/tracks/rapture/Coniunctio";
import Cartel from "../components/tracks/rapture/Cartel";
import Eve from "../components/tracks/rapture/Eve";
import Gods from "../components/tracks/rapture/Gods";
import EOS from "../components/tracks/rapture/EOS";

// pictures
import p1 from "../assets/image/rapture/01.jpg";
import p2 from "../assets/image/rapture/02.png";
import p3 from "../assets/image/rapture/03.png";
import p4 from "../assets/image/rapture/04.png";
import p5 from "../assets/image/rapture/05.png";
import p6 from "../assets/image/rapture/06.png";
import p7 from "../assets/image/rapture/07.png";
import p8 from "../assets/image/rapture/08.png";
import p9 from "../assets/image/rapture/09.png";
import p10 from "../assets/image/rapture/10.png";
import p11 from "../assets/image/rapture/11.png";
import p12 from "../assets/image/rapture/12.png";
import p13 from "../assets/image/rapture/13.png";
import p14 from "../assets/image/rapture/14.png";
import p15 from "../assets/image/rapture/15.png";
import p16 from "../assets/image/rapture/16.png";
import p17 from "../assets/image/rapture/17.png";
import p18 from "../assets/image/rapture/18.png";
const artwork = [{ src: p1, width: 1, height: 1 }];
const photos = [
    { src: p1, width: 12, height: 12 },
    { src: p2, width: 12, height: 9 },
    { src: p3, width: 12, height: 9 },
    { src: p4, width: 14, height: 11 },
    { src: p5, width: 12, height: 9 },
    { src: p6, width: 9, height: 12 },
    { src: p7, width: 12, height: 9 },
    { src: p8, width: 12, height: 9 },
    { src: p9, width: 12, height: 9 },
    { src: p10, width: 9, height: 12 },
    { src: p11, width: 12, height: 10 },
    { src: p12, width: 9, height: 12 },
    { src: p13, width: 12, height: 10 },
    { src: p14, width: 12, height: 9 },
    { src: p15, width: 9, height: 12 },
    { src: p16, width: 13, height: 12 },
    { src: p17, width: 12, height: 9 },
    { src: p18, width: 15, height: 9 }
];

const Rapture = ({ t }) =>
{
    return (
        <App>
            <Helmet>
                <title>Rapture</title>
                <meta property="og:description" content="Rapture é o segundo álbum da banda mineira Pathos, lançado no dia 20 de Março de 2019." />
                <meta property="og:image" content="http://kind-elion-04c521.netlify.com/image/rapture.png" />
                <meta property="og:title" content="Rapture" />
                <meta property="og:type" content="music.album" />
                <meta property="og:url" content="http://kind-elion-04c521.netlify.com/rapture" />
            </Helmet>

            <div className="Release">
                <div className="Release-cover">
                    <Gallery photos={ artwork } direction={ "column" } />
                </div>

                <div className="Release-title">
                    RAPTURE
                </div>

                <Row>
                    <Col className="Release-credits">
                        { t("rap1") } <br/>
                        <br/>
                        { t("rap2") } <br/>
                        { t("rap3") } <br/>
                        { t("rap4") } <br/>
                        { t("rap5") } <br/>
                        <br/>
                        { t("rap6") } <br/>
                        { t("rap7") } <br/>
                        <br/>
                        { t("rap8") } <br/>
                        { t("rap9") } <br/>
                        <br/>
                        { t("rap10") } <br/>
                        <br/>
                        { t("rap11") } <br/>
                    </Col>
                </Row>

                <br/><hr/>
                <RaptureTrack/>
                <br/><hr/>
                <Coniunctio/>
                <br/><hr/>
                <Cartel/>
                <br/><hr/>
                <Eve/>
                <br/><hr/>
                <Gods/>
                <br/><hr/>
                <EOS/>

                <br/><br/>
                <Gallery photos={ photos } />
                <br/>

            </div>
        </App>
    );
};

Rapture.propTypes =
{
    t: PropTypes.func.isRequired
};

export default withTranslation()(Rapture);

