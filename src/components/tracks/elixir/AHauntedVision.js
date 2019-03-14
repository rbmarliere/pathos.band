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
                A Haunted Vision
            </div>

            &nbsp;

            <div className="Release-player">
                <iframe title="A Haunted Vision" className="Release-bcplayer" src="https://bandcamp.com/EmbeddedPlayer/album=1092530120/size=small/bgcol=333333/linkcol=4ec5ec/artwork=none/track=1803528116/transparent=true/" seamless><a href="http://pathos.bandcamp.com/album/elixir">Elixir by Pathos</a></iframe>
            </div>

            &nbsp;

            <Row>
                <Col className="Release-left">
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
                    Baixo por Lucas Guida
                    <br/>Bateria por Hugo Moutinho
                    <br/>Guitarra elétrica por Ricardo Marlière
                    <br/>Letra por JP Vieira
                    <br/>Percussão por Gustavo Campos
                    <br/>Voz de JP Vieira
                </Col>
            </Row>
        </div>
    );
};

export default Portal;

