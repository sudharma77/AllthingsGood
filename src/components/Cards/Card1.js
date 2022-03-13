import React from "react";
import { Card, Button, Nav, Navbar } from "react-bootstrap";
import './Card.css'

function Card1() {
    return (
        <div className="card">
            <Card style={{ width: '9.7rem' }} className="card">
                <div className='shekh'>
                    <div className='content-set'>
                        <div className='buget'>BUGET</div>
                    </div>

                </div>

                <Card.Img variant="top" src="https://m.media-amazon.com/images/I/61nh0sjgeKL._AC_UL480_FMwebp_QL65_.jpg" style={{ height: '9.7rem' }} />
                <Card.Body>
                    <Card.Title><span className="title1" >Card Title</span></Card.Title>
                    <Card.Text>
                        <p className="text1">
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </p>
                    </Card.Text>
                    <Navbar bg="none" variant="light">
                        <Navbar.Brand href="#home" className="rupees">500</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav>
                                <Nav.Link href="#deets">
                                    <Button variant="primary" className="button2">Shop</Button>
                                </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </Card.Body>
            </Card>
            <Card style={{ width: '9.7rem' }} className="card">
                <div className='shekh'>
                    <div className='content-set'>
                        <div className='buget'>BUGET</div>
                    </div>

                </div>
                <Card.Img variant="top" src="https://m.media-amazon.com/images/I/41mhASSCA5L._AC_UL480_FMwebp_QL65_.jpg" style={{ height: '9.7rem' }} />
                <Card.Body>
                    <Card.Title><span className="title1" >Card Title</span></Card.Title>
                    <Card.Text>
                        <p className="text1">
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </p>
                    </Card.Text>
                    <Navbar bg="none" variant="light">
                        <Navbar.Brand href="#home" className="rupees">500</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav>
                                <Nav.Link href="#deets">
                                    <Button variant="primary" className="button2">Shop</Button>
                                </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Card1;