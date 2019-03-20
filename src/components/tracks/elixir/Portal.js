import React from "react";
import { withTranslation } from "react-i18next";
import PropTypes from "prop-types";
import {
    Col,
    Row
} from "reactstrap";

const Portal = ({ t }) =>
{
    return (
        <div className="Release-tracks">
            <div className="Release-track-title">
                Portal
            </div>

            <Row>
                <Col md="7" xs="12" className="Release-right">
                    <div className="Release-quote">
                        &quot;{ t("fool") }&quot;
                        <br/><a target="_tab" href="https://www.bibliotecapleyades.net/crowley/libro_thoth08.htm#GENERAL_CHARACTERS_OF_THE_TRUMPS_AS_THEY_APPEAR_IN_USE__">{ t("thoth") }</a>
                    </div>
                </Col>

                <Col md="5" className="Release-left">
                    <div className="Release-track-credits">
                        { t("bx") } Lucas Guida
                        <br/>{ t("batera") } Hugo Moutinho
                        <br/>{ t("gtr") } Ricardo Marlière
                        <br/>{ t("fla") } Gabriel Vaz Duque
                        <br/>{ t("perc") } Gustavo Campos
                    </div>
                </Col>
            </Row>
        </div>
    );
};

Portal.propTypes =
{
    t: PropTypes.func.isRequired
};

export default withTranslation()(Portal);

