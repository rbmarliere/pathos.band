import React from "react";
import App from "../components/App";
import Gallery from "../components/Gallery";
import {
    Col,
    Row
} from "reactstrap";

import "../assets/css/Release.css";

// tracks
import Portal from "../components/tracks/elixir/Portal";
import AHauntedVision from "../components/tracks/elixir/AHauntedVision";
import Sophie from "../components/tracks/elixir/Sophie";
import TheGod from "../components/tracks/elixir/TheGod";
import Ankh from "../components/tracks/elixir/Ankh";
import TheWanderer from "../components/tracks/elixir/TheWanderer";
import Sequel from "../components/tracks/elixir/Sequel";

// pictures
import p1 from "../assets/image/elixir/01.png";
import p2 from "../assets/image/elixir/02.png";
import p3 from "../assets/image/elixir/03.png";
import p4 from "../assets/image/elixir/04.png";
import p5 from "../assets/image/elixir/05.png";
import p6 from "../assets/image/elixir/06.png";
import p7 from "../assets/image/elixir/07.png";
import p8 from "../assets/image/elixir/08.png";
import p9 from "../assets/image/elixir/09.png";
import p10 from "../assets/image/elixir/10.png";
import p11 from "../assets/image/elixir/11.png";
import p12 from "../assets/image/elixir/12.png";
import p13 from "../assets/image/elixir/13.png";
import p14 from "../assets/image/elixir/14.png";
import p15 from "../assets/image/elixir/15.png";
import p16 from "../assets/image/elixir/16.png";
import p17 from "../assets/image/elixir/17.png";
import p18 from "../assets/image/elixir/18.png";
const artwork = [{ src: p1, width: 1, height: 1 }];
const photos = [
    { src: p2, width: 12, height: 11 },
    { src: p1, width: 12, height: 11 },
    { src: p3, width: 12, height: 11 },
    { src: p4, width: 12, height: 11 },
    { src: p5, width: 12, height: 11 },
    { src: p6, width: 12, height: 9 },
    { src: p7, width: 9, height: 12 },
    { src: p8, width: 12, height: 9 },
    { src: p9, width: 9, height: 12 },
    { src: p10, width: 12, height: 9 },
    { src: p11, width: 9, height: 12 },
    { src: p12, width: 12, height: 9 },
    { src: p13, width: 12, height: 9 },
    { src: p14, width: 9, height: 12 },
    { src: p15, width: 12, height: 9 },
    { src: p16, width: 9, height: 12 },
    { src: p17, width: 12, height: 9 },
    { src: p18, width: 12, height: 10 }
];

const Elixir = () =>
{
    return (
        <App>
            <div className="Release">
                <div className="Release-cover">
                    <Gallery photos={ artwork } direction={ "column" } />
                </div>

                &nbsp;

                <div className="Release-title">
                    Elixir
                </div>

                <hr/>

                <Row>
                    <Col className="Release-just">
                        <p>
                            &quot;Peso, distorção, arrojo, apropriação da tradição, tudo na medida certa. FODA-SE quem acha que estamos vivendo momentos de ressaca ou pobreza em nossa música! SAPORRA diz tudo! Essa música resume tudo o que várias outras bandas vem buscando dentro do cenário nacional.&quot;
                        </p>
                        <a href="http://oganpazan.com.br/elixir-2015-pathos/">Danilo Cruz</a>
                        <br/><br/>

                        <p>
                            &quot;Elixir by Pathos more than just riff rock; it has to be called progressive stoner rock. (...) This needs some college music major to do it justice. Somehow calling this “killer” just isn’t enough.&quot;
                        </p>
                        <a href="http://doomedandstoned.com/post/126164534683/papapaulsgroovyreviews">Papa Paul</a>
                        <br/><br/>

                        <p>
                            &quot;Elixir is, on the whole, a stunning album full of little twists and turns that&apos;ll have you discovering something new in its grooves every time you play it.&quot;
                        </p>
                        <a href="http://stonerking1.blogspot.com.br/2015/08/pathos-elixir-brazil-prog-stoners-debut.html">FDJ</a>
                    </Col>
                </Row>

                <hr/>
                <Row>
                    <Col className="Release-credits">
                        Lançado no dia 6 de Agosto de 2015
                        <br/>
                        <br/>Gravado ao vivo no Estúdio Verde na cidade de Belo Horizonte nos dias 21 e 22 de Fevereiro de 2015
                        <br/>Engenheiro de áudio: Arthur Damásio
                        <br/>
                        <br/>Gravações de flauta feitas no Estúdio Immaginaria em Juiz de Fora no dia 2 de Julho de 2015
                        <br/>Engenheiro de áudio: Vinícius Faza
                        <br/>
                        <br/>Mixado por Arthur Damásio
                        <br/>Masterizado por César Santos
                        <br/>
                        <br/>Produção musical por Arthur Damásio e Pathos
                        <br/>Produtor executivo: Ricardo Marlière
                        <br/>
                        <br/>Arte por Herman Faulstich
                        <br/>
                        <br/>Todas as músicas por Pathos
                    </Col>
                </Row>

                <hr/>
                <Portal/>
                <hr/>
                <AHauntedVision/>
                <hr/>
                <Sophie/>
                <hr/>
                <TheGod/>
                <hr/>
                <Ankh/>
                <hr/>
                <TheWanderer/>
                <hr/>
                <Sequel/>

                &nbsp;

                <hr/>

                <Gallery photos={ photos } />

            </div>
        </App>
    );
};

export default Elixir;

