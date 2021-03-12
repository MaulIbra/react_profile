import React from 'react';
import {Link} from "react-scroll";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";

const Headers = () => {
    return (
        <Navbar collapseOnSelect fixed="top" expand="sm" bg="white">
            <Container>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Brand>Personal</Navbar.Brand>
                <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                    <Nav className="ml-auto">
                        <Nav.Link>
                            <Link
                                activeClass="active"
                                to="about"
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration={500}>
                                About
                            </Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link
                                activeClass="active"
                                to="experience"
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration={500}>
                                Experience
                            </Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link
                                activeClass="active"
                                to="education"
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration={500}>
                                Education
                            </Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link
                                activeClass="active"
                                to="project"
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration={500}>
                                Project
                            </Link>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Headers;