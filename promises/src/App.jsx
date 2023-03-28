

import axios, { Axios } from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import ProductItem from './components/ProductItem'

const URL_API = "https://fakestoreapi.com/products"
function App() {

  const [productos, setProductos] = useState([])


  const getProductos = async () => {

    try{

      const res =  await axios (URL_API);
            setProductos(res.data);

    }catch(error){

      console.log("ERROR" + error)
    }
  }
 
 
  useEffect(()=>{
  
  getProductos()
  
 
},[]);
 
 
 
  // useEffect(() => {
  //  fetch('https://fakestoreapi.com/products')
  //  .then((resp)=> resp.json())
  //  .then((json) => setProductos(json)) 
  // }, [])

  useEffect(() => {
      axios('https://fakestoreapi.com/products').then((res)=>setProductos(res.data))
  }, [])
  
  
  console.log(productos)
return(
<div>
  <h1>React App</h1>
  {productos.map(producto => (
  <ProductItem producto={producto} key={producto.id}/>
  
  ))}
</div>
)
}
export default App
