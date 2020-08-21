import React from "react";
import "../App.css";

function NavBar(props) {

    const goHome = () => {
        props.onHome(true);
        props.onAbout(false);
        props.onGallery(false);
        props.onContact(false);
    }

    return (
        <div className="navBar">
            <div 
                style={{marginLeft: "0.2in"}}
                onClick={goHome}
            >
                <img 
                    src={require("../Images/NKLogo.png")} 
                    width="50px" 
                    height="50px" 
                    alt="logo">
                </img>
            </div>
            <div style={{display: "flex", alignItems: "center"}}>
                <h1 
                    style={{ color: "white", marginLeft: "0.2in", marginRight: "6.2in" }}
                    onClick={goHome}
                >Nilam's Kitchen</h1>
                <div className="navTabs" style={{width: window.innerWidth / 4}}>
                    <p 
                        style={{ color: "white" }} 
                        onClick={() => {
                            props.onHome(false);
                            props.onAbout(true);
                            props.onGallery(false);
                            props.onContact(false);
                        }}
                    >ABOUT US</p>
                    <p 
                        style={{ color: "white" }} 
                        onClick={() => {
                            props.onHome(false);
                            props.onAbout(false);
                            props.onGallery(true);
                            props.onContact(false);
                        }}
                    >GALLERY</p>
                    <p 
                        style={{ color: "white" }} 
                        onClick={() => {
                            props.onHome(false);
                            props.onAbout(false);
                            props.onGallery(false);
                            props.onContact(true);
                        }}
                    >CONTACT US</p>
                </div>
            </div>
        </div>
    );
}

export default NavBar;

