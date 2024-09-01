import React from "react";
import Works from "../work/Works.jsx";
import "./work.css"


function Work() {
  return (
    <section className="work section" id="portfolio">
         <div className="title-con">
      <h2 className="section__title">Portfolio</h2>
      <span className="section__subtitle">Most recent works</span>
      </div>

<Works/> 

    </section>
  );
}

export default Work;
