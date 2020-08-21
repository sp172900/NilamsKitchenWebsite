import React from "react";
import "../App.css";

function Home(props) {
  return (
    <div className="Home" style={{width: window.innerWidth, height: window.innerHeight - 88}}>
        <div className="infoBox">
            <h1 style={{color: "white", letterSpacing: "1px"}}>Cakes & Catering!</h1>
            <button 
                style={{
                    width: "150px", 
                    height: "50px", 
                    backgroundColor: "#038f0a", 
                    color: "white",
                    opacity: 1.0,
                    borderColor: "#026b07",
                    borderWidth: "3px",
                    borderStyle: "solid",
                    fontWeight: "bold",
                    fontSize: "15px",
                    letterSpacing: "2px"
                }}
                onClick={() => {
                    props.onHome(false);
                    props.onAbout(true);
                    props.onGallery(false);
                    props.onContact(false);
                }}
            >LEARN MORE</button>
        </div>
    </div>
  );
}

export default Home;