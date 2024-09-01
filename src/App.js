import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/header/Header.jsx";
import Home from "./components/home/Home.jsx";
import About from "./components/about/About.jsx";
import Skills from "./components/Skills/Skills.jsx"
import Qualification from "./components/qualification/Qualification.jsx";
import Work from "./components/work/Work.jsx";
import Contact from "./components/contact/Contact.jsx";
import Footer from "./components/footer/Footer.jsx";
import ScrollUp from "./components/scrollUp/ScrollUp.jsx"

function App() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.body.classList.add(theme === "light" ? "for_light_theme" : "for_dark_theme");
    return () => {
      document.body.classList.remove(theme === "light" ? "for_light_theme" : "for_dark_theme");
    };
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <>
      <Header toggleTheme={toggleTheme} theme={theme} />
      <main className="main">
        <Home />
        <About />
        <Skills/>
        <Qualification/>
        <Work/>
        <Contact/>
      </main>
      <Footer/>
      <ScrollUp/>
    </>
  );
}

export default App;

