import React from "react";
import {
    Col,
    Row
} from "reactstrap";

const TheGod = () =>
{
    return (
        <div className="Release-tracks">
            <div className="Release-title">
                The God
            </div>

            &nbsp;

            <div className="Release-player">
                <iframe title="TheGod" className="Release-bcplayer" src="https://bandcamp.com/EmbeddedPlayer/album=1092530120/size=small/bgcol=333333/linkcol=4ec5ec/artwork=none/track=2863622390/transparent=true/" seamless><a href="http://pathos.bandcamp.com/album/elixir">Elixir by Pathos</a></iframe>
            </div>

            &nbsp;

            <Row>
                <Col className="Release-left">
                    act I – The Father
                    <br/>So you are about to be born
                    <br/>My son, this shall be all yours one day
                    <br/>Rest tight until then
                    <br/>Then you’ll hear my voice in your heart
                    <br/>In dragon cold flames you’re burning and now you explode
                    <br/>
                    <br/>act II – The Son
                    <br/>Listen father, for I have not sinned
                    <br/>Yet your voice is all that I dream of
                    <br/>Yes, I believe that I can fly
                    <br/>Look at me, how beautiful am I?
                    <br/>
                    <br/>act III – The Hanged Man
                    <br/>My father, why hast thou forsaken me?
                    <br/>Look who is here
                    <br/>Hanging out cold
                    <br/>What does he got in his pocket?
                    <br/>He looks so familiar
                    <br/>You know, he could be me
                </Col>

                <Col className="Release-right">
                    <div className="Release-track-credits">
                        Baixo por Lucas Guida
                        <br/>Bateria por Hugo Moutinho
                        <br/>Guitarra elétrica por Ricardo Marlière
                        <br/>Letra por Ricardo Marlière
                        <br/>Percussão por Gustavo Campos
                        <br/>Voz de JP Vieira
                        <br/>Voz de apoio de Hugo Moutinho
                        <br/>Sintetizador por Arthur Damásio
                    </div>

                    <div className="Release-quote">
                    </div>
                </Col>

            </Row>
        </div>
    );
};

export default TheGod;

