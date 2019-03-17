import React from "react";
import {
    Col,
    Row
} from "reactstrap";

const Cartel = () =>
{
    return (
        <div className="Release-tracks">
            <div className="Release-cartel">
                Cartel
            </div>

            &nbsp;

            <div className="Release-player">
                <iframe title="Cartel" className="Release-bcplayer" src="https://bandcamp.com/EmbeddedPlayer/album=3314172135/size=small/bgcol=333333/linkcol=4ec5ec/artwork=none/track=2159531306/transparent=true/" seamless><a href="http://pathos.bandcamp.com/album/rapture">Rapture by Pathos</a></iframe>
            </div>

            &nbsp;

            <Row>
                <Col xs="7" className="Release-left Release-lyric">
                    <div className="Release-quote">
                        &quot;Now a federated, decentralized system of free associations, incorporating economic as well as social institutions, would be what I refer to as anarcho-syndicalism and it seems to me that it is the appropriate form of social organization for an advanced technological society in which human beings do not have to be forced into a position of tools, of cogs in a machine; in which the creative urge, that I think is intrinsic to human nature, will in fact be able to realize itself in whatever way it will, I don’t know all the ways in which it will.&quot;
                        <br/><a href="https://youtu.be/vq9irdLcZmU?t=265">Noam Chomsky</a>
                    </div>
                    <br/>Reckless will inside a sore mind
                    <br/>Hollow shell apart from mankind
                    <br/>Evil makers in deeds combined
                    <br/>Left or right, black and white
                    <br/>Endless game with rules defined
                    <br/>By the invisible hand since ancient times
                    <br/>
                    <br/>For generations being refined
                    <br/>A simple craft of special design
                    <br/>The heirloom that you&apos;ll never find
                    <br/>With sole purpose to misalign
                    <br/>To rig, to squeeze and to grind
                    <br/>Grow tired or you stay blind
                    <br/>
                    <br/>Wealth perceived, price derived
                    <br/>Wrecking vessel, floating tide
                    <br/>Forgotten past, stolen pride
                    <br/>Store of value, loss denied
                </Col>

                <Col xs="5" className="Release-right">
                    <div className="Release-track-credits">
                        Baixo por Lucas Guida
                        <br/>Bateria por Hugo Moutinho
                        <br/>Concebida por Ricardo Marlière
                        <br/>Fragmento de fala de Noam Chomsky
                        <br/>Guitarra elétrica por Ricardo Marlière
                        <br/>Letra de Ricardo Marlière
                        <br/>Percussão por Álvaro Moutinho
                        <br/>Piano elétrico por Luiz Andrès
                        <br/>Sintetizadores por Luiz Andrès
                        <br/>Violão de 12 por Luiz Andrès e Ricardo Marlière
                        <br/>Violão de aço por Ricardo Marlière
                        <br/>Voz de JP Vieira
                        <br/>Voz de apoio de Hugo Moutinho
                        <br/>Órgão por Luiz Andrès
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default Cartel;

