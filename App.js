import React, { useState } from "react";
import "./App.css";
import NavBar from "./Screens/NavBar";
import Home from "./Screens/Home";
import Footer from "./Screens/Footer";
import About from "./Screens/About";
import Gallery from "./Screens/Gallery";
import Contact from "./Screens/Contact";

function App() {
  const [home, setHome] = useState(true);
  const [about, setAbout] = useState(false);
  const [gallery, setGallery] = useState(false);
  const [contact, setContact] = useState(false);

  const goToHome = (homePage) => {
    setHome(homePage);
  }
  
  const goToAbout = (aboutPage) => {
    setAbout(aboutPage);
  }

  const goToGallery = (galleryPage) => {
    setGallery(galleryPage);
  }

  const goToContact = (contactPage) => {
    setContact(contactPage);
  }

  let content = <Home 
                  onHome={goToHome}
                  onAbout={goToAbout}
                  onGallery={goToGallery}
                  onContact={goToContact}
                />;

  if(home && !about && !gallery && !contact){
    content = <Home 
                onHome={goToHome}
                onAbout={goToAbout}
                onGallery={goToGallery}
                onContact={goToContact}
              />;
  }

  if(!home && about && !gallery && !contact){
    content = <About />;
  }

  if(!home && !about && gallery && !contact){
    content = <Gallery />;
  }

  if(!home && !about && !gallery && contact){
    content = <Contact />;
  }

  return (
    <div className="App">
      <NavBar 
        onHome={goToHome}
        onAbout={goToAbout}
        onGallery={goToGallery}
        onContact={goToContact}
      />
      {content}
      <Footer />
    </div>
  );
}

export default App;
