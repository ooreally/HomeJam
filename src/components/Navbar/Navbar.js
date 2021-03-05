import React from 'react';
import logo from '../../assets/images/logo.png';
import basket from '../../assets/images/basket.svg';
import hamburger from '../../assets/images/Hamburger.svg';
import search from '../../assets/images/search.png';
const Navbar = () => {
   return(
    <div className="navbar">
    <img src={logo} className="App-logo" alt="logo" />
    <img src={hamburger} className= "hamburger" alt="hamburger"/>
    <img src={basket} className= "basket" alt="basket"/>
    <a href="#">Account</a>
    <a href="#">Help</a>
    <a href="#">Search</a>
    <img src={search} className= "search" alt="search"/>
    </div>
    
   ); 
};

export default Navbar;