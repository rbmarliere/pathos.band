import React from "react";
import { withTranslation } from "react-i18next";
import PropTypes from "prop-types";
import {
    Col,
    Row
} from "reactstrap";

const Rapture = ({ t }) =>
{
    return (
        <div className="Release-tracks">
            <div className="Release-track-title">
                Rapture
            </div>

            &nbsp;

            <div className="Release-player">
                <iframe title="Rapture" className="Release-bcplayer" src="https://bandcamp.com/EmbeddedPlayer/album=3314172135/size=small/bgcol=333333/linkcol=4ec5ec/artwork=none/track=112071643/transparent=true/" seamless><a target="_tab" href="http://pathos.bandcamp.com/album/rapture">Rapture by Pathos</a></iframe>
            </div>

            &nbsp;

            <Row>
                <Col md="7" xs="12" className="Release-right Release-lyric">
                    Feeling the breeze purging all your beliefs
                    <br/>I’m glad to see you finally turned off that screen
                    <br/>Now let me tell you gotta move on or freeze
                    <br/>After finding out what moving on means
                    <br/>
                    <br/>Oh man, if you could only see the unseen
                    <br/>The smokeless lamp of your conscious being
                    <br/>You scorched the surface and now you face your djinn
                    <br/>
                    <br/>With wide far mind
                    <br/>After a great music night
                    <br/>
                    <br/>I can’t feel my legs
                    <br/>I can’t find my eyes
                    <br/>My lungs are long gone
                    <br/>You healed me inside
                    <br/>Kissed your paper lips
                    <br/>Loved you all night long
                    <br/>My skull is now open
                    <br/>With a hole in the bone
                    <br/>With a hole in the bone
                    <br/>It’s where the smoke comes from
                    <br/>
                    <div className="Release-quote">
                        <br/>&quot;Do not come any closer
                        <br/>Take off your shoes
                        <br/>For the place where you’re standing is holy ground&quot;
                        <br/><a target="_tab" href={ t("shoes") }>{ t("holy") }</a>
                    </div>
                    <br/>Stay a while, you know how it goes
                    <br/>Could tell you about so many great things
                    <br/>But I can’t help if you are your biggest foe
                    <br/>
                    <br/>People look me like I’m insane
                    <br/>Like I’m kind of a disgrace
                    <br/>They never thought beyond of this:
                    <br/>“He’s running towards the death kiss!”
                    <br/>
                    <div className="Release-quote">
                        <br/>Cause I drink by the eight and ninety
                        <br/>Rules of art, they are my specialty
                        <br/>and I make love exceeding by delicacy
                        <br/><a target="_tab" href="http://lib.oto-usa.org/libri/liber0031.html?num=41">AL</a>
                    </div>
                    <br/>Still, I don’t sink!
                </Col>

                <Col md="5" className="Release-left">
                    <div className="Release-track-credits">
                        { t("bx") } Lucas Guida
                        <br/>{ t("batera") } Hugo Moutinho
                        <br/>{ t("conc") } Ricardo Marlière
                        <br/>{ t("gtr") } Ricardo Marlière
                        <br/>{ t("txt") } Ricardo Marlière { t("and") } JP Vieira
                        <br/>{ t("perc") } Álvaro Moutinho
                        <br/>{ t("rhodes") } Luiz Andrès
                        <br/>{ t("sax") } Caetano Brasil
                        <br/>{ t("violao") } Ricardo Marlière
                        <br/>{ t("nylon") } Luiz Andrès
                        <br/>{ t("vox") } JP Vieira
                        <br/>{ t("back") } Lorena Fernandes
                        <br/>{ t("org") } Luiz Andrès
                    </div>

                    <div className="Release-quote">
                    </div>
                </Col>

            </Row>
        </div>
    );
};

Rapture.propTypes =
{
    t: PropTypes.func.isRequired
};

export default withTranslation()(Rapture);

