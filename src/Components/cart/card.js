import React from "react";
import "./cart.css"


const Card = ({ src, title, description, price }) => {
  return (
    <div className="card">
      <img src={src} alt="" />
      <div className="card__info">
        <h2>{title}</h2>
        <h4>{description}</h4>

        <br></br>
        <br></br>
       
        <button className="btn1">{price}</button>

       
      </div>
      
    </div>
  );
};

export default Card;
