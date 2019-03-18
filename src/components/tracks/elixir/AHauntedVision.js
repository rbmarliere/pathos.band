import React from "react";
import { withTranslation } from "react-i18next";
import PropTypes from "prop-types";
import {
    Col,
    Row
} from "reactstrap";

const AHauntedVision = ({ t }) =>
{
    return (
        <div className="Release-tracks">
            <div className="Release-track-title">
                A Haunted Vision
            </div>

            &nbsp;

            <div className="Release-player">
                <iframe title="A Haunted Vision" className="Release-bcplayer" src="https://bandcamp.com/EmbeddedPlayer/album=1092530120/size=small/bgcol=333333/linkcol=4ec5ec/artwork=none/track=1803528116/transparent=true/" seamless><a target="_tab" href="http://pathos.bandcamp.com/album/elixir">Elixir by Pathos</a></iframe>
            </div>

            &nbsp;

            <Row>
                <Col className="Release-left Release-lyric">
                    Do you wanna climb a long stair?
                    <br/>Glory and fame it&apos;s up there
                    <br/>Step by step you&apos;ll have to go
                    <br/>and down here you leave your soul
                    <br/>
                    <br/>You can&apos;t fear what&apos;s in the way
                    <br/>What will you see? I can&apos;t say
                    <br/>This stair is different to each one
                    <br/>Who climbs it up don&apos;t return
                    <br/>
                    <br/>As you can see, this ladder is so steep
                    <br/>You&apos;re not blind, go and try to find
                    <br/>a mean to your soul! Now you have to go
                    <br/>Now you have to go, now you got to go!
                    <br/>
                    <br/>Don&apos;t be afraid, start your climb
                    <br/>As soon as you leave, you&apos;ll arrive
                    <br/>Tell goodbye to your family and friends
                    <br/>Maybe you won&apos;t see them never again
                </Col>

                <Col className="Release-right">
                    <div className="Release-track-credits">
                        { t("bx") } Lucas Guida
                        <br/>{ t("batera") } Hugo Moutinho
                        <br/>{ t("gtr") } Ricardo Marlière
                        <br/>{ t("txt") } JP Vieira
                        <br/>{ t("perc") } Gustavo Campos
                        <br/>{ t("rhodes") } Arthur Damásio
                        <br/>{ t("vox") } JP Vieira
                    </div>

                    <div className="Release-quote">
                    </div>
                </Col>

            </Row>
        </div>
    );
};

AHauntedVision.propTypes =
{
    t: PropTypes.func.isRequired
};

export default withTranslation()(AHauntedVision);

