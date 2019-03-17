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

            <div className="Release-player">
                <iframe title="TheWanderer" className="Release-bcplayer" src="https://bandcamp.com/EmbeddedPlayer/album=1092530120/size=small/bgcol=333333/linkcol=4ec5ec/artwork=none/track=2537536381/transparent=true/" seamless><a href="http://pathos.bandcamp.com/album/elixir">Elixir by Pathos</a></iframe>
            </div>

            &nbsp;

            <Row>
                <Col className="Release-left">
                    He is no doubt a man
                    <br/>But to another realm he belongs
                    <br/>From a cold distant mountain he comes
                    <br/>Wandering alone
                    <br/>
                    <br/>A big black steed he rides and his step sounds like hell
                    <br/>His light will prevail
                    <br/>Bearing profane symbols he banes spirits and spells
                    <br/>He doesn’t know what to seek
                    <br/>
                    <br/>Gold, wine, glory, wisdom, power, happiness
                    <br/>or the one great Truth beyond this ocean of chaos
                    <br/>
                    <br/>He can read the stars
                    <br/>He can see the future
                    <br/>He can talk to the wind’s nature
                    <br/>Speaking ancient tongues
                    <br/>
                    <br/>He wields the hell flaming steel
                    <br/>Blessed in the fire of battle
                    <br/>Whose scarlet soaked wire
                    <br/>Makes him a restless servant of death
                </Col>

                <Col className="Release-right">
                    <div className="Release-track-credits">
                        Baixo por Lucas Guida
                        <br/>Bateria por Hugo Moutinho
                        <br/>Guitarra elétrica por Ricardo Marlière
                        <br/>Letra por Herman Faulstich e Ricardo Marlière
                        <br/>Percussão por Gustavo Campos
                        <br/>Piano por Arthur Damásio
                        <br/>Voz de Apoio de Hugo Moutinho
                        <br/>Voz de JP Vieira
                    </div>

                    <div className="Release-quote">
                    </div>
                </Col>

            </Row>
        </div>
    );
};

export default TheWanderer;

