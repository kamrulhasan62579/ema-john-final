import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData'
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'
import { addToDatabaseCart, getDatabaseCart } from '../../utilities/databaseManager';
import { Link } from 'react-router-dom';

const Shop = () => {
    const first10 = fakeData.slice(0, 10);
    const [products, setProducts] = useState(first10);
    const [cart, setCart] = useState([])
    useEffect(() => {
        const savedCart = getDatabaseCart()
        const productKeys = Object.keys(savedCart)
        const cartProducts = productKeys.map(key => {
            const product = fakeData.find(pd => pd.key === key)
            product.quantity = savedCart[key];
            return product;
            console.log(product);
        })
        setCart(cartProducts)
        // console.log(productKeys );
    })
    const handleAddCart = (prod) => {
        const sameProduct = cart.find(pd => pd.key === prod.key)
        let count = 1 ;
        let newCart;
        if (sameProduct) {
            count = sameProduct.quantity + 1;
            sameProduct.quantity = count ;
            const others = cart.filter(pd => pd.key !== prod.key)
            newCart = [...others, sameProduct];
        }
        else{
            prod.quantity = 1;
            newCart = [...cart, prod]
        }
        setCart(newCart);
        // console.log(cart);
        addToDatabaseCart(prod.key, count)
    }
    return (
        <div className="shop-container">
            
            <div className="all-cart">
                <ul>
                    {
                        products.map(product => <Product showAddToCart={true} product={product} handleAddCart={handleAddCart}
                        ></Product> )
                        
                    }
                </ul>
            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                    <Link to="/review"><button  className="add-btn">Review Products</button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Shop;