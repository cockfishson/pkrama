
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Switch, Route, Link } from 'react-router-dom';
import ComponentCatalog from './ComponentCatalog';
import SummaryPage from './SummaryPage';
import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeFromCart } from './reducers';
import { useNavigate } from 'react-router-dom';
import Header from "./header"; 
const Custom = () => {
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();
  const removeCompFromCart = (component) =>{
    dispatch(removeFromCart(component))
  }
  const handleSale = (component) =>{
    component.PriceOnSale = component.price * (1-component.sale/100);
    console.log(component.PriceOnSale)
  }
  const navigate = useNavigate(); 
  const isCustom = true;
  console.log(cart)
  const [selectedComponents, setSelectedComponents] = useState([]);
  const [totalPrice, setTotalPrice] = useState();
  const [checked,setCheched] = useState(false);
  const [itemsselected,setSelected] = useState(0);
  const [itemwasdeleted,setDeleted] = useState(false);
  const [reserve,setReserve] = useState(0);
  useEffect(() => {
    const total = selectedComponents.reduce((acc, component) => acc + component.price, 0);
    setTotalPrice(total);
  }, [selectedComponents]);
  const addCompToCart = (component) =>{
    dispatch(addToCart(component))
  }
  const handleComponentSelect = (component) => {
    setSelectedComponents((prevSelected) => [...prevSelected, component]);
    if(itemwasdeleted===true){
      setSelected(reserve)
      setDeleted(false)
    }
    else{
    setSelected(itemsselected + 1)
    setReserve(reserve +  1)
    }
    addCompToCart(component)
  };
  const handleGoToCart = () => {
    navigate( "/ShoppingCart", {state: {isCustom} });
  };
  const handleRemoveComponent = (component) => {
    const selectedtemp = selectedComponents.findIndex(obj => obj.name === component.name);
    console.log(selectedtemp);
    setDeleted(true)
    setSelectedComponents((prevSelected) =>
      prevSelected.filter((selected) => selected !== component)
    );
    setSelected(0)
    setSelected(selectedtemp)
    removeCompFromCart(component)
  };

  const handleAssembleForYou = () => {
    if(checked==false){
    setTotalPrice(totalPrice + 75);
    }
    else{
    setTotalPrice(totalPrice - 75)
    }
    setCheched(!checked)
  };

  const handleShippingOptionChange = (event) => {
    const option = event.target.value;

  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0, transition: { duration: 0.5 } }}
      exit={{ opacity: 0, x: -50 }}
    >
    <Header/>
    <div>
      <h2  style={{marginTop:'5%'}}>Сборка ПК</h2>

          <SummaryPage
            selectedComponents={selectedComponents}
            totalPrice={totalPrice}
            checked={checked}
            itemsselected = {itemsselected}
            onAssembleForYou={handleAssembleForYou}
            onShippingOptionChange={handleShippingOptionChange}
            handleRemoveComponent = {handleRemoveComponent}
            dispatch = {dispatch}
            cart = {cart}
            />
          <ComponentCatalog onComponentSelect={handleComponentSelect} itemsselected = {itemsselected} handleSale = {handleSale}/>
          <div>{itemsselected === 9?(
              <div>
                <button className='button-5' onClick={handleGoToCart}>Добавить в корзину</button>
              </div>
          ):(
            <div></div>
          )}
          </div>
    </div>
    </motion.div>
  );
};

export default Custom;
