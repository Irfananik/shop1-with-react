import React from 'react';
import './Singleproducts.css'

const Singleproduct = (props) => {
   console.log(props.product.title)
    return (
        <div className="col-md-3 p-3 mt-5 card border">
           <h4>Product Title: {props.product.title.slice(1,10)}</h4>
           <h6>Product price: {props.product.price}</h6>
           <p>Product discription: {props.product.description.slice(1,30)}</p>
        </div>
    );
};

export default Singleproduct;