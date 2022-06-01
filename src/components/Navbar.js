import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Addproduct from './Addproduct';
import Cart from './Cart';

const Navbar = () => {
    const items = useSelector((state) => state.cart);
    return (
        <div
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
            }}
        >

            <div>
                <Link className="navLink" to="/">
                    Home
                </Link>
                <Link className="navLink" to="/addproduct">
                    Addproduct
                </Link>
                <Link className="navLink" to="/cart">
                    Cart
                </Link>
                <span className="cartCount">Cart items: {items.length}</span>
            </div>
        </div>
    );
};

export default Navbar;