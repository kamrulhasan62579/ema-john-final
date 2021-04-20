import React from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../../fakeData';
import Product from '../Product/Product';
import './ProductDetail.css'

const ProductDetail = () => {
  const {productKey} = useParams();
  const product = fakeData.find(pd => pd.key === productKey)
//   console.log(product);
  const {price, seller, star, name, img, category, shipping, stock} = product;
    return (
        <div className="product-detail">
            <h4>{name} This is for Product Detail</h4>
            <img src={img} alt=""/>
            <p>By: {seller}</p>
            <h5>${price} only</h5>
            <p>Category: {category}</p>
            <p>Shipping Charge: {shipping}</p>
            <p>Only {stock} pcs is available</p>
            <p>Rating: {star} star</p>
        </div>


// diffrent way of Product Details showing ::::::::::::::::::::::
        // <div>
        //     <Product showAddToCart={false} product={product}></Product>
        // </div>
    );
};

export default ProductDetail;