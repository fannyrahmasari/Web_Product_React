import React, { useEffect } from 'react'
import '../styles/App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import "../styles/CreateProduct.css"
import NavigationBar from '../components/Navbar/Navbar'
import Content from '../components/Content'
import FormProduct from '../components/Form/Form'
import Swal from 'sweetalert2'
import { AppProvider } from '../../AppContext'


function CreateProduct() {

useEffect( () => {
  Swal.fire({
    title:'Welcome',
    text: 'Welcome to the create product page',
    icon:'success'
  })
}, []);

  return (
    <div>
      <div>
        <NavigationBar />
      </div>

      <div>
        <Content />
      </div>

      <div>
        <AppProvider>
          <FormProduct />
        </AppProvider>
      </div>
    </div>
  )
}

export default CreateProduct
