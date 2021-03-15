import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faShoppingCart } from '@fortawesome/free-solid-svg-icons';


const Product = (props) => {
    const {img,name,seller,price,stock} = props.product;
    return (
        <div className='singleProduct'>
            <div>
                <img src={img} alt=""/>
            </div>
            <div className='productName'>
                <h4>{name}</h4>
                <br/>
                <p>By : {seller}</p>
                <p>Price : {price}$</p>
                <p>Only left in stock {stock}</p>
                <button 
                className= 'cartBtn'
                onClick = {()=>props.handleAddProduct(props.product)}
                >
                <FontAwesomeIcon icon={faShoppingCart}/>Add To Cart</button>
            </div>
        </div>
    );
};

export default Product;