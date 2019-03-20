import React from "react";
import { withTranslation } from "react-i18next";
import PropTypes from "prop-types";
import {
    Col,
    Row
} from "reactstrap";

const TheGod = ({ t }) =>
{
    return (
        <div className="Release-tracks">
            <div className="Release-track-title">
                The God
            </div>

            &nbsp;

            <div className="Release-player">
                <iframe title="TheGod" className="Release-bcplayer" src="https://bandcamp.com/EmbeddedPlayer/album=1092530120/size=small/bgcol=333333/linkcol=4ec5ec/artwork=none/track=2863622390/transparent=true/" seamless><a target="_tab" href="http://pathos.bandcamp.com/album/elixir">Elixir by Pathos</a></iframe>
            </div>

            &nbsp;

            <Row>
                <Col md="7" xs="12" className="Release-right Release-lyric">
                    <div className="Release-track-credits">
                        { t("bx") } Lucas Guida
                        <br/>{ t("batera") } Hugo Moutinho
                        <br/>{ t("gtr") } Ricardo Marlière
                        <br/>{ t("txt") } Ricardo Marlière
                        <br/>{ t("perc") } Gustavo Campos
                        <br/>{ t("vox") } JP Vieira
                        <br/>{ t("back") } Hugo Moutinho
                        <br/>{ t("synth") } Arthur Damásio
                    </div>

                    <div className="Release-quote">
                    </div>
                </Col>

                <Col md="5" className="Release-left">
                    <i>Act I – The Father</i>
                    <br/>So you are about to be born
                    <br/>My son, this shall be all yours one day
                    <br/>Rest tight until then
                    <br/>Then you’ll hear my voice in your heart
                    <br/>In dragon cold flames you’re burning and now you explode
                    <br/>
                    <br/><i>Act II – The Son</i>
                    <br/>Listen father, for I have not sinned
                    <br/>Yet your voice is all that I dream of
                    <br/>Yes, I believe that I can fly
                    <br/>Look at me, how beautiful am I?
                    <br/>
                    <br/><i>Act III – The Hanged Man</i>
                    <div className="Release-quote">
                        &quot;My father, why hast thou forsaken me?&quot;
                        <br/><a target="_tab" href={ t("mattlink") }>{ t("matt") }</a>
                    </div>
                    Look who is here
                    <br/>Hanging out cold
                    <br/>What does he got in his pocket?
                    <br/>He looks so familiar
                    <br/>You know, he could be me
                </Col>

            </Row>
        </div>
    );
};

TheGod.propTypes =
{
    t: PropTypes.func.isRequired
};

export default withTranslation()(TheGod);

