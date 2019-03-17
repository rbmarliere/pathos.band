import React from "react";
import App from "../components/App";
import Gallery from "../components/Gallery";
import {
    Col,
    Row
} from "reactstrap";

import "../assets/css/Release.css";

// tracks
import RaptureTrack from "../components/tracks/rapture/Rapture";
import Coniunctio from "../components/tracks/rapture/Coniunctio";
import Cartel from "../components/tracks/rapture/Cartel";
import Eve from "../components/tracks/rapture/Eve";
import Gods from "../components/tracks/rapture/Gods";
import EOS from "../components/tracks/rapture/EOS";

// pictures
import p1 from "../assets/image/elixir/01.png";
import p2 from "../assets/image/rapture/02.png";
import p3 from "../assets/image/rapture/03.png";
import p4 from "../assets/image/rapture/04.png";
import p5 from "../assets/image/rapture/05.png";
import p6 from "../assets/image/rapture/06.png";
import p7 from "../assets/image/rapture/07.png";
import p8 from "../assets/image/rapture/08.png";
import p9 from "../assets/image/rapture/09.png";
import p10 from "../assets/image/rapture/10.png";
import p11 from "../assets/image/rapture/11.png";
import p12 from "../assets/image/rapture/12.png";
import p13 from "../assets/image/rapture/13.png";
import p14 from "../assets/image/rapture/14.png";
import p15 from "../assets/image/rapture/15.png";
import p16 from "../assets/image/rapture/16.png";
import p17 from "../assets/image/rapture/17.png";
import p18 from "../assets/image/rapture/18.png";
const artwork = [{ src: p1, width: 1, height: 1 }];
const photos = [
    { src: p1, width: 12, height: 11 },
    { src: p2, width: 12, height: 9 },
    { src: p3, width: 12, height: 9 },
    { src: p4, width: 14, height: 11 },
    { src: p5, width: 12, height: 9 },
    { src: p6, width: 12, height: 9 },
    { src: p7, width: 12, height: 9 },
    { src: p8, width: 12, height: 9 },
    { src: p9, width: 12, height: 9 },
    { src: p10, width: 9, height: 12 },
    { src: p11, width: 12, height: 10 },
    { src: p12, width: 9, height: 12 },
    { src: p13, width: 12, height: 10 },
    { src: p14, width: 12, height: 9 },
    { src: p15, width: 9, height: 12 },
    { src: p16, width: 12, height: 9 },
    { src: p17, width: 12, height: 9 },
    { src: p18, width: 15, height: 9 }
];

const Rapture = () =>
{
    return (
        <App>
            <div className="Release">
                <div className="Release-cover">
                    <Gallery photos={ artwork } direction={ "column" } />
                </div>

                &nbsp;

                <div className="Release-title">
                    RAPTURE
                </div>

                <hr/>

                <Row>
                    {/*<Col className="Release-left">
                         <p> &quot&quot; </p> <a href="">author</a> <br/><br/>
                    </Col>*/}

                    <Col className="Release-right">
                        <div className="Release-credits">
                            Lançado no dia 20 de Março de 2019
                            <br/>
                            <br/>Gravado no Sonastério na cidade de Belo Horizonte nos dias 18 a 22 de Julho de 2018
                            <br/>Participações especiais no Moutinho&apos;s Estúdio em Juiz de Fora em Dez/2018 e Jan/2019
                            <br/>Engenheiro de áudio: Arthur Damásio
                            <br/>
                            <br/>Mixado por Arthur Damásio
                            <br/>Masterizado por Brendan Duffey
                            <br/>
                            <br/>Produção musical por Arthur Damásio e Pathos
                            <br/>Produtor executivo: Ricardo Marlière
                            <br/>
                            <br/>Arte por Herman Faulstich
                            <br/>
                            <br/>Todas as músicas por Pathos
                        </div>
                    </Col>
                </Row>

                <hr/>
                <RaptureTrack/>
                <hr/>
                <Coniunctio/>
                <hr/>
                <Cartel/>
                <hr/>
                <Eve/>
                <hr/>
                <Gods/>
                <hr/>
                <EOS/>

                &nbsp;

                <hr/>

                <Gallery photos={ photos } />

            </div>
        </App>
    );
};

export default Rapture;
