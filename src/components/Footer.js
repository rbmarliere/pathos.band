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
        <div className="Footer">
            <footer>
                <Container className="container-fluid" expand="md">
                    <Row className="pt-3 pb-3">
                        <Col xs="12">
                            <a className="Footer-link" target="_tab" href="https://pathos.bandcamp.com/">
                                <FontAwesomeIcon icon={ ["fab", "bandcamp"] }  size="2x"/>
                            </a>
                            <a className="Footer-link" target="_tab" href="https://www.facebook.com/pathos.sound/">
                                <FontAwesomeIcon icon={ ["fab", "facebook"] }  size="2x"/>
                            </a>
                            <a className="Footer-link" target="_tab" href="https://www.instagram.com/pathos.band/">
                                <FontAwesomeIcon icon={ ["fab", "instagram"] } size="2x"/>
                            </a>
                            <a className="Footer-link" target="_tab" href="https://open.spotify.com/artist/4dC3TFSJFzfZ82SjMs8dgR">
                                <FontAwesomeIcon icon={ ["fab", "spotify"] }   size="2x"/>
                            </a>
                            <a className="Footer-link" target="_tab" href="https://www.youtube.com/channel/UCT6Sk9JezXTip94txp0aSfQ">
                                <FontAwesomeIcon icon={ ["fab", "youtube"] }   size="2x"/>
                            </a>
                        </Col>
                    </Row>
                </Container>
            </footer>
            <footer className="Footer-content">
                <Container className="container-fluid" expand="md">
                    <Row className="pt-3 pb-3">
                        <Col xs="12">
                            &copy; Pathos. All Rights Reserved.
                            <br/><a className="Footer-contact" href="mailto:pathos.sound@gmail.com">pathos.sound@gmail.com</a>
                        </Col>
                    </Row>
                </Container>
            </footer>
        </div>
    );
};

export default Footer;

