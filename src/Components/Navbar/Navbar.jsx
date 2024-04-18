import React, { useState } from 'react';
import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png';
import { NavLink } from 'react-router-dom';
import "./Navbar.css";

function Navbar() {
    const [menu, setMenu] = useState("shop");

    const navOptions = (
        <div className='navbar'>
            <div className="nav-logo">
                <img src={logo} alt="logo" />
                <p>Shopper</p>
            </div>
            
            <ul className='nav-menu'>
                <li onClick={() => setMenu("shop")}><NavLink to="/">Shop</NavLink>{menu === "shop" ? <hr /> : null}</li>
                <li onClick={() => setMenu("mens")}><NavLink to="/mens">Mens</NavLink>{menu === "mens" ? <hr /> : null}</li>
                <li onClick={() => setMenu("womens")}><NavLink to="/womens">Womens</NavLink>{menu === "womens" ? <hr /> : null}</li>
                <li onClick={() => setMenu("kids")}><NavLink to="/kids">Kids</NavLink>{menu === "kids" ? <hr /> : null}</li>
            </ul>
            <div className="nav-login-cart">
                <NavLink to="/login"><button>Login</button></NavLink>
                <NavLink to="/cart"><img src={cart_icon} alt="cart-icon" /></NavLink>
                <div className="nav-cart-count">0</div>
            </div>
        </div>
    );

    return navOptions;
}

export default Navbar;
