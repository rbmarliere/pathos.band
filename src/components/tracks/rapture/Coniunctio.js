import React from "react";
import {
    Col,
    Row
} from "reactstrap";

const Coniunctio = () =>
{
    return (
        <div className="Release-tracks">
            <div className="Release-track-title Release-coniunctio">
                Coniunctio
            </div>

            &nbsp;

            <div className="Release-player">
                <iframe title="Coniunctio" className="Release-bcplayer" src="https://bandcamp.com/EmbeddedPlayer/album=3314172135/size=small/bgcol=333333/linkcol=4ec5ec/artwork=none/track=1116546309/transparent=true/" seamless><a href="http://pathos.bandcamp.com/album/rapture">Rapture by Pathos</a></iframe>
            </div>

            &nbsp;

            <Row>
                <Col xs="5" className="Release-left">
                    <div className="Release-track-credits">
                        Baixo por Lucas Guida
                        <br/>Bateria por Hugo Moutinho
                        <br/>Concebida por Hugo Moutinho
                        <br/>Guitarra elétrica por Ricardo Marlière
                        <br/>Letra de JP Vieira
                        <br/>Percussão por Álvaro Moutinho
                        <br/>Piano elétrico por Luiz Andrès
                        <br/>Violão de 12 por Arthur Damásio
                        <br/>Violão de nylon por Luiz Andrès
                        <br/>Voz de JP Vieira
                        <br/>Vozes de apoio de Lorena Fernandes e Pathos
                        <br/>Órgão por Luiz Andrès
                    </div>
                </Col>

                <Col xs="7" className="Release-right Release-lyric">
                    Sou
                    <br/>Erupção
                    <br/>Sou o magma e o vulcão
                    <br/>Quente e frio, cheia e vazio
                    <br/>Condenando à devastação
                    <br/>
                    <br/>Soul
                    <br/>Bending inside
                    <br/>Life&apos;s dripping out of my mind
                    <br/>Hot and cold, empty and full
                    <br/>Common process to naturalize
                    <br/>
                    <br/>Sal
                    <br/>Da terra e do mar
                    <br/>Água pra se embebedar
                    <br/>Doce e salgada, seco e molhada
                    <br/>Insípida e escasso, à luz do luar
                    <br/>
                    <br/>Down
                    <br/>Into my grave
                    <br/>Rearranging to be brave
                    <br/>Dry and wet, sweet and sweat
                    <br/>I will be reborn but not as a slave
                    <br/>
                    <div className="Release-quote">
                        <br/>&quot;Sapiens sicut sol permanet, stultus autem sicut luna mutatur&quot;
                        <br/><a href="https://www.bibliacatolica.com.br/biblia-ave-maria/eclesiastico/27/12/">Eclesiástico</a>
                        <br/>&quot;Pulchra ut luna, electa ut sol&quot;
                        <br/><a href="https://pt.wikipedia.org/wiki/Aurora_Consurgens_(livro)">Aurora Consurgens</a>
                    </div>
                    <br/>We swam so much
                    <br/>To die on the shore
                    <br/>This can’t be our end
                    <br/>
                    <br/>Nada é mais o mesmo
                    <br/>Mas ainda é igual
                    <br/>Seremos um outra vez

                </Col>
            </Row>
        </div>
    );
};

export default Coniunctio;

