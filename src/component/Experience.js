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
            <Container className="pt-5 pb-5 justify-content-center align-items-center">
                <div className="d-flex justify-content-center mb-5">
                    <h4>Working Experience & Stack</h4>
                </div>
                <Row className="vh-100justify-content-center align-items-center">
                    <Col lg={6} md={12} sm={12} xs={12}>
                        <div className="card-experience-1">
                            <a className="font-weight-bold text-dark">PT.Mekar Investama Sampoerna</a>
                            <p>( Dec 2020 - Present )</p>
                            <p>Fullstack Developer</p>
                        </div>
                        <div className="card-experience-2 mt-3">
                            <a>PT.Hirata Insan Mandiri</a>
                            <p>( July 2018 - Sept 2018 )</p>
                            <p>Software Engineer Intern</p>
                        </div>
                    </Col>
                    <Col lg={6} md={12} sm={12} xs={12}>
                        <Row className="p-5">
                            <Col lg={4} sm={4} md={4} xs={4} className="d-flex justify-content-center"><img src={golang} className="image"/></Col>
                            <Col lg={4} sm={4} md={4} xs={4} className="d-flex justify-content-center"><img src={javascript} className="image"/></Col>
                            <Col lg={4} sm={4} md={4} xs={4} className="d-flex justify-content-center"><img src={kotlin} className="image"/></Col>
                            <Col lg={4} sm={4} md={4} xs={4} className="d-flex justify-content-center"><img src={java} className="image"/></Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Experience;