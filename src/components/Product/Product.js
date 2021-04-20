import React from 'react';
import { Link } from 'react-router-dom';
import './Product.css'

const Product = (props) => {
    const {name, img, price, seller, features, star, stock, shipping, key} =props.product;
    return (
        <div className="product-container">
                <img src={img} alt=""/>
            <div className="half-width">
                 <h4 className="name"><Link to={"/product/" + key } >{name}</Link></h4>
                 <p>By: {seller}</p>
                 <div className="last-half">
                    <div>
                        <h4>${price}</h4>
                        <p>Only {stock} left in stock - Order soon</p>
                        { props.showAddToCart && <button onClick={() => props.handleAddCart(props.product)} className="add-btn">Add To Cart</button>
}
                    </div>
                    <div className="feature-container">
                        <h4 className="other-name">Rating: {star} star</h4>
                        <h4 className="other-name">Features</h4>
                        <ul>
                            {
                                features.map(feature => <li>{feature.description} : <strong>{feature.value}</strong></li> )
                            }
                        </ul>
                    </div>
                 </div>
            </div>
        </div>
    );
};

export default Product;