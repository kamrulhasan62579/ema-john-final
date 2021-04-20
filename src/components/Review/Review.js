import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import { getDatabaseCart, processOrder, removeFromDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import ProductItem from '../ProductItem/ProductItem';
import './Review.css'
import happyGiphy from '../../images/giphy.gif'

const Review = () => {
    
    const [cart, setCart] = useState([])
    // console.log(cart);
    useEffect(() => {
        const savedCart = getDatabaseCart()
        console.log(savedCart);
        const productKeys = Object.keys(savedCart);
        const cartProducts= productKeys.map(key => {
            const product = fakeData.find(pd => pd.key === key)
            console.log(product);
            product.quantity = savedCart[key];
            return product;
        })
        setCart(cartProducts)
        console.log(cartProducts);
    }, [])
    const handleRemoveCart = (key) => {
        // console.log('remove clicked', key);
        const others = cart.filter(pd => pd.key !== key);
        // console.log(others);
        
        setCart(others)
        removeFromDatabaseCart(key)
    }
    const [palceOrder, setPlaceOrder] =useState(false)
    const handlePlaceOrder = () => {
        setCart([]);
        setPlaceOrder(true)
        processOrder();
        // <img src={happyGiphy} alt=""/>

    }
    let thankyou;
    if (palceOrder) {
        thankyou = <img src={happyGiphy} alt=""/> 
    }
    return (
        <div className="shop-container">
            <div className="all-cart mBottom">
                {
                    cart.map(pd => <ProductItem handleRemoveCart={handleRemoveCart} product={pd}></ProductItem> )
                }
                {
                    thankyou
                }
            </div>
            <div className="cart-container">
                <Cart  cart={cart}>
                    <button  onClick={handlePlaceOrder} className="add-btn">Place Order</button>
                    
                </Cart>
            </div>
        </div>
    );
};

export default Review;