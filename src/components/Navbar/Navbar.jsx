import { Container, Navbar, Nav} from "react-bootstrap"

const NavigationBar = () => {

    const buttonClick = () => {
        console.log(Math.floor(100000 + Math.random() * 900000));
    }

    return(
        <div>
            <Container fluid>
                <Navbar className="navbarProduct">
                        <Navbar.Brand href="#">Simple Header</Navbar.Brand>
                        <Nav className="ms-auto">
                            <Nav.Link href="/LandingPages"><a href type="button" onClick={buttonClick} className="btn btn-primary">Home</a></Nav.Link>
                            <Nav.Link href="#"><a href type="button" className="btn btn-transparent">Features</a></Nav.Link>
                            <Nav.Link href="#"><a href type="button" className="btn btn-transparent">Pricing</a></Nav.Link>
                            <Nav.Link href="/"><a href type="button" className="btn btn-primary">Login</a></Nav.Link>
                            <Nav.Link href="/Register"><a href type="button" className="btn btn-success">Register</a></Nav.Link>
                        </Nav>
                </Navbar>
            </Container>
        </div>
    )
}

export default NavigationBar