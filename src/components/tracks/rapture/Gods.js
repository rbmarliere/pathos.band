import React from "react";
import { withTranslation } from "react-i18next";
import PropTypes from "prop-types";
import {
    Col,
    Row
} from "reactstrap";

const Gods = ({ t }) =>
{
    return (
        <div className="Release-tracks">
            <div className="Release-track-title">
                I Don&apos;t Dream With Gods
            </div>

            &nbsp;

            <div className="Release-player">
                <iframe title="Gods" className="Release-bcplayer" src="https://bandcamp.com/EmbeddedPlayer/album=3314172135/size=small/bgcol=333333/linkcol=4ec5ec/artwork=none/track=1045522155/transparent=true/" seamless><a href="http://pathos.bandcamp.com/album/rapture">Rapture by Pathos</a></iframe>
            </div>

            &nbsp;

            <Row>
                <Col xs="7" className="Release-left Release-lyric">
                    Our dreams are solid as rock
                    <br/>Even though they look like foolish ones
                    <br/>Look into my eyes and see
                    <br/>There is so much more for us to be
                    <br/>
                    <br/>I think we should get going
                    <br/>and get out of this scary place
                    <br/>At first, it looked like heaven
                    <br/>But now I see the fear stamped in your face
                    <br/>
                    <br/>Forget about the sentry carrying the sword
                    <br/>We’ll find a place so we can call home
                    <br/>It doesn&apos;t seem but this is a big world
                    <br/>and you made it livable for all of us
                    <br/>
                    <br/>I don’t sleep with angels
                    <br/>Sure they can read my thoughts
                    <br/>They&apos;ll find about my dreams
                    <br/>and I don&apos;t dream with gods
                    <br/>
                    <br/>I don&apos;t sleep with angels
                    <br/>Sure they can read my thoughts
                    <br/>I need to follow my dreams
                    <br/>and I don&apos;t dream with gods
                </Col>

                <Col xs="5" className="Release-right">
                    <div className="Release-track-credits">
                        { t("bx") } Lucas Guida
                        <br/>{ t("batera") } Hugo Moutinho
                        <br/>{ t("conc") } JP Vieira e Lucas Guida
                        <br/>{ t("gtr") } Ricardo Marlière
                        <br/>{ t("txt") } JP Vieira
                        <br/>{ t("perc") } Álvaro Moutinho
                        <br/>{ t("rhodes") } Luiz Andrès
                        <br/>{ t("vox") } JP Vieira
                        <br/>{ t("back") } Hugo Moutinho
                        <br/>{ t("org") } Luiz Andrès
                    </div>

                    <div className="Release-quote">
                    </div>
                </Col>

            </Row>
        </div>
    );
};

Gods.propTypes =
{
    t: PropTypes.func.isRequired
};

export default withTranslation()(Gods);

