import React from "react";

import { Card, Button, Container } from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
import './VtCard.css'


function VtCard1() {
    return (
        <Container className="Container">
            <Card className="Card" >
                <Card.Img variant="top" src="https://m.media-amazon.com/images/I/71+HwYte+zL._AC_UL480_FMwebp_QL65_.jpg" className="img-Video" />
                <Card.Body>
                    <Card.Title className="Card-Title">Products in this Video</Card.Title>
                    <div className="Card-Image">
                        <img src="https://m.media-amazon.com/images/I/613+Ie8rOlL._AC_UL480_FMwebp_QL65_.jpg" alt="hair" className="Card-Image1" />
                        <img src="https://m.media-amazon.com/images/I/610Grcnr0rL._AC_UL480_FMwebp_QL65_.jpg" alt="hair" className="Card-Image1" />
                    </div>
                    <Button variant="primary">View Tagged Products</Button>
                </Card.Body>
            </Card>
            <br />
            <Card className="Card" >
                <Card.Img variant="top" src="https://m.media-amazon.com/images/I/61lDBqVfULL._AC_UL480_FMwebp_QL65_.jpg" className="img-Video" />
                <Card.Body>
                    <Card.Title className="Card-Title">Products in this Video</Card.Title>
                    <div className="Card-Image">
                        <img src="https://m.media-amazon.com/images/I/613+Ie8rOlL._AC_UL480_FMwebp_QL65_.jpg" alt="hair" className="Card-Image1" />
                        <img src="https://m.media-amazon.com/images/I/610Grcnr0rL._AC_UL480_FMwebp_QL65_.jpg" alt="hair" className="Card-Image1" />
                        <img src="https://m.media-amazon.com/images/I/51F4Fsq42SL._AC_UL480_FMwebp_QL65_.jpg" alt="hair" className="Card-Image1" />
                        <img src="https://m.media-amazon.com/images/I/61A3nxkUUYL._AC_UL480_FMwebp_QL65_.jpg" alt="hair" className="Card-Image1" />

                    </div>
                    <Button variant="primary">View Tagged Products</Button>
                </Card.Body>
            </Card>
            <br />
            <Card className="Card" >
                <Card.Img variant="top" src="https://m.media-amazon.com/images/I/61EACSHJQdL._AC_UL480_FMwebp_QL65_.jpg" className="img-Video" />
                <Card.Body>
                    <Card.Title className="Card-Title">Products in this Video</Card.Title>
                    <div className="Card-Image">
                        <img src="https://m.media-amazon.com/images/I/713jLhnDFZL._AC_UL480_FMwebp_QL65_.jpg" alt="hair" className="Card-Image1" />
                        <div className="Div-Class">
                           <h3>+2</h3>
                           more
                           
                           
                            {/* <img src="https://m.media-amazon.com/images/I/616DjfJxQXL._AC_UL480_FMwebp_QL65_.jpg" alt="hair" className="Card-Image2" /> */}
                        </div>
                        
                    </div>
                    <Button variant="primary">View Tagged Products</Button>
                </Card.Body>
            </Card>
        </Container>
    )
}
export default VtCard1;