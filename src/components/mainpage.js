import React, { useRef, useState,useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import logo from './media/Pkrama.png'
import {TiChevronLeft, TiChevronRight} from "react-icons/ti"
import { Switch, Route, Link,useNavigate} from 'react-router-dom';
import { motion,AnimatePresence } from "framer-motion";
import Header from "./header"; 

const data = [
  {
    name: `Павел Лабко`,
    img: `labko.jpg`,
    review: `Сервис на высшем уровне! Я давно мечтал о мощном игровом компьютере и вот наконец, накопив денег решил заказать его у ПКрамы, не прогадал 10/10!`
  },
  {
    name: `Иван Крючков`,
    img: `vania.jpg`,
    review: `У меня 2 страсти - Пиво и 3д моделирование, теперь благодаря компьютеру от этой фирмы я могу зарабатывать больше денег на 3д моделировании и покупать больше пива!`
  },
  {
    name: `Ольга Кухарева`,
    img: `kyxapka.jpg`,
    review: `Купила своему солнешку Максику компьютер для учебы, он очень рад, говорит что RX4080 самое то для Visual Studio`
  },
  {
    name: `Роман Панда`,
    img: `roma.jpg`,
    review: `Купил ПК для видеомонтажа и аудиомонтажа, все надежно, быстро и эффективно. Все летает как вертолеты в варкрафте`
  },
  {
    name: `Надежда Жиляк`,
    img: `legend.jpg`,
    review: `Закупали компьютеры для нашей кафедры тут! Самый красивый веб-сайт за всю мою каръеру преподования и лучшый сервис в мире. 12/10`
  },
  
];

const images = [
  'slide0',
  'slide1',
  'slide2',
]

const variants = {
  initial: direction => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      // scale: 0.5,
    }
  },
  animate: {
    x: 0,
    opacity: 1,
    // scale: 1,
    // transition: 'ease-in',
    transition: {
      x: { type: 'spring', stiffness: 300, damping: 30 },
      opacity: { duration: 0.2 },
    },
  },
  exit: direction => {
    return {
      x: direction > 0 ? -1000 : 1000,
      opacity: 0,
      // scale: 0.5,
      // transition: 'ease-in',
      transition: {
        x: { type: 'spring', stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 },
      },
    }
  },
}


function AboutBusiness() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [ToShow, setToShow] = useState(3); 
  const [screenSize, setScreenSize] = useState(getCurrentDimension());

  function getCurrentDimension() {
    return {
      width: window.innerWidth,
      height: window.innerHeight,
    };
  }

  useEffect(() => {
    const updateDimension = () => {
      setScreenSize(getCurrentDimension());
    };

    window.addEventListener('resize', updateDimension);

    return () => {
      window.removeEventListener('resize', updateDimension);
    };
  }, []);

  useEffect(() => {
    handleScreenWidth(); 


    const handleResize = () => {
      setScreenSize(getCurrentDimension());
      handleScreenWidth();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); 

  const handleScreenWidth = () => {
    if (screenSize.width < 600) {
      setToShow(1); 
    } else {
      setToShow(3);
    }
  };
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: ToShow,
    slidesToScroll: 1
  };
  function nextStep() {
    setDirection(1)
    if (index === images.length - 1) {
      setIndex(0)
      return
    }
    setIndex(index + 1)
  }

  function prevStep() {
    setDirection(-1)
    if (index === 0) {
      setIndex(images.length - 1)
      return
    }
    setIndex(index - 1)
  }
  const autoPlay = () => {
    const intervalId = setInterval(() => {
      nextStep();
    }, 8000);

    return () => clearInterval(intervalId);
  };
  const isCustom = null;
  const navigate = useNavigate();
  const handleGoToCart = () => {
    navigate( "/ShoppingCart", {state: {isCustom} });
  };
  useEffect(autoPlay, [index]);
  return(
    <div style={{backgroundColor:'white'}}>
      <Header/>
      <div className="sales_main">
      <div className='slideshow'>
        <AnimatePresence initial={false} custom={direction}>
          <motion.img
            variants={variants}
            animate='animate'
            initial='initial'
            exit='exit'
            src={require(`./media/${images[index]}.png`)}
            alt='slides'
            className='slides'
            key={images[index]}
            custom={direction}
          />
        </AnimatePresence>
        <button className='prevButton' id="button_slide" onClick={prevStep}>
          ◀
        </button>
        <button className='nextButton' id="button_slide" onClick={nextStep}>
          ▶
        </button>
      </div>
      </div>
      <div className="wildcard">
        <img  src={logo} alt='PKrama' className="pkrama"/>
        <h1>PKrama</h1>
        <p>Лучший магазин компьютерной техники в Минске. Мы предлагаем широкий ассортимент товаров для всех видов деятельности, а так же сами собираем товары по доступной цене и с премиальном качеством</p>
      </div>
      <div className="menu">
        <div className="row_menu">
        <Link to='/custom'>
        <div className="block_menu">

          <img className="main_menu_img" src={require('./media/custom_white.png')}/>
          <p>Собрать свой ПК</p>

        </div>
        </Link>
        <Link to='/ready'>
        <div className="block_menu">

          <img className="main_menu_img" src={require('./media/ready_white.png')}/>
          <p>Выбрать нашу сборку ПК</p>

        </div>
        </Link>
        </div>
        <div className="row_menu">

        <div className="block_menu" onClick={handleGoToCart}>
  
          <img className="main_menu_img" src={require('./media/cart.png')}/>
          <p>Корзина</p>

        </div>
        <Link to='/'>
        <div className="block_menu">

          <img className="main_menu_img" src={require('./media/home.png')}/>
          <p>Главная страница</p>

        </div>
        </Link>
        </div>
      </div>
      <div className="wildcard-small">
      <div className='app'>
      <div className='wrap_reviews'>
      <div className="anatha_wrap">
      <Slider {...settings}>
        {data.map((d) => (
          <div key={d.name} className="review_card">
            <div className='img_wrap_review'>
              <img  src={require(`./media/${d.img}`)} alt="" className="img_review_lol"/>
            </div>

            <div className="review_content">
              <p className="text_xl" style={{fontSize:'16px',fontWeight:'bold'}}>{d.name}</p>
              <p className="text_center">{d.review}</p>
            </div>
          </div>
        ))}
      </Slider>
      </div>
      
    </div>
    </div>
    </div>
      </div> 
  );
}

export default AboutBusiness;
