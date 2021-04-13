import React, { useState } from 'react';
import fakeData from '../../fakeData'
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const first10 = fakeData.slice(0, 10);
    const [products, setProducts] = useState(first10);
    const [cart, setCart] = useState([])
    const handleAddCart = (prod) => {
        const newCart = [...cart, prod];
        setCart(newCart);
    }
    return (
        <div className="shop-container">
            <div className="all-cart">
                <ul>
                    {
                        products.map(product => <Product product={product} handleAddCart={handleAddCart}
                        ></Product> )
                        
                    }
                </ul>
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;