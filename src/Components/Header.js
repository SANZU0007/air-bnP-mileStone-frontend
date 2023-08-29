
import React from "react";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import LanguageIcon from '@mui/icons-material/Language';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {Link ,useNavigate,useLocation} from "react-router-dom"



import "./Header.css"; // Make sure to provide the correct path to your CSS file

const Header = () => {
  const location = useLocation();
  const userName = location.state?.userName;

  
  const history = useNavigate(); 

 
  const handleAccountIconClick = () => {
   
    history("/login");
  };
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
      
      {userName && (
          <p>{`Welcome, ${userName}!`}</p>
        )}
      
      {/* Right-aligned section */}
      <div className="header__right">
        <b></b>
        <LanguageIcon/>
        <AccountCircleIcon onClick={handleAccountIconClick}/>
        <ExpandMoreIcon/>

      
        
       
       
      </div>
    </div>
  );
};

export default Header;
