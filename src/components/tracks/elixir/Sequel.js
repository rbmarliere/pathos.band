import React from "react";
import { withTranslation } from "react-i18next";
import PropTypes from "prop-types";
import {
    Col,
    Row
} from "reactstrap";

const Sequel = ({ t }) =>
{
    return (
        <div className="Release-tracks">
            <div className="Release-track-title">
                Sequel
            </div>

            <Row>
                <Col md="7" xs="12" className="Release-right Release-lyric">
                    As desolation rips the land apart
                    <br/>and the air is filled with sorrow
                    <br/>He fits the entire universe as one
                    <br/>Finding joy in his suffering
                    <br/>Standing right by the gates
                    <br/>of the most glorious and ancient city
                    <br/>There goes Nobody
                </Col>

                <Col md="5" className="Release-left">
                    <div className="Release-track-credits">
                        { t("bx") } Lucas Guida
                        <br/>{ t("batera") } Hugo Moutinho
                        <br/>{ t("gtr") } Ricardo Marlière
                        <br/>{ t("txt") } Ricardo Marlière
                        <br/>{ t("perc") } Gustavo Campos
                        <br/>{ t("tromp") } Wagner Souza
                        <br/>{ t("vox") } JP Vieira
                    </div>

                    <div className="Release-quote">
                    </div>
                </Col>

            </Row>
        </div>
    );
};

Sequel.propTypes =
{
    t: PropTypes.func.isRequired
};

export default withTranslation()(Sequel);

