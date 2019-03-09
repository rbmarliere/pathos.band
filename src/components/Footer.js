import React from "react";
import {
    Col,
    Container,
    Row
} from "reactstrap";
import "../assets/css/Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () =>
{
    return (
        <div>
            <footer className="Footer">
                <Container className="container-fluid" expand="md">
                    <Row className="pt-3 pb-3">
                        <Col className="Footer-links" xs="12">
                            <a target="_tab" href="https://pathos.bandcamp.com/">
                                <FontAwesomeIcon icon={ ["fab", "bandcamp"] }  size="2x"/>&nbsp;
                            </a>
                            <a target="_tab" href="https://www.facebook.com/pathos.sound/">
                                <FontAwesomeIcon icon={ ["fab", "facebook"] }  size="2x"/>&nbsp;
                            </a>
                            <a target="_tab" href="https://www.instagram.com/pathos.band/">
                                <FontAwesomeIcon icon={ ["fab", "instagram"] } size="2x"/>&nbsp;
                            </a>
                            <a target="_tab" href="https://open.spotify.com/artist/4dC3TFSJFzfZ82SjMs8dgR">
                                <FontAwesomeIcon icon={ ["fab", "spotify"] }   size="2x"/>&nbsp;
                            </a>
                            {/*<FontAwesomeIcon icon={ ["fab", "twitter"] }   size="2x"/>&nbsp;*/}
                            <a target="_tab" href="https://www.youtube.com/channel/UCT6Sk9JezXTip94txp0aSfQ">
                                <FontAwesomeIcon icon={ ["fab", "youtube"] }   size="2x"/>&nbsp;
                            </a>
                        </Col>
                    </Row>
                </Container>
            </footer>
            <footer className="Footer">
                <Container className="container-fluid" expand="md">
                    <Row className="pt-3 pb-3">
                        <Col xs="12">
                            &copy; Pathos. All Rights Reserved.
                        </Col>
                    </Row>
                </Container>
            </footer>
        </div>
    );
};

export default Footer;

