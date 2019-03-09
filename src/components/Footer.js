import React from "react";
import {
    Col,
    Container,
    Row
} from "reactstrap";
import "../assets/css/Footer.css";

const Footer = () =>
{
    return (
        <div>
            <footer className="Footer">
                <Container className="container-fluid" expand="md">
                    <Row className="pt-3 pb-3">
                        <Col xs="12">
                            links (bandcamp, instagram, facebook, youtube, spotify, (twitter?)
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

