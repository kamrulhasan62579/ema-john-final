import React from 'react';
import './Product.css'

const Product = (props) => {
    const {name, img, price, seller, features, star, stock, shipping} =props.product;
    return (
        <div className="product-container">
                <img src={img} alt=""/>
            <div className="half-width">
                 <h4>{name}</h4>
                 <p>By: {seller}</p>
                 <div className="last-half">
                    <div>
                        <h4>${price}</h4>
                        <p>Only {stock} left in stock - Order soon</p>
                        <button onClick={() => props.handleAddCart(props.product)} className="btn">Add To Cart</button>
                    </div>
                    <div className="feature-container">
                        <h4>Rating: {star} star</h4>
                        <h4>Features</h4>
                        <ul>
                            {
                                features.map(feature => <li>{feature.description} {feature.value}</li> )
                            }
                        </ul>
                    </div>
                 </div>
            </div>
        </div>
    );
};

export default Product;