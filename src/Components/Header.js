
import React from "react";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import LanguageIcon from '@mui/icons-material/Language';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {Link} from "react-router-dom"



import "./Header.css"; // Make sure to provide the correct path to your CSS file

const Header = () => {
  return (
    <div className="header">
    <Link to="/">
      <img
        className="header__icon"
        src="https://cdn-icons-png.flaticon.com/512/2111/2111320.png"
        alt=""
      />
      </Link>
      
      {/* Center section with search input */}
      <div className="header__center">
        <input type="text" />
        <ManageSearchIcon/>
       
      </div>
      
      {/* Right-aligned section */}
      <div className="header__right">
        <p>Become a host</p>
        <LanguageIcon/>
        <AccountCircleIcon/>

      
        <ExpandMoreIcon />
       
       
      </div>
    </div>
  );
};

export default Header;
