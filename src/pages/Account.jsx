import { Container } from "react-bootstrap"
import React from 'react';
import "../styles/LandingPages.css"


const Account = () => {

    const productName = localStorage.getItem('productName')
    const productCategory = localStorage.getItem('productCategory')
    const image = localStorage.getItem('image')
    const productFreshness = localStorage.getItem('productFreshness')
    const productPrice = localStorage.getItem('productPrice')

    return(
        <div>
            <Container className="account-section">
                <h2 className="text-center mt-5 text-account">List Product Details</h2>
                <div>
                    <ul>
                        <li>
                            <p> Product Name : {productName} </p>
                        </li>
                        <li>
                            <p> Product Category : {productCategory} </p>
                        </li>
                        <li>
                            <p> Image Product: {image} </p>
                        </li>
                        <li>
                            <p> Product Freshness: {productFreshness} </p>
                        </li>
                        <li>
                            <p> Product Price: {productPrice} </p>
                        </li>
                    </ul>
                </div>




                {/* <h1>{productName}</h1>
                <h1>{productCategory}</h1>
                <h1>{image}</h1>
                <h1>{productFreshness}</h1>
                <h1>{productPrice}</h1> */}
            </Container>
        </div>
    )
}

export default Account