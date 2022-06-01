import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Addproduct from './Addproduct';
import Cart from './Cart';

const Navbar = () => {
    const items = useSelector((state) => state.cart);
    return (
        <div>

            <div>
                <Link className="navLink" to="/">
                   <li>Home</li> 
                </Link>
                <Link className="navLink" to="/addproduct">
                <li> Addproduct</li> 
                </Link>
                <Link className="navLink" to="/cart">
                <li> Cart</li> 
                </Link>
                <span className="cartCount">Cart items: {items.length}</span>
            </div>
        </div>
    );
};

export default Navbar;