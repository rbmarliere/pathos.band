import React from "react";
import { withTranslation } from "react-i18next";
import PropTypes from "prop-types";
import {
    Col,
    Row
} from "reactstrap";

const Coniunctio = ({ t }) =>
{
    return (
        <div className="Release-tracks">
            <div className="Release-track-title Release-coniunctio">
                Coniunctio
            </div>

            <Row>
                <Col md="5" xs="12" className="Release-right">
                    <div className="Release-track-credits">
                        { t("bx") } Lucas Guida
                        <br/>{ t("batera") } Hugo Moutinho
                        <br/>{ t("conc") } Hugo Moutinho
                        <br/>{ t("gtr") } Ricardo Marlière
                        <br/>{ t("txt") } JP Vieira
                        <br/>{ t("perc") } Álvaro Moutinho
                        <br/>{ t("rhodes") } Luiz Andrès
                        <br/>{ t("v12") } Arthur Damásio
                        <br/>{ t("nylon") } Luiz Andrès
                        <br/>{ t("vox") } JP Vieira
                        <br/>{ t("back") } Lorena Fernandes { t("and") } Pathos
                        <br/>{ t("org") } Luiz Andrès
                    </div>
                </Col>

                <Col md="7" className="Release-left Release-lyric">
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
                        <br/><a target="_tab" href={ t("eccln") }>{ t("eccl") }</a>
                        <br/>&quot;Pulchra ut luna, electa ut sol&quot;
                        <br/><a target="_tab" href={ t("aurora") }>Aurora Consurgens</a>
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

Coniunctio.propTypes =
{
    t: PropTypes.func.isRequired
};

export default withTranslation()(Coniunctio);

