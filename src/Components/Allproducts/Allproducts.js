import React, { useEffect, useState } from 'react';
import Singleproduct from '../Singleproduct/Singleproduct';
import './Allproducts.css'

const Allproducts = (props) => {
    const {setCartCount} = props
    const [products,setProducts] = useState([])
    useEffect(()=> {
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(data=>setProducts(data))
    },[])
    return (
        <div className="container">
           <section className="mt-5 p-3">
               <h2>All Products</h2>
               <div className="row">
                {
                    products.map(pd => <Singleproduct setCartCount = {setCartCount} key={pd.id} product = {pd}></Singleproduct>)
                }
               </div>
           </section> 
        </div>
    );
};

export default Allproducts;