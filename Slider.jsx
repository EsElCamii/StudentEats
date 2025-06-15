import React, { useEffect, useState } from "react";
import "./Slider.css";
import items from './items';

const Slider = ({ addToCart }) => {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const navItems = document.querySelectorAll(".options-menu a");
    navItems.forEach((navItem, index) => {
      navItem.addEventListener("click", function (event) {
        event.preventDefault();
        navItems.forEach((item) => item.classList.remove("active"));
        this.classList.add("active");
        setActiveSlide(index);

        const sliderWrapper = document.querySelector(".slider-wrapper");
        sliderWrapper.style.transform = `translateX(-${index * 33.33}%)`;
      });
    });
  }, []);

  return (
    <div>
      <div className="options-menu" id="menu">
        <a className="active options-menu-text">Comida</a>
        <a className="options-menu-text">Bebidas</a>
        <a className="options-menu-text">Snacks</a>
      </div>
      <div className="slider-wrapper">
        {['slide-comida', 'slide-bebidas', 'slide-snacks'].map((slideType, index) => (
          <div id={slideType} className="slider-slide" key={index}>
            {items
              .filter((item) => item.slide === slideType)
              .map((item, idx) => (
                <div key={idx} className="item">
                  <img src={item.photo} alt={item.name} />
                  <div className="item-content">
                    <div className="item-header">
                      <h3>{item.name}</h3>
                      <span className="price">{item.price}</span>
                    </div>
                    <p>{item.description}</p>
                    <button className="add-to-cart" onClick={(e) => { e.preventDefault(); addToCart(item); }}>
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
