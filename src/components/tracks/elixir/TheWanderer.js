import React from "react";
import {
    Col,
    Row
} from "reactstrap";

const TheWanderer = () =>
{
    return (
        <div className="Release-tracks">
            <div className="Release-title">
                The Wanderer
            </div>

            &nbsp;

            <iframe title="TheWanderer" className="Release-player" src="https://bandcamp.com/EmbeddedPlayer/album=1092530120/size=small/bgcol=333333/linkcol=4ec5ec/artwork=none/track=2537536381/transparent=true/" seamless><a href="http://pathos.bandcamp.com/album/elixir">Elixir by Pathos</a></iframe>

            &nbsp;

            <Row>
                <Col className="Release-left">
                    Baixo por Lucas Guida
                    <br/>Bateria por Hugo Moutinho
                    <br/>Guitarra elétrica por Ricardo Marlière
                    <br/>Letra por Herman Faulstich e Ricardo Marlière
                    <br/>Percussão por Gustavo Campos
                    <br/>Piano por Arthur Damásio
                    <br/>Voz de Apoio de Hugo Moutinho
                    <br/>Voz de JP Vieira
                </Col>

                <Col className="Release-right">
                    He is no doubt a man
                    But to another realm he belongs
                    From a cold distant mountain he comes
                    Wandering alone

                    A big black steed he rides and his step sounds like hell
                    His light will prevail
                    Bearing profane symbols he banes spirits and spells
                    He doesn’t know what to seek

                    Gold, wine, glory, wisdom, power, happiness
                    or the one great Truth beyond this ocean of chaos

                    He can read the stars
                    He can see the future
                    He can talk to the wind’s nature
                    Speaking ancient tongues

                    He wields the hell flaming steel
                    Blessed in the fire of battle
                    Whose scarlet soaked wire
                    Makes him a restless servant of death

                </Col>
            </Row>
        </div>
    );
};

export default TheWanderer;

