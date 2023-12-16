import { useSelector, useDispatch } from 'react-redux';
import React, { useState } from 'react';
import { removeFromCart, clearTheCart } from './reducers';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
import { saveAs } from 'file-saver';

const CheckoutPage = () => {
  const cart = useSelector((state) => state.cart.cart);
  const [Value, SetValue] = useState();
  const dispatch = useDispatch();
  const [formIsComplete, SetFormIsComplete] = useState(false);
  const HandleCompleteCheckout = (cart, formData) => {
    Complete();
    saveFormDataToJson(formData);
    dispatch(clearTheCart(cart));
    console.log(formIsComplete);
  };
  console.log(formIsComplete);
  const saveFormDataToJson = (formData) => {
    const customerInfo = {
      fullName: formData.fullName,
      phoneNumber: formData.phoneNumber,
      address: formData.address,
      email: formData.email,
      cart: cart,
    };

    const jsonData = JSON.stringify(customerInfo, null, 2);

    // Save JSON data to a file using FileSaver.js
    const blob = new Blob([jsonData], { type: 'application/json' });
    saveAs(blob, 'customer_info.json');

    console.log('Данные сохранены в customer_info.json');
  };

  const Complete = () => {
    SetFormIsComplete(true);
  };

  return (
    <div className="app-container">
      <div className="row">
        <div className="col no-gutters">
          {formIsComplete === false ? (
            <BuyerForm SetComplete={Complete} setValue={SetValue} value={Value} onComplete={(formData) => HandleCompleteCheckout(cart, formData)} />
          ) : (
            <Checkout />
          )}
        </div>
      </div>
    </div>
  );
};

const Checkout = (props) => (
  <div className="checkout">
    <div className="checkout-container">
      <h3 className="heading-3">Credit card checkout</h3>
      <Input label="Имя владельца" type="text" name="name" />
      <Input label="Номер карты" type="number" name="card_number" imgSrc="https://seeklogo.com/images/V/visa-logo-6F4057663D-seeklogo.com.png" />
      <div className="row">
        <div className="col">
          <Input label="Действует до" type="month" name="exp_date" />
        </div>
        <div className="col">
          <Input label="CVV" type="number" name="cvv" />
        </div>
      </div>
      <Link to="/">
        <Button text="Place order" />
      </Link>
    </div>
  </div>
);

const Input = (props) => (
  <div className="input">
    <label>{props.label}</label>
    <div className="input-field">
      <input type={props.type} name={props.name} />
    </div>
  </div>
);

const Button = (props) => (
  <button className="checkout-btn" type="button" onClick={props.onSubmit}>
    {props.text}
  </button>
);

const BuyerForm = ({ SetComplete, setValue, value, onComplete }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    address: '',
    email: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Отправленная форма:', formData);
    SetComplete();
    // onComplete(formData); 
  };

  return (
    <div className="checkout">
      <div className="checkout-container">
        <h3 className="heading-3">Введите свою информацию</h3>
        <Input label="ФИО" type="text" name="fullName" onChange={handleChange} />
        <Input label="Адрес" type="text" name="address" onChange={handleChange} />
        <div className="row">
          <div className="col">
            <Input label="Email" type="text" name="email" onChange={handleChange} />
          </div>
          <PhoneInput placeholder="Введите номер телефона" value={value} onChange={setValue} />
        </div>
        <Button text="Place order" onSubmit={handleSubmit} />
      </div>
    </div>
  );
};

export default CheckoutPage;
