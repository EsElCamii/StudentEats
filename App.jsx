import React, { useState } from "react";
import NavBar from "./NavBar";
import LandingPage from "./LandingPage";
import Slider from "./Slider";
import Footer from "./Footer";
import SpecialPlate from "./SpecialPlate";
import "./App.css";

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [isCartVisible, setIsCartVisible] = useState(false);
  const [isBouncing, setIsBouncing] = useState(false);

  const handleAddToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
    setIsBouncing(true);
    setTimeout(() => setIsBouncing(false), 800);
  };

  const handleRemoveFromCart = (index) => {
    setCartItems((prevItems) => prevItems.filter((_, i) => i !== index));
  };

  const handleCartToggle = () => {
    setIsCartVisible((prevState) => !prevState);
  };

  const calculateTotalPrice = () => {
    return cartItems
      .reduce((total, item) => total + parseFloat(item.price.slice(1)), 0)
      .toFixed(2);
  };

  return (
    <div className="wrapper">
      <NavBar toggleCart={handleCartToggle} isBouncing={isBouncing} />
      <LandingPage />
      <Slider addToCart={handleAddToCart} />
      <SpecialPlate addToCart={handleAddToCart} />
      <Footer />
      {isCartVisible && (
        <>
          <div className="overlay" onClick={handleCartToggle}></div>
          <div className="cart-popup">
            <span className="close-popup" onClick={handleCartToggle}>×</span>
            <h2 className="cart-header">Your Cart</h2>
            <div className="cart-items">
              {cartItems.map((item, index) => (
                <div className="cart-item" key={index}>
                  <div className="cart-item-content">
                    <div className="item-info">
                      <h3>{item.name}</h3>
                      <span className="price">{item.price}</span>
                    </div>
                    <p>{item.description}</p>
                    <button className="remove-from-cart" onClick={() => handleRemoveFromCart(index)}>
                      Remove
                    </button>
                  </div>
                  <img src={item.photo} alt={item.name} className="cart-item-img-right" />
                </div>
              ))}
            </div>
            <div id="popup-footer">
              <div className="schedule-container">
                <div id="schedule-food">
                  <p className="schedule-label">Programar:</p>
                  <input type="date" className="schedule-input" />
                  <input type="time" className="schedule-input" />
                </div>
              </div>
              <div className="cart-total-wrapper">
                <div className="cart-total">
                  Total: ${calculateTotalPrice()}
                </div>
                <button id="orderButton">Order</button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default App;
