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

            &nbsp;

            <div className="Release-player">
                <iframe title="Sequel" className="Release-bcplayer" src="https://bandcamp.com/EmbeddedPlayer/album=1092530120/size=small/bgcol=333333/linkcol=4ec5ec/artwork=none/track=2950109927/transparent=true/" seamless><a href="http://pathos.bandcamp.com/album/elixir">Elixir by Pathos</a></iframe>
            </div>

            &nbsp;

            <Row>
                <Col className="Release-left">
                    <div className="Release-track-credits">
                        { t("bx") } Lucas Guida
                        <br/>{ t("batera") } Hugo Moutinho
                        <br/>{ t("gtr") } Ricardo Marlière
                        <br/>{ t("txt") } Ricardo Marlière
                        <br/>{ t("perc") } Gustavo Campos
                        <br/>{ t("tromp") } Wanger Souza
                        <br/>{ t("vox") } JP Vieira
                    </div>

                    <div className="Release-quote">
                    </div>
                </Col>

                <Col className="Release-right Release-lyric">
                    As desolation rips the land apart
                    <br/>and the air is filled with sorrow
                    <br/>He fits the entire universe as one
                    <br/>Finding joy in his suffering
                    <br/>Standing right by the gates
                    <br/>of the most glorious and ancient city
                    <br/>There goes Nobody
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

