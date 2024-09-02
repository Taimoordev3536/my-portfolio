import React from 'react';
import HTML from "../../assets/icons/html.png";
import CSS from "../../assets/icons/css.png";
import JavaScript from "../../assets/icons/js.png";
import Tailwind from "../../assets/icons/tailwindcss.png";
import Reactjs from "../../assets/icons/react.png";

const Frontend = () => {
  const skillImages = {
    HTML: HTML,
    CSS: CSS,
    JavaScript: JavaScript,
    Tailwind: Tailwind,
    Reactjs: Reactjs,
  };

  return (
    <div className="skills_content">
      <h3 className="skills_title">Frontend Developer</h3>
      <div className="skills_box">
        <div className="skills_group">
          {[
            { name: 'HTML', level: 'Advanced' },
            { name: 'CSS', level: 'Advanced' },
            { name: 'JavaScript', level: 'Intermediate' },
            { name: 'Tailwind', level: 'Basic' },
            { name: 'Reactjs', level: 'Intermediate' },
          ].map((skill) => (
            <div className="skills_data" key={skill.name}>
              <i className="bx bx-badge-check"></i>
              <div>
                <h3 className="skills_name">{skill.name}</h3>
                <span className="skills_level">{skill.level}</span>
              </div>
              <img src={skillImages[skill.name]} alt={`${skill.name} icon`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Frontend;
