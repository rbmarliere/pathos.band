import React from "react";
import {
    Col,
    Row
} from "reactstrap";

const Portal = () =>
{
    return (
        <div className="Release-tracks">
            <div className="Release-title">
                Portal
            </div>

            &nbsp;

            <div className="Release-player">
                <iframe title="Portal" className="Release-bcplayer" src="https://bandcamp.com/EmbeddedPlayer/album=1092530120/size=small/bgcol=333333/linkcol=4ec5ec/artwork=none/track=2386208430/transparent=true/" seamless><a href="http://pathos.bandcamp.com/album/elixir">Elixir by Pathos</a></iframe>
            </div>

            &nbsp;

            <Row>
                <Col className="Release-left">
                    Baixo por Lucas Guida
                    <br/>Bateria por Hugo Moutinho
                    <br/>Guitarra elétrica por Ricardo Marlière
                    <br/>Flauta por Gabriel Vaz Duque
                    <br/>Percussão por Gustavo Campos
                </Col>

                <Col className="Release-right">
                    &quot;Nada conheça! Todos os caminhos são da inocência. A pura loucura é a chave da iniciação. Silêncio quebra na raptura.&quot;
                    <br/>O Livro de Thoth
                </Col>
            </Row>
        </div>
    );
};

export default Portal;

