import React from 'react';
import Reactmodal from '../Reactmodal/Reactmodal';
import './Singleproducts.css'

const Singleproduct = (props) => {
    const {setCartCount} = props
    return (
        <div className="col-md-3 p-4 mt-5 card">
            <div className="card-body">
                <img className="img-fluid single-img" src={props.product.image} alt="" />
                <div className="mt-3">
                    <h4>Product Title: {props.product.title.slice(1,10)}</h4>
                    <h6>Product price: {props.product.price}</h6>
                    <p>Product discription: {props.product.description.slice(1,30)}</p>
                    <div className="d-flex justify-content-around">
                        <button onClick={setCartCount} type="button" class="btn btn-primary me-2">AddTOcard</button>
                        <Reactmodal product = {props.product}></Reactmodal>
                        <button type="button" class="btn btn-danger ms-2">Delete</button>
                     </div>
                </div>
            </div>
        </div>
    );
};

export default Singleproduct;