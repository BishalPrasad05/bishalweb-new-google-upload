import "./Education.css";

import React, { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

function Education() {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 600,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);

  return (
    <>
      <div className="main-education-container">
        <div id="education" className="education-heading" data-aos="fade-down">
          <h1>Academic Journey</h1>
          <h5>--Building Foundations for a Bright Tomorrow--</h5>
        </div>
        <div className="education-container">
          <div className="education-img" data-aos="fade-right">
            <img src="./images/education.svg" alt="Bishal Prasad" />
          </div>
          <div className="education-timeline">
            <div className="timeline">
              <ul>
                <li data-aos="fade-down">
                  <div className="content">
                    <h3>B.Tech in CSE</h3>
                    <b>
                      <p>B.P. Poddar Institute of Management & Technology</p>
                    </b>

                    <p>MAKAUT (WBUT)</p>
                    <p>Location - Kolkata, West Bengal</p>
                  </div>
                  <div className="time">
                    <h4>2021-In Progress</h4>
                  </div>
                </li>

                <li data-aos="fade-down">
                  <div className="content">
                    <h3>HSC/Intermediate</h3>
                    <b>
                      <p>RLJDMC DAV Public School. </p>
                    </b>
                    <p>CBSE</p>
                    <p>Location - Raniganj, West Bengal</p>
                  </div>
                  <div className="time">
                    <h4>June 2021</h4>
                  </div>
                </li>

                <li data-aos="fade-down">
                  <div className="content">
                    <h3>Matriculation</h3>
                    <b>
                      <p>Jawaharlal Nehru Memorial Senior Secondary School</p>
                    </b>
                    <p>CBSE </p>
                    <p>Location - Parthadih, Jharkhand</p>
                  </div>
                  <div className="time">
                    <h4>May 2019</h4>
                  </div>
                </li>

                <div style={{ clear: "both" }}></div>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Education;
