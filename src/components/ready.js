import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import pcdata from './media/pcdata.json';
import './Menu.css';
import { motion } from 'framer-motion';
import gaming1 from './media/gaming1.png'
import logo from './media/Pkrama.png'
import {useSelector,useDispatch} from "react-redux";
import { Provider } from 'react-redux';
import { addToCart,removeFromCart } from './reducers';
import {useNavigate} from 'react-router-dom';
import Header from "./header"; 
const Ready = () =>{
  
    const navigate = useNavigate();
    const cart = useSelector((state) => state.cart.cart);
    const dispatch = useDispatch();
    const addCompToCart = () =>{
      dispatch(addToCart(selectedPC))
      handleGoToCart();
    }
    console.log(cart);
    const isCustom = false;
    const handleGoToCart = () => {
      navigate( "/ShoppingCart", {state: {isCustom} });
    };
    const [selectedTheme, setSelectedTheme] = useState(null);
    const [selectedPC, setSelectedPC] = useState(null);
    const [indexOfPc, setIndexOfPc] = useState(null);
    const handleThemeSelect = (theme) => {
      setSelectedTheme(theme);
      setSelectedPC(null); // Сброс выбора ПК при выборе тематики
    };
  
    const handlePCSelect = (pc,index) => {
      setSelectedPC(pc);
      setIndexOfPc(index)
    };

    const handleBackToOptions = () => {
        setSelectedPC(null); // Сброс выбора ПК
      };    
      const handleBackToTheme = () =>{
        setSelectedTheme(null)
      }
      const pageVariants = {
        initial: { opacity: 0, x: -50 },
        animate: { opacity: 1, x: 0, transition: { duration: 0.5 } },
        exit: { opacity: 0, x: -50 }
      };
    
      const imageVariants = {
        hover: { scale: 1.1 },
      };
    
      return (
        <motion.div
          initial="initial"
          animate="animate"
          exit="exit"
          variants={pageVariants}
        >
      <div>
        <Header/>
        {selectedTheme === null ? (
          <div className="theme-options">
            {Object.keys(pcdata).map((theme) => (
              <div key={theme} className="theme-option" onClick={() => handleThemeSelect(theme)}>
                <img className='pc-image'src={require(`./media/${theme}.png`)} alt={theme} />
                <h3>{theme}</h3>
              </div>
            ))}
            <Link to='/'>
            <button className='button-5' style={{marginTop: 5 + '%'}}>Вернуться к меню</button>
            </Link>
          </div>
          
        ) : selectedPC === null ? (
          <motion.div
          initial="initial"
          animate="animate"
          exit="exit"
          variants={pageVariants}
        >
          <div className="pc-options">
            {pcdata[selectedTheme].map((pc, index) => (
              <div key={index} className="pc-option">
                <img className= 'pc-image'src={require(`./media/${selectedTheme}${index + 1}.png`)} alt={pc.name} />
                <h4>{pc.name}</h4>
                <h4>{pc.price}</h4>
                <button className='button-5' onClick={() => handlePCSelect(pc,index)}>Характеристики</button>
              </div>
            ))}
            <button style={{marginTop: 5 + '%'}} onClick={handleBackToTheme} className='button-5' >Вернуться к выбору темы</button>
          </div>
          </motion.div>
        ) : (
          <div className="pc-details">
            <img className='pc-details-photo' src={require(`./media/${selectedTheme}${indexOfPc + 1}.png`)} alt={selectedTheme} />
            <div className='pc-things'>
            <p className='details'>Процессор: {selectedPC.processor}</p>
            <p className='details'>Количество ядер процессора: {selectedPC.processorCores}</p>
            <p className='details'>Тактовая частота процессора: {selectedPC.processorClockSpeed}</p>
            <p className='details'>Видеокарта: {selectedPC.graphicsCard}</p>
            <p className='details'>VRAM видеокарты: {selectedPC.graphicsCardVRAM}</p>
            <p className='details'>Оперативная память: {selectedPC.memoryType}, {selectedPC.memorySize}</p>
            <p className='details'>Тип хранилища: {selectedPC.storageType}</p>
            <p className='details'>Объем хранилища: {selectedPC.storageSize}</p>
            <p className='details'>Размеры корпуса: {selectedPC.caseDimensions}</p>
            <p className='details'>Материнская плата: {selectedPC.motherboardModel}</p>
            <p className='details'>Дополнительные характеристики материнской платы: {selectedPC.motherboardFeatures}</p>
            <p className='details'>Блок питания: {selectedPC.powerSupplyModel}</p>
            <p className='details'>Мощность блока питания: {selectedPC.powerSupplyWattage}</p>
            <p className='details'>Цена: {selectedPC.price}</p>
            <button className='button-5' onClick={handleBackToOptions}>Вернуться к выбору ПК</button>
             <button onClick={addCompToCart} className='button-5' id='tocartbtn'>В корзину</button> 
            </div>
          </div>
        )}
      </div>
      </motion.div>
    );
  }
export default Ready;