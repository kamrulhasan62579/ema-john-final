import React from 'react';
import './Cart.css';
// import giphy from  '../../images/giphy.gif'
import { Link } from 'react-router-dom';

const Cart = (props) => {
    const cart = props.cart;
    let total= 0;
    for (let i = 0; i < cart.length; i++) {
        const produc = cart[i];
        total = total + produc.price * produc.quantity;
    
        
    }
    let shipping = 0;
    if (total > 100) {
        shipping = 0;
    }
    else if (total > 50) {
        shipping = 4.99;
    }
    else if (total > 20) {
        shipping = 1.99;
    }
    const tax = (total * 0.1).toFixed(2);
   
    const handleNumber = (num) => {
        const precision = num.toFixed(2);
        return Number(precision);
    }
    const grandTotal = (total + Number(tax) + shipping).toFixed(2);
   
    return (
        <div className="cart-content">
            <h4 className="bg-danger p-2">Order Summary</h4>
            <p>Items Ordered: {cart.length}</p>
            <p><small>Product Total: {handleNumber(total)}</small></p>
            <p><small>Shipping: {shipping}</small></p>
            <p><small>Tax + VAT: {tax}</small></p>
            <p><small>Total Before Tax: {handleNumber(total) + shipping}</small></p>
            <p>Order Total Price: {grandTotal}</p>
            {
                props.children
            }
        </div>
    );
};

export default Cart;