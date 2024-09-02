import React, { useState } from "react";
import "./qualification.css";

function Qualification() {
const [toggleState,setToggleState]=useState(1);
const toggleTab = (index) => {
  setToggleState(index);
};

  return (
    <section className="skills section" id="skills">
      <div className="title-con">
        <h2 className="section_title">Qualification</h2>
        <span className="section_subtitle">My Personal Journey</span>
      </div>
      {/* details */}
      <div className="qualification_container container">
        <div className="qualification_tabs">
          <div className={
            toggleState===1
           ? "qualification_button qualification_active button--flex"
           : "qualification_button button--flex"
           }
           onClick={()=>toggleTab(1)}
           >
            <i className="uil uil-graduation-cap qualification_icon"></i>
            Education
          </div>

          <div className=   {toggleState===2
           ? "qualification_button qualification_active button--flex"
           : "qualification_button button--flex"
           }
           onClick={()=>toggleTab(2)}
           >
            <i className="uil uil-briefcase-alt qualification_icon"></i>{" "}
            Experience
          </div>
        </div>

        {/* qualification data */}
        <div className="qualification_sections">
          <div className={toggleState===1 ? 
            "qualification_content qualification_content-active"
            :"qualification_content"
          }>
            <div className="qualification_data">
              <div>
                <h3 className="qualification_title">Bachelor of Science in Computer Science</h3>
                <span className="qualification_subtitle">KFUEIT - Khwaja Fareed University of Engineering and Information Technology</span>
                <div className="qualification_calender">
                  <i className="uil uil-calendar-alt"></i> 2021 - 2025
                </div>
              </div>
              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>
            </div>

            {/* second */}
            <div className="qualification_data">
              <div></div>

              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>

              <div>
                <h3 className="qualification_title">Full Stack Web Development Course</h3>
                <span className="qualification_subtitle">Apna College</span>
                <div className="qualification_calender">
                  <i className="uil uil-calendar-alt"></i> 2023 - 2024
                </div>
              </div>
            </div>
          </div>
          {/* Data 22222222222222 */}
          <div className={toggleState===2 ? 
            "qualification_content qualification_content-active"
            :"qualification_content"
          }>
            <div className="qualification_data">
              <div>
                <h3 className="qualification_title">Mern Stack Developer</h3>
                <span className="qualification_subtitle">
                  Devicon - RYK
                </span>
                <div className="qualification_calender">
                  <i className="uil uil-calendar-alt"></i> 2024 - Present
                </div>
              </div>
              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>
            </div>

            {/* second */}
            <div className="qualification_data">
              <div></div>

              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>

              <div>
                <h3 className="qualification_title">Frontend Developer (Intern)</h3>
                <span className="qualification_subtitle">devSole - RYK</span>
                <div className="qualification_calender">
                  <i className="uil uil-calendar-alt"></i> 2023
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Qualification;
