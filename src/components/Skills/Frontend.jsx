import React from 'react';

const Frontend = () => {
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
            { name: 'React', level: 'Intermediate' },
          ].map((skill) => (
            <div className="skills_data" key={skill.name}>
              <i className="bx bx-badge-check"></i>
              <div>
                <h3 className="skills_name">{skill.name}</h3>
                <span className="skills_level">{skill.level}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Frontend;
