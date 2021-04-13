import React from 'react';
import './Header.css';
import logo from '../../images/logo.png'


const Header = () => {
    return (
        <div className='header-container'>
            <img src={logo} alt=""/>
            <nav>
               <ul>
               <li><a href="/shop">Shop</a></li>
                <li><a href="/review">Review</a></li>
                <li><a href="/manage">Manage</a></li>
               </ul>
            </nav>
        </div>
    );
};

export default Header;