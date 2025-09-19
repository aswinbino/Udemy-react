import React from "react";
import sale from "../assets/image/sale.jpg"; 

function Sale() {
  return (
    <div className="sale-image">
      <img src={sale} alt="Sale image" />

      <div className="sale-image__offer">
        <h2>Udemy Flash Sale – 24 hours to save!</h2>
        <p>Get the top courses for just ₹499</p>
      </div>
    </div>
  );
}

export default Sale;
