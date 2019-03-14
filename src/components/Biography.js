import React from "react";
import {
    Container,
    Col,
    Row
} from "reactstrap";

const Biography = () =>
{
    return (
        <div className="Biography quote">
            <Container>
                <Row>&nbsp;</Row>
                <Row>
                    <Col md="1"></Col>
                    <Col className="quote2" xs="12" md="10">
                        <b> Pathos </b> é uma banda independente de Minas Gerais, formada em 2014 e composta por Hugo Moutinho, JP Vieira, Lucas Guida, Luiz Andrès e Ricardo Marlière.
                    </Col>
                    <Col md="1"></Col>
                </Row>
                <Row>
                    <Col md="1"></Col>
                    <Col xs="12" md="10">
                        <hr/>
                        <h2> páthos </h2>
                        <h6> /&apos;paθɔs/ </h6>
                        <i> substantivo masculino de dois números </i>
                        <ol>
                            <li> qualidade no escrever, no falar, no musicar ou na representação artística (e, p.ext., em fatos, circunstâncias, pessoas) que estimula o sentimento de piedade ou a tristeza; poder de tocar o sentimento da melancolia ou o da ternura; caráter ou influência tocante ou patética. <br/> <i> &quot;falta p. à sua escultura&quot; </i> </li>
                            <li> na experiência do espectador, leitor etc., sentimento de dó, compaixão ou empatia criados por essa qualidade do texto, da música, da representação etc. </li>
                            <li> esp. na antiga arte grega, qualidade do que é transiente ou emocional (p.opos. ao permanente ou ideal). </li>
                            <li> na retórica de Aristóteles, pathos, ethos e logos são os três pilares fundamentais. Ethos apela para ética, pathos ao sentimento ou às emoções, e logos para a lógica. </li>
                        </ol>
                    </Col>
                    <Col md="1"></Col>
                </Row>
                <Row>&nbsp;</Row>
            </Container>
        </div>
    );
};

export default Biography;

