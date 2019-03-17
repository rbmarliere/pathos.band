import React from "react";
import {
    Col,
    Row
} from "reactstrap";

const Sophie = () =>
{
    return (
        <div className="Release-tracks">
            <div className="Release-track-title">
                Sophie
            </div>

            &nbsp;

            <div className="Release-player">
                <iframe title="Sophie" className="Release-bcplayer" src="https://bandcamp.com/EmbeddedPlayer/album=1092530120/size=small/bgcol=333333/linkcol=4ec5ec/artwork=none/track=3413870151/transparent=true/" seamless><a href="http://pathos.bandcamp.com/album/elixir">Elixir by Pathos</a></iframe>
            </div>

            &nbsp;

            <Row>
                <Col className="Release-left">
                    <div className="Release-track-credits">
                        Baixo por Lucas Guida
                        <br/>Bateria por Hugo Moutinho
                        <br/>Flauta por Gabriel Vaz Duque
                        <br/>Guitarra elétrica por Ricardo Marlière
                        <br/>Letra de JP Vieira e Ricardo Marlière
                        <br/>Percussão por Gustavo Campos
                        <br/>Violão por Ricardo Marlière
                        <br/>Voz de apoio de Hugo Moutinho
                        <br/>Voz de JP Vieira
                        <br/>Órgão por Arthur Damásio
                    </div>

                    <div className="Release-quote">
                    </div>
                </Col>

                <Col className="Release-right Release-lyric">
                    The fear was blinding his eyes
                    <br/>A mist he was seeing
                    <br/>In a swamp of lies
                    <br/>That people said bleeding
                    <br/>
                    <br/>Beyond the mist he saw
                    <br/>A bonfire shining bright
                    <br/>The book of rules and laws
                    <br/>Irradiating light
                    <br/>
                    <br/>He knew by her side there would be no pride
                    <br/>In the end there is no more place to hide
                    <br/>As he is torn apart by the tears he cried
                    <br/>The child will born and the man will die
                    <br/>
                    <br/>Child of the Silver Star, remember who you are
                    <br/>I’m crying for you, under the light of the moon
                    <br/>A pray to your dad, the sun, the fire red
                    <br/>The horns in your head are there to guide the dead
                    <br/>See happiness in doom, the dark is good to you
                    <br/>Remember who you are, child of the Silver Star
                </Col>
            </Row>
        </div>
    );
};

export default Sophie;

