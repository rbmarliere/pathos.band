import React from "react";
import { withTranslation } from "react-i18next";
import PropTypes from "prop-types";
import {
    Col,
    Row
} from "reactstrap";

const Sophie = ({ t }) =>
{
    return (
        <div className="Release-tracks">
            <div className="Release-track-title">
                Sophie
            </div>

            <Row>
                <Col md="7" xs="12" className="Release-right Release-lyric">
                    The fear was blinding his eyes
                    <br/>A mist he was seeing
                    <br/>In a swamp of lies
                    <br/>That people said bleeding
                    <br/>
                    <br/>Beyond the mist he saw
                    <br/>A bonfire shining bright
                    <br/>The book of rules and laws
                    <br/>Irradiating light
                    <br/>
                    <br/>He knew by her side there would be no pride
                    <br/>In the end there is no more place to hide
                    <br/>As he is torn apart by the tears he cried
                    <br/>The child will born and the man will die
                    <br/>
                    <br/>Child of the Silver Star, remember who you are
                    <br/>I’m crying for you, under the light of the moon
                    <br/>A pray to your dad, the sun, the fire red
                    <br/>The horns in your head are there to guide the dead
                    <br/>See happiness in doom, the dark is good to you
                    <br/>Remember who you are, child of the Silver Star
                </Col>

                <Col md="5" className="Release-left">
                    <div className="Release-track-credits">
                        { t("bx") } Lucas Guida
                        <br/>{ t("batera") } Hugo Moutinho
                        <br/>{ t("fla") } Gabriel Vaz Duque
                        <br/>{ t("gtr") } Ricardo Marlière
                        <br/>{ t("txt") } JP Vieira { t("and") } Ricardo Marlière
                        <br/>{ t("perc") } Gustavo Campos
                        <br/>{ t("v12") } Ricardo Marlière
                        <br/>{ t("back") } Hugo Moutinho
                        <br/>{ t("vox") } JP Vieira
                        <br/>{ t("org") } Arthur Damásio
                    </div>

                    <div className="Release-quote">
                    </div>
                </Col>
            </Row>
        </div>
    );
};

Sophie.propTypes =
{
    t: PropTypes.func.isRequired
};

export default withTranslation()(Sophie);

