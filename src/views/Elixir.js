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
import p0 from "../assets/image/elixir/artwork02.png";
import p1 from "../assets/image/elixir/01.jpg";
import p2 from "../assets/image/elixir/02.jpg";
import p3 from "../assets/image/elixir/artwork03.png";
import p4 from "../assets/image/elixir/artwork04.png";
const artwork = [{ src: p0, width: 1, height: 1 }];
const photos = [
    {
        src: p1,
        width: 12,
        height: 9
    },
    {
        src: p2,
        width: 12,
        height: 11
    },
    {
        src: p3,
        width: 12,
        height: 11
    },
    {
        src: p4,
        width: 12,
        height: 11
    }
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
                    <div className="Release-credits">
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
                    </div>
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

