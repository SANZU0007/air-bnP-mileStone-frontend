import React from "react";
import "./cart.css"
import { useNavigate } from "react-router-dom";


const Card = ({ src, title, description, price }) => {

  const navigate = useNavigate();

  const handleClick = () => {
    
    navigate("/login"); 
  };
  return (
  
    <div className="card">
      <img src={src} alt="" />
      <div className="card__info">
        <h2>{title}</h2>
        <h4>{description}</h4>

        <br></br>
        <br></br>
       
        <button className="btn1" onClick={handleClick}>{price}</button>

       
      </div>
      
    </div>
  );
};

export default Card;
