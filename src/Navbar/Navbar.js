import React from 'react';
import "./Navbar.css";

const Navbar = ({ openModal, cart }) => {
    return (
        <div className="navbar">
            <h1>Kopa Samsu Store</h1>
            <button onClick={openModal}>Cart <sup>{cart.length}</sup></button>
        </div>
    );
};

export default Navbar;