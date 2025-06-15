import React from "react";
import "./SpecialPlate.css";

const SpecialPlate = ({ addToCart }) => {
  const specialPlate = {
    photo: "https://editorialtelevisa.brightspotcdn.com/dims4/default/f1c06c5/2147483647/strip/true/crop/560x560+220+0/resize/1000x1000!/quality/90/?url=https%3A%2F%2Fk2-prod-editorial-televisa.s3.us-east-1.amazonaws.com%2Fbrightspot%2Fwp-content%2Fuploads%2F2019%2F05%2Fenchiladas-verdes.png",
    name: "Enchiladas",
    description: "Saboree nuestras auténticas enchiladas llenas de delicadas especias y cubiertas de rico queso derretido. Cada bocado está lleno de sabores vibrantes, ofreciendo una mezcla satisfactoria de ingredientes frescos envueltos en una tortilla perfectamente tostada.",
    price: "$35",
  };

  return (
    <div id="specialPlate">
      <div className="banner-wrapper">
        <div className="banner"> plato del día</div>
      </div>
      <div className="special-plate">
        <img src={specialPlate.photo} alt={specialPlate.name} className="special-plate-img" />
        <div className="special-plate-info">
          <h3>{specialPlate.name}</h3>
          <p className="special-plate-description">{specialPlate.description}</p>
          <div className="special-plate-actions">
            <span className="price">{specialPlate.price}</span>
            <button className="add-to-cart" onClick={(e) => { e.preventDefault(); addToCart(specialPlate); }}>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialPlate;
