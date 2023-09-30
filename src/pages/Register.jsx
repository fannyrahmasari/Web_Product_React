import { Form, Container, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";

const FormRegister = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        window.location.href="/LandingPages";
        console.log(data)
      }

    

    return(
        <div>
            <Container className="formRegister-section d-flex justify-content-center align-items-center flex-column">
            <h2 className="mt-5">Register</h2>
            <p>Welcome, Plese enter your details</p>

            <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Label
                htmlFor="firstName" className="text-form" 
                >
                    First Name
                </Form.Label>
                <Form.Control 
                name="firstName" 
                type="text"
                {...register("firstName", { required: true, minLength: 3 })} 
                />
                {errors.firstName && <p style={{color:'red'}} className="mt-2">Please check the First Name</p>}

                <Form.Label
                htmlFor="lastName" className="text-form" 
                >
                    Last Name
                </Form.Label>
                <Form.Control
                name="lastName" 
                type="text"
                {...register("lastName", { required: true, minLength: 3 })}
                />
                {errors.firstName && <p style={{color:'red'}} className="mt-2">Please check the Last Name</p>}

                <Form.Label
                htmlFor="email" className="text-form" 
                >
                    Email
                </Form.Label>
                <Form.Control
                name="email" 
                type="email"
                {...register("email", 
                        { 
                            required: true,  
                            pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ 
                        })}
                />
                {errors.email && <p style={{color:'red'}} className="mt-2">Please check The Email</p>}

                <Form.Label
                htmlFor="password" className="text-form" 
                >
                    Password
                </Form.Label>
                <Form.Control
                name="password" 
                type="password"
                {...register("password", { 
                    required: true, 
                    pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/
                })}
                />
                {errors.password && <p style={{color:'red'}} className="mt-2">Please check The Password</p>}

                <Button type="submit" variant="primary" className="mt-5 w-100">
                    Register
                </Button>
                
                <p className="mt-4 mb-5">Already have an account? <a href="/">Login</a></p>
            </Form>
            </Container>
        </div>
    )
}

export default FormRegister;