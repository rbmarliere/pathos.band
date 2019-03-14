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
import cover from "../assets/image/elixir/artwork01.png";
import p1 from "../assets/image/elixir/01.jpg";
const photos = [
    {
        src: p1,
        width: 12,
        height: 9
    },
];

const Rapture = () =>
{
    return (
        <App>
            <div className="Release">
                <div className="Release-cover">
                    <img className="img-fluid" src={ cover } alt="Rapture" />
                </div>

                &nbsp;

                <div className="Release-title">
                    Rapture
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
                            <br/>Participações especiais e percussões gravadas no Estúdio em Juiz de Fora em Dez/2018 e Jan/2019.
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
