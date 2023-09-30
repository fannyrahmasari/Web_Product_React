import { Container, Button, Card, Form } from "react-bootstrap"
import React, { useEffect } from 'react'
import {} from "react-router-dom";
import "../styles/LandingPages.css"
import Swal from 'sweetalert2'

import NavigationBar from "../components/Navbar/Navbar"
import heroImage from "../assets/Images/hero-img.png.png"
import cardImage from "../assets/Images/card-img.jpg"


const LandingPages = () => {

    useEffect( () => {
        Swal.fire({
          title:'Welcome',
          text: 'Welcome to the landing page',
          icon:'success'
        })
      }, []);

    return(
        <div>
            <NavigationBar />

            <div className="hero-section">
                <Container>
                    <div className="row">
                        <div className="col-6 m-auto hero-content">
                            <h1 className="text-white">Better Solutions For Your Business</h1>
                            <p className="opacity-75 text-white">We are team of talented designers making websites with Bootstrap</p>

                            <div className="mt-5 hero-button">
                            <a href="/CreateProduct" className="button-primary button-hero rounded-pill text-white">
                                Create Product
                            </a>
                                <Button className="button-secondary bg-transparent border-0">Watch Video</Button>
                            </div>
                        </div>
                        <div className="col-6 m-auto mt-5 hero-image d-flex justify-content-center align-items-center">
                            <img src={heroImage} alt="" />
                        </div>
                    </div>
                </Container>
            </div>

            {/* Product List Section */}
            <div className="productList-section">
                <Container>
                <h2 className=" mt-5 mb-5 ">PRODUCT LIST</h2>
                <div className="row">
                    <div className="col-4">
                        <Card className="card-list">
                            <Card.Img variant="top" src={cardImage} />
                            <Card.Body>
                                <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                                </Card.Text>

                                <div className="d-flex justify-content-between">
                                    <Button className="button-list" variant="primary">Detail View</Button>
                                    <p className="ml-auto">9 mins</p>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-4">
                    <Card className="card-list">
                            <Card.Img variant="top" src={cardImage} />
                            <Card.Body>
                                <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                                </Card.Text>

                                <div className="d-flex justify-content-between">
                                    <Button className="button-list" variant="primary">Detail View</Button>
                                    <p className="ml-auto">9 mins</p>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-4">
                    <Card className="card-list">
                            <Card.Img variant="top" src={cardImage} />
                            <Card.Body>
                                <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                                </Card.Text>

                                <div className="d-flex justify-content-between">
                                    <Button className="button-list" variant="primary">Detail View</Button>
                                    <p className="ml-auto">9 mins</p>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                </div>

                <div className="d-flex justify-content-between">
                    <Button className="btn btn-primary ms-auto mt-5 mb-5">Load More ...</Button>
                </div>
                </Container> 
            </div>

            {/* newslatter section */}
            <div className="newslatter-section">
                <Container>
                    <div className="row">
                        <div className="newslatter-content">
                            <h3 className="text-center mt-5">Join Our News Leter</h3>
                            <p className="text-center">Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
                        </div>
                        <div className="formControl d-flex">
                            <Form.Control className="w-50 m-auto rounded-pill position-relative"/>
                            <Button className="button-primary rounded-pill position-absolute">Subscribe</Button>
                        </div>
                        
                    </div>
                </Container>
            </div>

            {/* Footer Section */}
            <div className="footer-section">
                <Container>
                    <div className="row mt-5">
                        <div className="col-3">
                            <h3 className=" fw-bold ">ARSHA</h3>
                            <p>A108 Adam Street New York, NY 535022 United States Phone: +1 5589 55488 55 Email: info@example.com</p>
                        </div>
                        <div className="col-3">
                            <h3>Useful Links</h3>
                            <ul>
                                <li>Home</li>
                                <li>About Us</li>
                                <li>Services</li>
                                <li>Terms of service</li>
                                <li>Privacy Policy</li>
                            </ul>
                        </div>
                        <div className="col-3">
                            <h3>Our Services</h3>
                            <ul>
                                <li>Web Design</li>
                                <li>Web Development</li>
                                <li>Product Management</li>
                                <li>Marketing</li>
                                <li>Graphik Design</li>
                            </ul>
                        </div>
                        <div className="col-3">
                            <h3>Our Social Network</h3>
                            <p>Cras fermentum odio eu feugiat lide par naso tierra videa magna derita valies</p>
                        </div>
                    </div>
                    </Container>

                    <Container-fluid>
                        <div className="copyright d-flex justify-content-between">
                            <p className="text-white">© Copyright Fanny. All Rights Reserved</p>
                            <p className="text-white">Designed by BootstrapMade</p>
                        </div>
                    </Container-fluid>

            </div>

        </div>
    )
}

export default LandingPages