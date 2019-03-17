import React from "react";
import {
    Col,
    Row
} from "reactstrap";

const EOS = () =>
{
    return (
        <div className="Release-tracks">
            <div className="Release-track-title">
                <span className="Release-eos-trees"> Z </span>
                End of Spring
                <span className="Release-eos-trees"> c </span>
            </div>

            &nbsp;

            <div className="Release-player">
                <iframe title="EOS" className="Release-bcplayer" src="https://bandcamp.com/EmbeddedPlayer/album=3314172135/size=small/bgcol=333333/linkcol=4ec5ec/artwork=none/track=338242932/transparent=true/" seamless><a href="http://pathos.bandcamp.com/album/rapture">Rapture by Pathos</a></iframe>
            </div>

            &nbsp;

            <Row>
                <Col xs="5" className="Release-left">
                    <div className="Release-track-credits">
                        Baixo por Lucas Guida
                        <br/>Bateria por Hugo Moutinho
                        <br/>Concebida por Ricardo Marlière
                        <br/>Guitarra elétrica por Ricardo Marlière
                        <br/>Letra de Ricardo Marlière e JP Vieira
                        <br/>Mellotron por Luiz Andrès
                        <br/>Percussão por Álvaro Moutinho
                        <br/>Piano elétrico por Luiz Andrès
                        <br/>Sintetizadores por Luiz Andrès
                        <br/>Voz de JP Vieira
                        <br/>Vozes de apoio de Hugo Moutinho e Ricardo Marlière
                        <br/>Órgão por Luiz Andrès
                    </div>

                    <div className="Release-quote">
                    </div>
                </Col>

                <Col xs="7" className="Release-right Release-lyric">
                    Let’s just stare at the firmament
                    <br/>I swear it won&apos;t take too long
                    <br/>We had already left a lot behind
                    <br/>You may look back but now it&apos;s done
                    <br/>
                    <br/>You should stand up and see for yourself
                    <br/>For there is so much beyond
                    <br/>Infinite gardens with ground frost
                    <br/>With flames in waves around the shore
                    <br/>That comes and goes and takes away your skin and bones
                    <br/>
                    <br/>We could dream of clouds up above
                    <br/>Only to wake among the grass roots
                    <br/>Lying down where the willow rests
                    <br/>Yet still smelling all the fresh fruits
                    <br/>The red sweet taste that fills the air
                    <br/>
                    <br/>Let us start to build this glorious view
                    <br/>I swear it won’t take too long
                    <br/>We had just opened the road to go
                    <br/>So watch your step as we get there
                    <br/>
                    <br/>The spring shall end again
                    <br/>The summer will be long

                </Col>
            </Row>
        </div>
    );
};

export default EOS;

