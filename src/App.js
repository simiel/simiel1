import Nav from './components/Nav';
import Home from './components/Home';
import Footer from './components/Footer';
import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import './App.css';

function App() {

  const [toggleMobileMenu, setToggleMobileMenu] = useState(false);

  function mobileMenu() {
    toggleMobileMenu ? setToggleMobileMenu(false) : setToggleMobileMenu(true);
  }

  return (
    <div className="App">
      <div className='first-left-column'>
        <button className="menu-button" onClick={mobileMenu}>
          <AiOutlineMenu />
        </button>
      </div>
      <Nav />
      <div className='second-left-column'></div>
      <Home />
      <div className='third-left-column'></div>
      <Footer />
    </div>
  );
}

export default App;
