import React from "react";
import {
    Col,
    Row
} from "reactstrap";

const Sequel = () =>
{
    return (
        <div className="Release-tracks">
            <div className="Release-title">
                Sequel
            </div>

            &nbsp;

            <iframe title="Sequel" className="Release-player" src="https://bandcamp.com/EmbeddedPlayer/album=1092530120/size=small/bgcol=333333/linkcol=4ec5ec/artwork=none/track=2950109927/transparent=true/" seamless><a href="http://pathos.bandcamp.com/album/elixir">Elixir by Pathos</a></iframe>

            &nbsp;

            <Row>
                <Col className="Release-left">
                    As desolation rips the land apart
                    <br/>and the air is filled with sorrow
                    <br/>He fits the entire universe as one
                    <br/>Finding joy in his suffering
                    <br/>Standing right by the gates
                    <br/>of the most glorious and ancient city
                    <br/>There goes Nobody
                </Col>

                <Col className="Release-right">
                    Baixo por Lucas Guida
                    <br/>Bateria por Hugo Moutinho
                    <br/>Guitarra elétrica por Ricardo Marlière
                    <br/>Letra por Ricardo Marlière
                    <br/>Percussão por Gustavo Campos
                    <br/>Trompete por Wanger Souza
                    <br/>Voz de JP Vieira
                </Col>
            </Row>
        </div>
    );
};

export default Sequel;

