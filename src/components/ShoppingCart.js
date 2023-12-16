import { useSelector, useDispatch } from 'react-redux';
import React, { useState, useEffect } from 'react';
import { removeFromCart ,clearTheCart} from './reducers';
import { motion } from 'framer-motion';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import Header from "./header"; 
const ShoppingCart = () => {
  const location = useLocation();
  const CustomState = location.state.isCustom;
  var cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();
  const [totalPrice, setTotalPrice] = useState(0);
  const readypclol = cart[0];
  const navigate = useNavigate();
  const removeCompFromCart = (component) => {
    dispatch(removeFromCart(component))
  }
  const handleCheckout = () =>{
      navigate( "/checkout", {state: {CustomState} });
  }
  console.log(cart)
  console.log(CustomState)
  useEffect(() => {
    var total = cart?.reduce((acc, component) => acc + component.price, 0) + 75;
    setTotalPrice(total);
  }, [cart]);
  const pageVariants = {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, x: -50 }
  };
  const displayUi = () => {
    
    if (CustomState === true) {
      return (
        <motion.div
        initial="initial"
        animate="animate"
        exit="exit"
        variants={pageVariants}
      >
        <Header/>
        <div className='custom-cart'>
          <ul>
            {cart?.map((component, index) => (
              <li className='itemcart' key={index}>
                <h3>{component.category}</h3>
                <img className='imgcart' src={require(`./media/${component.image}.png`)} alt={component.name} />
                <p>{component.name} - {component.price}$</p>
                <button className='button-51' onClick={() => removeCompFromCart(component)}>
                  Удалить из корзины
                </button>
              </li>
            ))}
          </ul>
          <p>Общая цена - ${totalPrice}</p>
          <button className='button-5' onClick={() => handleCheckout()}>
                  Оформить заказ
          </button>
        </div>
        </motion.div>
      )
    }
    else if (CustomState === false) {
      return (
        <motion.div
        initial="initial"
        animate="animate"
        exit="exit"
        variants={pageVariants}
      ><Header/>
        <div className='ready-pc'>
          <img className='pc-details-photo' src={require(`./media/${readypclol.pic}.png`)} alt={readypclol.name} />
          <div className='pc-things'>
            <p className='componentsready'>Процессор: {readypclol.processor}</p>
            <p className='componentsready'>Количество ядер процессора: {readypclol.processorCores}</p>
            <p className='componentsready'>Тактовая частота процессора: {readypclol.processorClockSpeed}</p>
            <p className='componentsready'>Видеокарта: {readypclol.graphicsCard}</p>
            <p className='componentsready'>VRAM видеокарты: {readypclol.graphicsCardVRAM}</p>
            <p className='componentsready'>Оперативная память: {readypclol.memoryType}, {readypclol.memorySize}</p>
            <p className='componentsready'>Тип хранилища: {readypclol.storageType}</p>
            <p className='componentsready'>Объем хранилища: {readypclol.storageSize}</p>
            <p className='componentsready'>Размеры корпуса: {readypclol.caseDimensions}</p>
            <p className='componentsready'>Материнская плата: {readypclol.motherboardModel}</p>
            <p className='componentsready'>Дополнительные характеристики материнской платы: {readypclol.motherboardFeatures}</p>
            <p className='componentsready'>Блок питания: {readypclol.powerSupplyModel}</p>
            <p className='componentsready'>Мощность блока питания: {readypclol.powerSupplyWattage}</p>
            <p className='componentsready'>Цена: {readypclol.price}</p>
          </div>
          <Link to='/checkout'>
          <button className='button-5' onClick={() => handleCheckout()}>
                  Оформить заказ
          </button>
          </Link>
        </div>
        </motion.div>
      )
    }
    else {
      return (
        <div>
          <Header/>
          <h1 style={{marginTop:'6%'}}>Корзина пуста!</h1>
          <img className='empty_cart_img' src={require('./media/empty_cart.png')}/>
        </div>
      )
    }
  }

  return (
    displayUi()
  );
};

export default ShoppingCart; 