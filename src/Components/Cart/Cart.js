import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    //const total = cart.reduce((total,product) => total + product.price,0)
    let total = 0;
    for(let i=0;i<cart.length;i++){
        const  product = cart[i];
        total = Math.round(total + product.price);

    }
    let shipping = 0;
    if(total > 1500){
        shipping = 0;
    }
    else if(total>0){
        shipping = 12.99;
    }
    const tax = total /10;
    const grandTotal = (total + shipping + tax);
    return (
        <div>
          <h4>Order Summary</h4>  
          <h5>Items Orderd:{cart.length}</h5>
          <p>Total price {total +shipping}$</p>
          <p>Shipping Cost:{shipping}</p>
          <p>TAX+VAT : {tax}</p>
          <h3>Grand Total = {grandTotal}</h3>
        </div>
    );
};

export default Cart;