import React from 'react';
import { Link,useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Menu.css';
import logo from './media/Pkrama.png';
import cart_img from './media/cart.png';
import home from './media/home.png';


const Header = () => {
  const buttonVariants = {
    hover: { scale: 1.1 },
  };
  const isCustom = null;
  const navigate = useNavigate();
  const handleGoToCart = () => {
    navigate( "/ShoppingCart", {state: {isCustom} });
  };
  return (
      <div className="header">
        <motion.img className="logo" src={logo} variants={buttonVariants} />
        <motion.img className='cart' src={cart_img} variants={buttonVariants} onClick={handleGoToCart}/>
        <Link to='/'><motion.img className='home' src={home} variants={buttonVariants}/></Link>
      </div>
    )
}

export default Header;