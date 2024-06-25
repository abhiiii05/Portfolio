import React from "react";
import logo from './logo.svg';
import './App.css';
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Skills  from "./components/skills/Skills";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Scrollup from "./components/scrollup/Scrollup";

const App = () => {
  return (
      <>
        <Header />
        <main className='main'>
            <Home />
            <About />
            <Skills />
            <Contact />
        </main>
          <Footer />
          <Scrollup/>

      </>
  );
}

export default App;
