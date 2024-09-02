import React from 'react';
import Nodejs from "../../assets/icons/nodejs1.png";
import Expressjs from "../../assets/icons/express.png";
import GitHub from "../../assets/icons/github1.png";
import MongoDB from "../../assets/icons/mongodb.png";
import MySQL from "../../assets/icons/mysql.png";
import Python from "../../assets/icons/python.png";

function Backend() {
  const skillImages = {
    Nodejs: Nodejs,
    Expressjs: Expressjs,
    GitHub: GitHub,
    MongoDB: MongoDB,
    MySQL: MySQL,
    Python: Python,
  };

  return (
    <div className="skills_content">
      <h3 className="skills_title">Backend Developer</h3>
      <div className="skills_box">
        <div className="skills_group">
          {[
            { name: 'Nodejs', level: 'Basic' },
            { name: 'Expressjs', level: 'Intermediate' },
            { name: 'GitHub', level: 'Intermediate' },
            { name: 'MongoDB', level: 'Intermediate' },
            { name: 'MySQL', level: 'Basic' },
            { name: 'Python', level: 'Basic' },
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
}

export default Backend;
