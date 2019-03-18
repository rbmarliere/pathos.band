import React from "react";
import PropTypes from "prop-types";
import { withTranslation } from "react-i18next";
import App from "../components/App";
import Gallery from "../components/Gallery";
import {
    Col,
    Row
} from "reactstrap";

import "../assets/css/Release.css";

// tracks
import Portal from "../components/tracks/elixir/Portal";
import AHauntedVision from "../components/tracks/elixir/AHauntedVision";
import Sophie from "../components/tracks/elixir/Sophie";
import TheGod from "../components/tracks/elixir/TheGod";
import Ankh from "../components/tracks/elixir/Ankh";
import TheWanderer from "../components/tracks/elixir/TheWanderer";
import Sequel from "../components/tracks/elixir/Sequel";

// pictures
import p1 from "../assets/image/elixir/01.png";
import p2 from "../assets/image/elixir/02.png";
import p3 from "../assets/image/elixir/03.png";
import p4 from "../assets/image/elixir/04.png";
import p5 from "../assets/image/elixir/05.png";
import p6 from "../assets/image/elixir/06.png";
import p7 from "../assets/image/elixir/07.png";
import p8 from "../assets/image/elixir/08.png";
import p9 from "../assets/image/elixir/09.png";
import p10 from "../assets/image/elixir/10.png";
import p11 from "../assets/image/elixir/11.png";
import p12 from "../assets/image/elixir/12.png";
import p13 from "../assets/image/elixir/13.png";
import p14 from "../assets/image/elixir/14.png";
import p15 from "../assets/image/elixir/15.png";
import p16 from "../assets/image/elixir/16.png";
import p17 from "../assets/image/elixir/17.png";
import p18 from "../assets/image/elixir/18.png";
const artwork = [{ src: p1, width: 1, height: 1 }];
const photos = [
    { src: p2, width: 12, height: 11 },
    { src: p1, width: 12, height: 11 },
    { src: p3, width: 12, height: 11 },
    { src: p4, width: 12, height: 11 },
    { src: p5, width: 12, height: 11 },
    { src: p6, width: 12, height: 9 },
    { src: p7, width: 9, height: 12 },
    { src: p8, width: 12, height: 9 },
    { src: p9, width: 9, height: 12 },
    { src: p10, width: 12, height: 9 },
    { src: p11, width: 9, height: 12 },
    { src: p12, width: 12, height: 9 },
    { src: p13, width: 12, height: 9 },
    { src: p14, width: 9, height: 12 },
    { src: p15, width: 12, height: 9 },
    { src: p16, width: 9, height: 12 },
    { src: p17, width: 12, height: 9 },
    { src: p18, width: 12, height: 10 }
];

const Elixir = ({ t }) =>
{
    return (
        <App>
            <div className="Release">
                <div className="Release-cover">
                    <Gallery photos={ artwork } direction={ "column" } />
                </div>

                &nbsp;

                <div className="Release-title">
                    ELIXIR
                </div>

                <hr/>
                <Row>
                    <Col className="Release-credits">
                        { t("elx1") } <br/>
                        <br/>
                        { t("elx2") } <br/>
                        { t("elx3") } <br/>
                        { t("elx4") } <br/>
                        { t("elx5") } <br/>
                        <br/>
                        { t("elx6") } <br/>
                        { t("elx7") } <br/>
                        <br/>
                        { t("elx8") } <br/>
                        { t("elx9") } <br/>
                        <br/>
                        { t("elx10") } <br/>
                        <br/>
                        { t("elx11") } <br/>
                    </Col>
                </Row>

                <hr/>
                <Portal/>
                <hr/>
                <AHauntedVision/>
                <hr/>
                <Sophie/>
                <hr/>
                <TheGod/>
                <hr/>
                <Ankh/>
                <hr/>
                <TheWanderer/>
                <hr/>
                <Sequel/>

                &nbsp;

                <hr/>
                <Gallery photos={ photos } />

                <hr/>
                <Row>
                    <Col md="3"/>
                    <Col md="6" className="Release-just Release-quote">
                        &quot;{ t("dan") }&quot;
                        <br/><a target="_tab" href="http://oganpazan.com.br/elixir-2015-pathos/">Danilo Cruz</a>
                        <br/><br/>

                        &quot;{ t("paul") }&quot;
                        <br/><a target="_tab" href="http://doomedandstoned.com/post/126164534683/papapaulsgroovyreviews">Papa Paul</a>
                        <br/><br/>

                        &quot;{ t("fdj") }&quot;
                        <br/><a target="_tab" href="http://stonerking1.blogspot.com.br/2015/08/pathos-elixir-brazil-prog-stoners-debut.html">FDJ</a>
                    </Col>
                    <Col md="3"/>
                </Row>

            </div>
        </App>
    );
};

Elixir.propTypes =
{
    t: PropTypes.func.isRequired
};

export default withTranslation()(Elixir);

