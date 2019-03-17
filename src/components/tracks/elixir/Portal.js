import React from "react";
import { withTranslation } from "react-i18next";
import PropTypes from "prop-types";
import {
    Col,
    Row
} from "reactstrap";

const Portal = ({ t }) =>
{
    return (
        <div className="Release-tracks">
            <div className="Release-track-title">
                Portal
            </div>

            &nbsp;

            <div className="Release-player">
                <iframe title="Portal" className="Release-bcplayer" src="https://bandcamp.com/EmbeddedPlayer/album=1092530120/size=small/bgcol=333333/linkcol=4ec5ec/artwork=none/track=2386208430/transparent=true/" seamless><a href="http://pathos.bandcamp.com/album/elixir">Elixir by Pathos</a></iframe>
            </div>

            &nbsp;

            <Row>
                <Col className="Release-left">
                    <div className="Release-track-credits">
                        { t("bx") } Lucas Guida
                        <br/>{ t("batera") } Hugo Moutinho
                        <br/>{ t("gtr") } Ricardo Marlière
                        <br/>{ t("fla") } Gabriel Vaz Duque
                        <br/>{ t("perc") } Gustavo Campos
                    </div>
                </Col>

                <Col className="Release-right">
                    <div className="Release-quote">
                        &quot;Nada conheça! Todos os caminhos são da inocência. A pura loucura é a chave da iniciação. Silêncio quebra na raptura.&quot;
                        <br/>O Livro de Thoth
                    </div>
                </Col>
            </Row>
        </div>
    );
};

Portal.propTypes =
{
    t: PropTypes.func.isRequired
};

export default withTranslation()(Portal);

