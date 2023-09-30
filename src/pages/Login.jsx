import { Form, Container, Button } from "react-bootstrap";

const FormLogin = () => {

    const handleLogin = (event) => {
        event.preventDefault();
        localStorage.setItem('email', event.target.email.value);
        localStorage.setItem('password', event.target.password.value);
        window.location.href="/LandingPages";
    }

    return(
        <div>
            <Container className="formLogin-section d-flex justify-content-center align-items-center flex-column">
            <h2>Login</h2>
            <p>Welcome, Plese enter your details</p>

            <Form onSubmit={handleLogin}>
                <Form.Label
                htmlFor="email" className="text-form" 
                >
                    Email
                </Form.Label>
                <Form.Control 
                name="email" 
                type="email" />

                <Form.Label
                htmlFor="email" className="text-form" 
                >
                    Password
                </Form.Label>
                <Form.Control
                name="password" 
                type="password"
                />

                <Button type="submit" variant="primary" className="mt-5 w-100">
                    Login
                </Button>
                
                <p className="mt-4">Don't have an account? <a href="/Register">Register</a></p>
            </Form>
            </Container>
        </div>
    )
}

export default FormLogin;