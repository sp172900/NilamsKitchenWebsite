import React from "react";

function ImageBackground() {
  return (
    <div style={{height: window.innerHeight - 88, display: "flex", overflow: "hidden"}}>
        <div>
            <img 
                src={require("../Images/unicornCake.jpg")} 
                width={window.innerWidth / 3} 
                height={window.innerHeight - 88} 
                alt="unicorn cake">
            </img>
        </div>
        <div>
            <div>
                <img 
                    src={require("../Images/poolCake.jpg")}
                    width={window.innerWidth / 3} 
                    height={(window.innerHeight - 30) / 2} 
                    alt="pool cake">
                </img>
            </div>
            <div style={{width: window.innerWidth / 3, height: "300px", display: "grid", gridTemplateColumns: "50% 50%", marginTop: -20}}>
                <img 
                    src={require("../Images/roseCake.jpg")} 
                    width={window.innerWidth / 6} 
                    height={(window.innerHeight - 100) / 2} 
                    alt="rose cake">
                </img>
                <img 
                    src={require("../Images/m&mCake.jpg")} 
                    width={window.innerWidth / 6} 
                    height={(window.innerHeight - 100) / 2} 
                    alt="m&m cake">
                </img>
            </div>
        </div>
        <div>
            <img 
                src={require("../Images/strawberryPockyCake.jpg")} 
                width={window.innerWidth / 3} 
                height={window.innerHeight - 60} 
                alt="pocky cake">
            </img>
        </div>
    </div>
  );
}

export default ImageBackground;