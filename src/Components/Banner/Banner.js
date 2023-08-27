
import React, { useState } from "react";

import Search from "../Search/Search";
import { Link } from "react-router-dom";
import "./Banner.css"

const Banner = () => {
  
  const [showSerach, setShowSerach] = useState(false);
  return (
    <div className="banner">
      <div className="banner__search">
        <button
          className="banner__searchButton"
          variant="outlined"
          onClick={() => setShowSerach((prev) => !prev)}
        >
          {showSerach ? "Hide" : "Search Dates"}
        </button>
        
        {showSerach && <Search />}
      </div>
      <div className="banner__info">
        <h1>Get out and stretch your imagination</h1>
        <h5>
          Plan a different kind of getaway to uncover the hidden gems near you
        </h5>
       <button className="btn">
      <Link to="/Search">Explore Nearby</Link>
      </button>
     
    
      </div>
      <img src="https://images.pexels.com/photos/2581922/pexels-photo-2581922.jpeg?auto=compress&cs=tinysrgb&w=400"></img>
    </div>
  );
};

export default Banner;