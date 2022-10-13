import React, { useEffect, useState } from 'react'
import Products from './Products';
import { fetchProductsDataAxios } from './Store.service';

const Storecontainer = () => {
  const [products, setProducts]=useState([]);  
  useEffect(()=>{
       fetchProductsDataAxios().then((products)=>setProducts(products))           
  },[]);              
  return (

   <Products products={products}></Products>

  )
}

export default Storecontainer;