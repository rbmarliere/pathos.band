import React from "react";
import { withTranslation } from "react-i18next";
import PropTypes from "prop-types";
import {
    Col,
    Row
} from "reactstrap";

const Cartel = ({ t }) =>
{
    return (
        <div className="Release-tracks">
            <div className="Release-cartel">
                Cartel
            </div>

            <Row>
                <Col md="7" xs="12" className="Release-right Release-lyric">
                    <div className="Release-quote">
                        &quot;Now a federated, decentralized system of free associations, incorporating economic as well as social institutions, would be what I refer to as anarcho-syndicalism and it seems to me that it is the appropriate form of social organization for an advanced technological society in which human beings do not have to be forced into a position of tools, of cogs in a machine; in which the creative urge, that I think is intrinsic to human nature, will in fact be able to realize itself in whatever way it will, I don’t know all the ways in which it will.&quot;
                        <br/><a target="_tab" href="https://youtu.be/vq9irdLcZmU?t=265">Noam Chomsky</a>
                    </div>
                    <br/>Reckless will inside a sore mind
                    <br/>Hollow shell apart from mankind
                    <br/>Evil makers in deeds combined
                    <br/>Left or right, black and white
                    <br/>Endless game with rules defined
                    <br/>By the invisible hand since ancient times
                    <br/>
                    <br/>For generations being refined
                    <br/>A simple craft of special design
                    <br/>The heirloom that you&apos;ll never find
                    <br/>With sole purpose to misalign
                    <br/>To rig, to squeeze and to grind
                    <br/>Grow tired or you stay blind
                    <br/>
                    <br/>Wealth perceived, price derived
                    <br/>Wrecking vessel, floating tide
                    <br/>Forgotten past, stolen pride
                    <br/>Store of value, loss denied
                </Col>

                <Col md="5" className="Release-left">
                    <div className="Release-track-credits">
                        { t("bx") } Lucas Guida
                        <br/>{ t("batera") } Hugo Moutinho
                        <br/>{ t("conc") } Ricardo Marlière
                        <br/>{ t("talk") } Noam Chomsky
                        <br/>{ t("gtr") } Ricardo Marlière
                        <br/>{ t("txt") } Ricardo Marlière
                        <br/>{ t("perc") } Álvaro Moutinho
                        <br/>{ t("rhodes") } Luiz Andrès
                        <br/>{ t("synth") } Luiz Andrès
                        <br/>{ t("v12") } Luiz Andrès { t("and") } Ricardo Marlière
                        <br/>{ t("violao") } Ricardo Marlière
                        <br/>{ t("vox") } JP Vieira
                        <br/>{ t("back") } Hugo Moutinho
                        <br/>{ t("org") } Luiz Andrès
                    </div>
                </Col>
            </Row>
        </div>
    );
};

Cartel.propTypes =
{
    t: PropTypes.func.isRequired
};

export default withTranslation()(Cartel);

