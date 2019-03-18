import React from "react";
import { withTranslation } from "react-i18next";
import PropTypes from "prop-types";
import {
    Col,
    Row
} from "reactstrap";

const TheWanderer = ({ t }) =>
{
    return (
        <div className="Release-tracks">
            <div className="Release-track-title">
                The Wanderer
            </div>

            &nbsp;

            <div className="Release-player">
                <iframe title="TheWanderer" className="Release-bcplayer" src="https://bandcamp.com/EmbeddedPlayer/album=1092530120/size=small/bgcol=333333/linkcol=4ec5ec/artwork=none/track=2537536381/transparent=true/" seamless><a target="_tab" href="http://pathos.bandcamp.com/album/elixir">Elixir by Pathos</a></iframe>
            </div>

            &nbsp;

            <Row>
                <Col className="Release-left Release-lyric">
                    He is no doubt a man
                    <br/>But to another realm he belongs
                    <br/>From a cold distant mountain he comes
                    <br/>Wandering alone
                    <br/>
                    <br/>A big black steed he rides and his step sounds like hell
                    <br/>His light will prevail
                    <br/>Bearing profane symbols he banes spirits and spells
                    <br/>He doesn’t know what to seek
                    <br/>
                    <br/>Gold, wine, glory, wisdom, power, happiness
                    <br/>or the one great Truth beyond this ocean of chaos
                    <br/>
                    <br/>He can read the stars
                    <br/>He can see the future
                    <br/>He can talk to the wind’s nature
                    <br/>Speaking ancient tongues
                    <br/>
                    <br/>He wields the hell flaming steel
                    <br/>Blessed in the fire of battle
                    <br/>Whose scarlet soaked wire
                    <br/>Makes him a restless servant of death
                </Col>

                <Col className="Release-right">
                    <div className="Release-track-credits">
                        { t("bx") } Lucas Guida
                        <br/>{ t("batera") } Hugo Moutinho
                        <br/>{ t("gtr") } Ricardo Marlière
                        <br/>{ t("txt") } Herman Faulstich { t("and") } Ricardo Marlière
                        <br/>{ t("perc") } Gustavo Campos
                        <br/>{ t("piano") } Arthur Damásio
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

TheWanderer.propTypes =
{
    t: PropTypes.func.isRequired
};

export default withTranslation()(TheWanderer);

