import React from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import profile_image from '../assets/profile.jpg'

const About = () => {
    return (
        <Container className="about-component" id="about">
            <Row className="justify-content-center align-items-center">
                <Col className="left-about p-2">
                    <div>
                        <h1>Hy! I'am</h1>
                        <h2 className="display-4">Maulana Ibrahim</h2>
                        <p>I am an Junior software engineer. I am interested in microservice architecture, design
                            pattern and clean code principle to reduce headache in software maintainability and
                            evolvability.</p>
                    </div>
                </Col>
                <Col className="right-about">
                    <img src={profile_image} alt=""/>
                </Col>
            </Row>

        </Container>
    );
};

export default About;