import React from 'react';
import {Card, Col, Container, Row} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import golang from "../assets/golang.svg"
import javascript from "../assets/javascript.svg"
import kotlin from "../assets/Kotlin.svg"
import java from "../assets/java.png"

const Experience = () => {
    return (
        <div className="services-component" id="experience">
            <Container className="mt-5 mb-5 justify-content-center align-items-center">
                <div className="d-flex justify-content-center">
                    <h4>Working Experience & Stack</h4>
                </div>
                <Row className="vh-100justify-content-center align-items-center">
                    <Col lg={6}>
                        <div className="card-experience-1">
                            <a>PT.Mekar Investama Sampoerna</a>
                            <p>( Dec 2020 - Present )</p>
                            <p>Fullstack Developer</p>
                        </div>
                        <div className="card-experience-2 mt-3">
                            <a>PT.Hirata Insan Mandiri</a>
                            <p>( July 2018 - Sept 2018 )</p>
                            <p>Software Engineer Intern</p>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <Row className="p-5">
                            <Col lg={4} className="d-flex justify-content-center"><img src={golang}/></Col>
                            <Col lg={4} className="d-flex justify-content-center"><img src={javascript} width={100}/></Col>
                            <Col lg={4} className="d-flex justify-content-center"><img src={kotlin} width={100}/></Col>
                        </Row>
                        <Row className="p-5">
                            <Col lg={4} className="d-flex justify-content-center"><img src={java} width={100}/></Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Experience;