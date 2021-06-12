import React from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faLinkedin, faGithub, faDribbbleSquare} from "@fortawesome/free-brands-svg-icons"
import profile_image from '../assets/profile.png'
import api_image from '../assets/api.svg'
import programming_image from '../assets/programming.svg'


const About = () => {
    return (
        <div className="about-component" id="about">
            <Container className="h-100">
                <Row className="h-100">
                    <Col lg={6} className="d-flex align-items-center">
                        <div>
                            <h1>Hy! I'am</h1>
                            <h2 className="display-4">Maulana Ibrahim</h2>
                            <p>I am an Junior software engineer. I am interested in microservice architecture, design
                                pattern and clean code principle. and I also interested in making ui / ux</p>
                            <div className="left-about-button">
                                <a href="https://www.linkedin.com/in/maulana-ibrahim-3ba577146/">
                                    <button><FontAwesomeIcon icon={faLinkedin}/></button>
                                </a>
                                <a href="https://github.com/MaulIbra">
                                    <button><FontAwesomeIcon icon={faGithub}/></button>
                                </a>
                                <a href="https://dribbble.com/MaulanaIbrahim007">
                                    <button><FontAwesomeIcon icon={faDribbbleSquare}/></button>
                                </a>
                            </div>
                        </div>
                    </Col>
                    <Col lg={6} className="d-none d-lg-flex align-items-center justify-content-center">
                        <div>
                            <img src={profile_image} alt="" id="profile_image"/>
                            <img id="api_image" src={api_image}/>
                            <img id="programming_image_1" src={programming_image}/>
                            <img id="programming_image_2" src={programming_image}/>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default About;