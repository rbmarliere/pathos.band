import React from "react";
import NavBar from "../components/NavBar";
import PropTypes from "prop-types";
import {
    Container,
    Col,
    Row
} from "reactstrap";

const App = (props) =>
{
    return (
        <div className="App">
            <Container className="container-fluid">
                <Row>
                    <Col lg="12" md="12" xs="12" className="px-0">
                        <img className="img-fluid" src={ require("../assets/img/pathos.jpg") } alt="Pathos"/>
                        <NavBar/>
                        { props.children }
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

App.propTypes =
{
    children: PropTypes.node.isRequired,
};

export default App;

