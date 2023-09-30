import React from 'react';
import { Form, Container, Button, Table} from "react-bootstrap"
import { useForm, Controller } from "react-hook-form";
import { useAppContext } from "../../../AppContext";
import Swal from 'sweetalert2';

const FormProduct = () => {

    const {state, setFormData } = useAppContext();

    React.useEffect(() => {
        setFormData({
          ...state,
          formData: {
            ...state.formData,
            productName: '', 
          },
        });
      }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...state,
          formData: {
            ...state.formData,
            [name]: value,
          },
        });
      };

      const handleDelete = (id) => {
        const updatedTableData = tableData.filter(item => item.id !== id);
        setTableData(updatedTableData);

        Swal.fire({
            title: 'Konfirmasi',
            text: 'Apakah Anda yakin ingin menghapus item ini?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Ya, Hapus',
            cancelButtonText: 'Batal',
          }).then((result) => {
            if (result.isConfirmed) {
              const updatedTableData = tableData.filter(item => item.id !== id);
              setTableData(updatedTableData);
        
              Swal.fire({
                title: 'Sukses!',
                text: 'Item telah dihapus.',
                icon: 'success',
              });
            }
          });
      };

    const { control, watch, register, handleSubmit, formState: { errors }, reset} = useForm();
    const [tableData, setTableData] = React.useState([]);
    const [nextId, setNextId] = React.useState(1);

    const onSubmit = (data) => {
        const image = URL.createObjectURL(data.image[0]);
        const newData = { id: nextId, ...data };
        setTableData([...tableData, newData]);
        setNextId(nextId + 1);
        reset();
        const selectedRadio = watch('productFreshness');
    }


  const handlePages = () => {
    window.location.href="/Account"
  }

    return(
        <div>
            <Container className="kotak-form mt-5">
                <h1 className="judul-form">Detail Product</h1>

                    <Form className="mb-3 form m-auto" onSubmit={handleSubmit(onSubmit)}>
                     
                        <Form.Label htmlFor="productName" className="text-form">Product Nama</Form.Label>
                        <Form.Control 
                        className="input" 
                        name="productName" 
                        type="text"
                        onChange={handleInputChange}
                        {...register("productName", { required: true, maxLength: 25 })}
                        />
                        {errors.productName && <p className="error-style mt-2">Please enter a valid product name.</p>}
                    
                        <Form.Label 
                        htmlFor="productCategory" 
                        className="text-form mt-3">
                            Product Category
                        </Form.Label>
                        <Form.Select 
                        className="select mb-3" 
                        name="productCategory"
                        id="productCategory" 
                        aria-label="Default select example"
                        onChange={handleInputChange} 
                        {...register("productCategory", { required: true})}
                        >
                        <option>Choose...</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                        </Form.Select>
                        {errors.productName && <p className="error-style mt-2">Please choose one of the options.</p>}

                        <Form.Label 
                        lassName="text-form">
                            Image Product
                        </Form.Label>
                        <Form.Group 
                        controlId="formFile" 
                        className="mb-3" >
                        <Form.Control
                        className="upload" 
                        name="image" 
                        type="file"
                        onChange={handleInputChange}
                        {...register("image", { required: true})}
                        />
                        </Form.Group>
                        {errors.image && <p className="error-style mt-2">Please enter a image product.</p>}

                        <Form.Label 
                        htmlFor="productFreshness" 
                        className="text-form mt-3" 
                        name="productFreshness">
                            Product Freshness
                        </Form.Label>

                        <Controller
                        name="productFreshness"
                        control={control}
                        defaultValue=""
                        onChange={handleInputChange}
                        render={({ field }) => (
                        <>
                            <Form.Check
                            type="radio"
                            label="Brand New"
                            {...field}
                            value="BrandNew"
                            />

                            <Form.Check
                            type="radio"
                            label="Second Hand"
                            {...field}
                            value="Secondhand"
                            />

                            <Form.Check
                            type="radio"
                            label="Refufbished"
                            {...field}
                            value="Refufbished"
                            />
                        </>
                        )}
                    {...register("productFreshness", { required: true})}
                    />
                    {errors.productFreshness && <p className="error-style mt-2">Please enter a product freshness.</p>}


                        <Form.Label 
                        className="text-form mt-3">
                            Additional Deskription
                        </Form.Label>
                        <Form.Control  
                        as="textarea" rows={3} 
                        name="deskription"
                        onChange={handleInputChange} 
                        {...register("deskription", { required: true})}
                        />
                        {errors.deskription && <p className="error-style mt-2">Please enter a description product.</p>}

                        <Form.Label 
                        htmlFor="productPrice" 
                        className="text-form mt-3">
                            Product Price
                        </Form.Label>
                        <Form.Control 
                        className="input" 
                        type="text" 
                        name="productPrice"
                        onChange={handleInputChange}
                        {...register("productPrice", { required: true})} 
                        />
                        {errors.productPrice && <p className="error-style mt-2">Please enter a product price.</p>}
                                
                        <Button type="submit" className="mt-5 w-100" variant="primary">Submit</Button>
                    </Form>
            </Container>

            <Container>
            <h1 className='judul-tabel mb-4'>List Product</h1>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>No. </th>
                        <th>Product Name</th>
                        <th>Product Category</th>
                        <th>Product Image</th>
                        <th>Product Freshness</th>
                        <th>Product Price</th>
                        <th>Action</th>
                        <th>Detail</th>
                    </tr>
                </thead>

                <tbody>
                {tableData.map((item, index) => (
                    <tr key={index}>
                        <td>{item.id}</td> 
                        <td onClick={handlePages}>{item.productName}</td>
                        <td>{item.productCategory}</td>
                        <td>
                            <img src={item.image} alt={item.productName} style={{ maxWidth: '100px' }} />
                        </td>
                        <td>{item.productFreshness}</td>
                        <td>{item.productPrice}</td>
                        <td>
                            <Button 
                            variant="danger"
                            onClick={() => handleDelete(item.id)}
                            >
                                Delete
                            </Button>

                            <Button 
                            variant="success"
                            >
                                Edit
                            </Button>
                        </td>
                        <td>
                            <Button onClick={handlePages} variant="success">Details</Button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </Table>
        </Container>
        </div>
    )
}

export default FormProduct