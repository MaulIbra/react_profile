import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import sd from '../assets/sd.svg'
import smp from '../assets/smp.svg'
import sma from '../assets/sma.svg'
import diploma from '../assets/diploma.svg'
import education from "../assets/education.svg"

const Education = () => {
    return (
        <div className="education-component" id="education">
            <Container className="pt-5">
                <div className="d-flex justify-content-center mb-5">
                    <h4>Education</h4>
                </div>
                <Row>
                    <Col lg={6} md={6} className="d-lg-flex d-md-flex d-none">
                        <img src={education} className="image"/>
                    </Col>
                    <Col lg={6} md={6} sm={12} xs={12} className="d-flex justify-content-center align-items-center">
                        <div>
                            <div className="d-flex mt-3">
                                <div id="first" className="box d-flex justify-content-center align-items-center mb-2">
                                    <img src={diploma} className="image"/>
                                </div>
                                <div className="ml-3">
                                    <a className="font-weight-bold text-dark">Associate Degree</a>
                                    <p className="font-weight-lighter">
                                        Bandung State of Polytechnics<br/>
                                        2016 - 2019
                                    </p>
                                </div>
                            </div>
                            <div className="d-flex mt-3">
                                <div id="second" className="box d-flex justify-content-center align-items-center">
                                    <img src={sma} className="image"/>
                                </div>
                                <div className="ml-3">
                                    <a className="font-weight-bold text-dark">Senior High School</a>
                                    <p className="font-weight-lighter">
                                        SMA Negeri 3 Cirebon<br/>
                                        2013 - 2016
                                    </p>
                                </div>
                            </div>
                            <div className="d-flex mt-3">
                                <div id="third" className="box d-flex justify-content-center align-items-center">
                                    <img src={smp} className="image"/>
                                </div>
                                <div className="ml-3">
                                    <a className="font-weight-bold text-dark">Junior High School</a>
                                    <p className="font-weight-lighter">
                                        SMP Negeri 13 Cirebon<br/>
                                        2010 - 2013
                                    </p>
                                </div>
                            </div>
                            <div className="d-flex mt-3">
                                <div id="fourth" className="box d-flex justify-content-center align-items-center">
                                    <img src={sd} className="image"/>
                                </div>
                                <div className="ml-3">
                                    <a className="font-weight-bold text-dark">Primary School</a>
                                    <p className="font-weight-lighter">
                                        SD Negeri 1 Luwung<br/>
                                        2004 - 2010
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>

        </div>
    );
};

export default Education;