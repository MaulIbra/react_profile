import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import education from "../assets/education.svg"

const Education = () => {
    return (
        <div className="education-component" id="education">
            <Container>
                <Row className="h-75">
                   <Col lg={6} className=" d-flex justify-content-center align-items-center p-5">
                        <img src={education} className="education-image"/>
                   </Col>
                   <Col lg={6}>
                       <div className="d-flex justify-content-center">
                           <h4>Education</h4>
                       </div>
                   </Col>
                </Row>
            </Container>

        </div>
    );
};

export default Education;