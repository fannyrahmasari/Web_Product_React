import { Container, Image } from "react-bootstrap"
import bootsrapImage from "../assets/Images/bootstrap-logo.svg.png"

const Content = () => {
    return(
        <Container className="kotak-content">
            <div>
                <Image className="d-block mx-auto img-fluid w-5 mt-3" src={bootsrapImage} alt="" />
            </div>
            <div>
                <h1 className="judul mt-3">Create Product</h1>
                <p className="paragraf mt-3">Di bawah ini adalah contoh formulir yang dibuat seluruhnya dengan kontrol formulir Bootstrap. Setiap grup formulir yang diperlukan memiliki status validasi yang dapat dipicu dengan mencoba mengirimkan formulir tanpa menyelesaikannya.</p>
            </div>
        </Container>
    )
}

export default Content