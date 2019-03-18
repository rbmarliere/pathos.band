import React from "react";
import { withTranslation } from "react-i18next";
import PropTypes from "prop-types";
import {
    Col,
    Row
} from "reactstrap";

const EOS = ({ t }) =>
{
    return (
        <div className="Release-tracks">
            <div className="Release-track-title">
                <span className="Release-eos-trees"> Z </span>
                End of Spring
                <span className="Release-eos-trees"> c </span>
            </div>

            &nbsp;

            <div className="Release-player">
                <iframe title="EOS" className="Release-bcplayer" src="https://bandcamp.com/EmbeddedPlayer/album=3314172135/size=small/bgcol=333333/linkcol=4ec5ec/artwork=none/track=338242932/transparent=true/" seamless><a target="_tab" href="http://pathos.bandcamp.com/album/rapture">Rapture by Pathos</a></iframe>
            </div>

            &nbsp;

            <Row>
                <Col xs="5" className="Release-left">
                    <div className="Release-track-credits">
                        { t("bx") } Lucas Guida
                        <br/>{ t("batera") } Hugo Moutinho
                        <br/>{ t("conc") } Ricardo Marlière
                        <br/>{ t("gtr") } Ricardo Marlière
                        <br/>{ t("txt") } Ricardo Marlière { t("and") } JP Vieira
                        <br/>{ t("mello") } Luiz Andrès
                        <br/>{ t("perc") } Álvaro Moutinho
                        <br/>{ t("rhodes") } Luiz Andrès
                        <br/>{ t("synth") } Luiz Andrès
                        <br/>{ t("vox") } JP Vieira
                        <br/>{ t("back") } Hugo Moutinho { t("and") } Ricardo Marlière
                        <br/>{ t("org") } Luiz Andrès
                    </div>

                    <div className="Release-quote">
                    </div>
                </Col>

                <Col xs="7" className="Release-right Release-lyric">
                    Let’s just stare at the firmament
                    <br/>I swear it won&apos;t take too long
                    <br/>We had already left a lot behind
                    <br/>You may look back but now it&apos;s done
                    <br/>
                    <br/>You should stand up and see for yourself
                    <br/>For there is so much beyond
                    <br/>Infinite gardens with ground frost
                    <br/>With flames in waves around the shore
                    <br/>That comes and goes and takes away your skin and bones
                    <br/>
                    <br/>We could dream of clouds up above
                    <br/>Only to wake among the grass roots
                    <br/>Lying down where the willow rests
                    <br/>Yet still smelling all the fresh fruits
                    <br/>The red sweet taste that fills the air
                    <br/>
                    <br/>Let us start to build this glorious view
                    <br/>I swear it won’t take too long
                    <br/>We had just opened the road to go
                    <br/>So watch your step as we get there
                    <br/>
                    <br/>The spring shall end again
                    <br/>The summer will be long

                </Col>
            </Row>
        </div>
    );
};

EOS.propTypes =
{
    t: PropTypes.func.isRequired
};

export default withTranslation()(EOS);

