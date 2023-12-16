import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Ready from './components/ready';
import Custom from './components/custom';
import AboutBusiness from './components/mainpage';
import ComponentCatalog from './components/ComponentCatalog';
import SummaryPage from './components/SummaryPage';
import { Provider } from 'react-redux';
import store from "./components/store";
import ShoppingCart from "./components/ShoppingCart"
import CheckoutPage from './components/checkout';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function App() {
  return (
  <Provider store ={store}>
    <BrowserRouter>
      <Routes>
        <Route index element = {<AboutBusiness/>}/>
        <Route path="/ready" element={<Ready/>} />
        <Route path="/custom" element={<Custom/>} />
        <Route path="/ShoppingCart" element={<ShoppingCart/>} />
        <Route path="/checkout" element={<CheckoutPage/>} />
      </Routes>
    </BrowserRouter>
    </Provider>
  );
}

export default App;