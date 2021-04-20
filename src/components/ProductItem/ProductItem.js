import React from 'react';
import './ProductItem.css'

const ProductItem = (props) => {
    const {name, img,price, seller, shipping, key, quantity} = props.product;

    return (
            <div className="product-item mBottom">
                <h4 className="name"> {name} </h4>
                <img src={img} alt=""/>
                <p>Price: {price}</p>
                <p>Sold By: {seller}</p>
                <p>Quantity: {quantity} </p>
                <button className="ad-btn" onClick={() =>props.handleRemoveCart(key)} className="add-btn">Remove</button>
            </div>
    );
};

export default ProductItem;