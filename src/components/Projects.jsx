import { useState } from "react";
import "./Projects.css";

import React, { useEffect } from "react";
// importing aos
import AOS from "aos";
import "aos/dist/aos.css";

function Projects() {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 400,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);

  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    console.log(index);
    setToggleState(index);
  };

  return (
    <>
      <div id="projects" className="projects-container">
        <div className="projects-title" data-aos="fade-down">
          <h1>Projects By Me</h1>
        </div>
        <div className="projects-description" data-aos="fade-down">
          <h6>
            --Each project is a chapter in my journey, illustrating the
            evolution of my skills and vision--
          </h6>
        </div>
        <div className="tab-view" data-aos="fade-up">
          <div
            className={toggleState === 1 ? "commonTab activeTab" : "commonTab"}
            onClick={() => toggleTab(1)}
          >
            <span>Python</span>
          </div>
          <div
            className={toggleState === 2 ? "commonTab activeTab" : "commonTab"}
            onClick={() => toggleTab(2)}
          >
            <span>Android</span>
          </div>
          <div
            className={toggleState === 3 ? "commonTab activeTab" : "commonTab"}
            onClick={() => toggleTab(3)}
          >
            <span>Web</span>
          </div>
          <div
            className={toggleState === 4 ? "commonTab activeTab" : "commonTab"}
            onClick={() => toggleTab(4)}
          >
            <span>Blockchain</span>
          </div>
        </div>
        <div className="projects" data-aos="fade-up">
          <div className={toggleState === 1 ? "projects" : "hide-content"}>
            <div className="melo projects-common">
              <img src="./projects/melo.svg" alt="" />
              <div className="music-div">
                <h1>Melo (Music-Player)</h1>
                <p>A fully functional music player build in python.</p>
                <button>
                  <a
                    href="https://github.com/Bishalprasad05/Melo"
                    className="xyz"
                    target="_blank"
                    rel="noreferrer"
                  >
                    More details{" "}
                  </a>
                </button>
              </div>
            </div>

            <div className="filefinder projects-common">
              <img src="./projects/file-finder.svg" alt="" />
              <div className="music-div">
                <h1>File Finder</h1>
                <p>
                  A python software used to find any file location in the
                  computer.
                </p>
                <button>
                  <a
                    href="https://github.com/Bishalprasad05/File-finder"
                    target="_blank"
                    className="xyz"
                    rel="noreferrer"
                  >
                    More details
                  </a>
                </button>
              </div>
            </div>
            <div className="youtubedownloader projects-common">
              <img src="./projects/chatpy.svg" alt="" />
              <div className="music-div">
                <h1>ChatApp</h1>
                <p>
                  A chat application using python socket programming with single
                  and group chat.
                </p>
                <button>
                  <a
                    href="https://github.com/BishalPrasad05/Chating-app"
                    target="_blank"
                    className="xyz"
                    rel="noreferrer"
                  >
                    More details
                  </a>
                </button>
              </div>
            </div>
          </div>

          {/* -------------------------------------android apps------------------------------------ */}

          <div className={toggleState === 2 ? "projects" : "hide-content"}>
            <div className="url projects-common">
              <img src="./projects/chatapp.svg" alt="" />
              <div className="music-div">
                <h1>ChatApp</h1>
                <p>
                  Chatapp with media sharing and whatapp like voice recording
                  and sending feature.
                </p>
                <button>
                  <a
                    href="https://github.com/BishalPrasad05/chatapp"
                    target="_blank"
                    className="xyz"
                    rel="noreferrer"
                  >
                    More details
                  </a>
                </button>
              </div>
            </div>
            <div className="Todo projects-common">
              <img src="./projects/chatbot.svg" alt="" />
              <div className="music-div">
                <h1>Chatbot App</h1>
                <p>A Flutter based android chatbot using ChatGPT api.</p>
                <button>
                  <a
                    href="https://github.com/Bishalprasad05/chatbot"
                    className="xyz"
                    target="_blank"
                    rel="noreferrer"
                  >
                    More details
                  </a>
                </button>
              </div>
            </div>

            <div className="weatherapp projects-common">
              <img src="./projects/contacts.svg" alt="" />
              <div className="music-div">
                <h1>Contact App</h1>
                <p>
                  A Flutter based android contacts app with dialer and search
                  functionality.
                </p>
                <button>
                  <a
                    href="https://github.com/bishalprasad05/Contact-App"
                    target="_blank"
                    className="xyz"
                    rel="noreferrer"
                  >
                    More details
                  </a>
                </button>
              </div>
            </div>
          </div>

          {/* ------------------------------------web apps------------------------------------ */}

          <div className={toggleState === 3 ? "projects" : "hide-content"}>
            <div className="Todo projects-common">
              <img src="./projects/todo.svg" alt="" />
              <div className="music-div">
                <h1>To-Do App</h1>
                <p>A todo app using html css and js with history storage.</p>
                <button>
                  <a
                    href="https://github.com/bishalprasad05/Todo-App"
                    className="xyz"
                    target="_blank"
                    rel="noreferrer"
                  >
                    More details
                  </a>
                </button>
              </div>
            </div>

            <div className="weatherapp projects-common">
              <img src="./projects/weather.svg" alt="" />
              <div className="music-div">
                <h1>Weather App</h1>
                <p>A html css and js based weather forcasting app.</p>
                <button>
                  <a
                    href="https://github.com/bishalprasad05/weather-app"
                    target="_blank"
                    className="xyz"
                    rel="noreferrer"
                  >
                    More details
                  </a>
                </button>
              </div>
            </div>
            <div className="url projects-common">
              <img src="./projects/url.svg" alt="" />
              <div className="music-div">
                <h1>Url Shortner</h1>
                <p>
                  A simple and easy to use url shortner with html,css and js.
                </p>
                <button>
                  <a
                    href="https://github.com/bishalprasad05/URL-Shortner"
                    target="_blank"
                    className="xyz"
                    rel="noreferrer"
                  >
                    More details
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* -------------------Blockchain projects--------------------------- */}
        <div className={toggleState === 4 ? "projects" : "hide-content"}>
          <div className="url projects-common">
            <img src="./projects/lottery.svg" alt="" />
            <div className="music-div">
              <h1>Lottery DAPP</h1>
              <p>A simple contract of lottery management system in solidity.</p>
              <button>
                <a
                  href="https://github.com/BishalPrasad05/Lottery_system"
                  target="_blank"
                  className="xyz"
                  rel="noreferrer"
                >
                  More details
                </a>
              </button>
            </div>
          </div>
        </div>

        <div className="SeeallButton">
          <button data-aos="fade-up">
            <a
              href="https://github.com/bishalprasad05?tab=repositories"
              target="_blank"
              rel="noreferrer"
            >
              See All{" "}
            </a>
          </button>
        </div>
      </div>
    </>
  );
}

export default Projects;
