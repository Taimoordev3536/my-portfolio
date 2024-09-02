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
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="var(--title-color)" width="30px" height="30px" id="graduation-cap" className="qualification_icon"><path  d="M21.49,10.19l-1-.55h0l-9-5-.11,0a1.06,1.06,0,0,0-.19-.06l-.19,0-.18,0a1.17,1.17,0,0,0-.2.06l-.11,0-9,5a1,1,0,0,0,0,1.74L4,12.76V17.5a3,3,0,0,0,3,3h8a3,3,0,0,0,3-3V12.76l2-1.12V14.5a1,1,0,0,0,2,0V11.06A1,1,0,0,0,21.49,10.19ZM16,17.5a1,1,0,0,1-1,1H7a1,1,0,0,1-1-1V13.87l4.51,2.5.15.06.09,0a1,1,0,0,0,.25,0h0a1,1,0,0,0,.25,0l.09,0a.47.47,0,0,0,.15-.06L16,13.87Zm-5-3.14L4.06,10.5,11,6.64l6.94,3.86Z"></path></svg>
            Education
          </div>

          <div className=   {toggleState===2
           ? "qualification_button qualification_active button--flex"
           : "qualification_button button--flex"
           }
           onClick={()=>toggleTab(2)}
           >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="var(--title-color)" width="30px" height="30px" id="briefcase-alt" className="qualification_icon"><path d="M19,6.5H16v-1a3,3,0,0,0-3-3H11a3,3,0,0,0-3,3v1H5a3,3,0,0,0-3,3v9a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3v-9A3,3,0,0,0,19,6.5Zm-9-1a1,1,0,0,1,1-1h2a1,1,0,0,1,1,1v1H10Zm10,13a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V13a21.27,21.27,0,0,0,3,.94v.59a1,1,0,0,0,2,0v-.21a23,23,0,0,0,3,.21,23,23,0,0,0,3-.21v.21a1,1,0,0,0,2,0v-.59A21.27,21.27,0,0,0,20,13Zm0-7.69a20.39,20.39,0,0,1-3,1V11.5a1,1,0,0,0-2,0v.74a20.11,20.11,0,0,1-6,0V11.5a1,1,0,0,0-2,0v.33a20.39,20.39,0,0,1-3-1V9.5a1,1,0,0,1,1-1H19a1,1,0,0,1,1,1Z"></path></svg>{" "}
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
