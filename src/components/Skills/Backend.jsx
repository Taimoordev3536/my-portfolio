import React from 'react';

function Backend() {
  return (
    <div className="skills_content">
      <h3 className="skills_title">Backend Developer</h3>
      <div className="skills_box">
        <div className="skills_group">
          {[
            { name: 'Node.js', level: 'Basic' },
            { name: 'Express.js', level: 'Intermediate' },
            { name: 'Git', level: 'Intermediate' },
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
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Backend;
