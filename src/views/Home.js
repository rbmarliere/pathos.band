import React from "react";
import PropTypes from "prop-types";
import { withTranslation } from "react-i18next";
import App from "../components/App";
import Gallery from "../components/Gallery";
import {
    Container,
    Col,
    Row
} from "reactstrap";
import { Helmet } from "react-helmet";

import "../assets/css/Home.css";

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

const Home = ({ t }) =>
{
    return (
        <App>
            <Helmet>
                <title>Pathos</title>
                <meta property="og:description" content="Pathos é uma banda de Minas Gerais, Brasil." />
                <meta property="og:image" content="http://kind-elion-04c521.netlify.com/image/rapture.jpg" />
                <meta property="og:title" content="Pathos" />
                <meta property="og:type" content="music.musician" />
                <meta property="og:url" content="http://kind-elion-04c521.netlify.com/" />
            </Helmet>

            <div className="Home">
                <Container>
                    <Row>
                        <Col md="1"></Col>
                        <Col className="Home-quote" xs="12" md="10">
                            { t("pathos") }
                        </Col>
                        <Col md="1"></Col>
                    </Row>

                    <Row className="Home-quote2">
                        <Col md="1"></Col>
                        <Col xs="12" md="10">
                            <hr/>
                            <h2> { t("p1") } </h2>
                            <h6> { t("p2") } </h6>
                            <ol>
                                <li> { t("def1") } </li>
                                <li> { t("def2") } </li>
                                <li> { t("def3") } </li>
                                <li> { t("def4") } </li>
                            </ol>
                        </Col>
                        <Col md="1"></Col>
                    </Row>

                    <Row>&nbsp;</Row>

                </Container>

                <Gallery photos={ photos } />
            </div>
        </App>
    );
};

Home.propTypes =
{
    t: PropTypes.func.isRequired
};

export default withTranslation()(Home);

