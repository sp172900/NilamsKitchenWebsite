import React from "react";
import "../App.css";

function Footer() {
  return (
    <footer 
        style={{
          width: window.innerWidth, 
          height: "0.3in",
          backgroundColor: "midnightblue", 
          color: "white", 
          display: "flex",
          alignItems: "center"
        }}
      >
        <div style={{marginLeft: window.innerWidth - 100}}>
          <a href="https://www.facebook.com/nilamskitchen/" target="_blank" rel="noopener noreferrer">
              <img 
                  src={require("../Images/facebook.png")} 
                  width="20px" 
                  height="20px" 
                  alt="facebook">
              </img>
          </a>
          <a href="https://www.instagram.com/nilamskitchen/" target="_blank" rel="noopener noreferrer">
              <img 
                  src={require("../Images/instagram.png")} 
                  width="20px" 
                  height="20px" 
                  style={{marginLeft: "0.2in"}}
                  alt="instagram">
              </img>
          </a>
        </div>
      </footer>
  );
}

export default Footer;