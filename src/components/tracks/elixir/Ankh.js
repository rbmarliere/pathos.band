import React from "react";
import { withTranslation } from "react-i18next";
import PropTypes from "prop-types";
import {
    Col,
    Row
} from "reactstrap";

const Ankh = ({ t }) =>
{
    return (
        <div className="Release-tracks">
            <div className="Release-track-title">
                Ankh
            </div>

            &nbsp;

            <div className="Release-player">
                <iframe title="Ankh" className="Release-bcplayer" src="https://bandcamp.com/EmbeddedPlayer/album=1092530120/size=small/bgcol=333333/linkcol=4ec5ec/artwork=none/track=3764892873/transparent=true/" seamless><a href="http://pathos.bandcamp.com/album/elixir">Elixir by Pathos</a></iframe>
            </div>

            &nbsp;

            <Row>
                <Col className="Release-left">
                    <div className="Release-track-credits">
                        { t("bx") } Lucas Guida
                        <br/>{ t("batera") } Hugo Moutinho
                        <br/>{ t("gtr") } Ricardo Marlière
                        <br/>{ t("txt") } Ricardo Marlière
                        <br/>{ t("mello") } Arthur Damásio
                        <br/>{ t("vox") } JP Vieira
                        <br/>{ t("back") } Hugo Moutinho
                    </div>

                    <div className="Release-quote">
                    </div>
                </Col>

                <Col className="Release-right Release-lyric">
                    In this world I was born
                    <br/>Spitted in fire
                    <br/>Through my birth in death
                    <br/>I have emerged
                    <br/>and now I’m alive
                    <br/>
                    <br/>With my golden armor
                    <br/>Smoky spear in my hand
                    <br/>I’ll be going to war
                    <br/>Towards your faith
                    <br/>To rip your flesh from inside
                    <br/>
                    <br/>Take my blinding light
                    <br/>Eat and drink it or leave
                    <br/>Then gain my trembling strength
                    <br/>Go on now and
                    <br/>Try to do it again
                    <br/>
                    <br/>I have a hunger for fear
                    <br/>Show me where does it hide
                    <br/>I will strike with my sword
                    <br/>Shining with blood
                    <br/>Since there is no god where I am
                    <br/>Where am I?
                    <br/>
                    <br/>In a moment in eternity I saw a tear
                    <br/>Rolling down your face
                    <br/>You seem so distant to me yet standing so near
                    <br/>Oh, my dear
                    <br/>I wish we could be one again
                    <br/>I will hit you hard to see
                    <br/>If you can take my heart along with you
                    <br/>
                    <br/>I am not allowed to die
                    <br/>I always change, I will born again
                    <br/>Infinite force I have within
                    <br/>In flames so high I’m burning inside
                    <br/>
                    <br/>I will keep it up
                    <br/>I will keep it low
                    <br/>Try to keep on living
                    <br/>There is no other way
                    <br/>Keep on loving
                </Col>

            </Row>
        </div>
    );
};

Ankh.propTypes =
{
    t: PropTypes.func.isRequired
};

export default withTranslation()(Ankh);

