import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import golang from "../assets/golang.svg"
import javascript from "../assets/javascript.svg"
import kotlin from "../assets/Kotlin.svg"

const Experience = () => {
    return (
        <div className="services-component" id="experience">
            <Container>
                <Row className="justify-content-center align-items-center">
                    <Col className="left-about" lg={6} sm={12}>
                        <div>
                            <h3>Experience</h3>
                            <ul className="timeline">
                                <li>
                                    <a>PT.Mekar Investama Sampoerna ( Dec 2019 - Present )</a>
                                    <p>Fullstack Developer</p>
                                    <ul>
                                        <li>Collaborate with the product team to develop software that meets business
                                            requirements.
                                        </li>
                                        <li>Collaborate with the quality assurance team for better software quality.
                                        </li>
                                        <li>Integrate service with payment Bank system</li>
                                        <li>Create core system to manage lender fund account</li>
                                    </ul>
                                </li>
                                <li>
                                    <a>PT.Hirata Insan Mandiri ( July 2018 - Sept 2018 )</a>
                                    <p>Software Engineer Intern</p>
                                    <ul>
                                        <li>Create Job Scheduler to ETL (Extract transform load) data for Network
                                            parameter template PT.Telkomsel Indonesia
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </Col>
                    <Col className="right-about" lg={6} sm={12}>
                        <div>
                            <h3>Tech Stack</h3>
                            <Row>
                                <Col lg={4}> <img className="image-tech" src={golang} style={{width:"100px",height:"100px"}}/></Col>
                                <Col lg={4}> <img className="image-tech" src={kotlin} style={{width:"100px",height:"100px"}}/></Col>
                                <Col lg={4}> <img className="image-tech" src={javascript} style={{width:"100px",height:"100px"}}/></Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Experience;