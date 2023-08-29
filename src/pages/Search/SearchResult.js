import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

import React from "react";
import "./Searchresult.css";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const SearchResult = ({
  img,
  location,
  title,
  description,
  star,
  price,
  total,
}) => {
  const navigate = useNavigate();

  return (
    <div className="searchResult">
      <div className="image-home">
      <img src={img} alt="" /></div>
      <FavoriteBorderIcon id="serachResult__heart" />
      <div className="searchResult__info">
        <div className="searchResult__infoTop">
          <p>{location}</p>
          <h3>{title}</h3>
          <p>_____</p>
          <p>{description}</p>
        </div>
        <div className="searchResult__infoBottom">
          <div className="searchResult__stars">
         
            <p className="id">
            Room-Id....  {star}
            </p>
          </div>
          <div className="searchResult__price">
            <h2>{price}</h2>
            <Button variant="contained" onClick={() => navigate("/login")}>
              {total}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchResult;
