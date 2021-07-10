import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const contentAnim = {
  hidden: {
    opacity: 0,
    scale: 0,
  },
  show: {
    opacity: 1,
    scale: 1,

    transition: {
      // delay: 0.5,
      duration: 1,
    },
  },
};

const pAnim = {
  hidden: {
    opacity: 0,
    x: "100vw",
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      mass: 1.5,
      stiffness: 80,
      damping: 13,
      delay: 0.5,
    },
  },
};

const buttonAnim = {
  hidden: {
    opacity: 0,
    x: "100vw",
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      mass: 1,
      stiffness: 80,
      damping: 13,
      delay: 0.8,
    },
  },
};

const Work = () => {
  const [activeProject, setActiveProject] = useState(0);

  const { ref, inView } = useInView();
  return (
    <WorkContainer id="work" className="bg-dark">
      <h3 className="secondary-text-color">Work</h3>
      <motion.div
        className="work-content-container"
        ref={ref}
        variants={contentAnim}
        initial="hidden"
        animate={inView ? "show" : ""}
      >
        <div className="work-content-top primary-text-color">
          <div
            className="work-content-top-headers"
            // variants={componentAnim}
            // ref={ref}
            // initial="initial"
            // animate={inView ? "animate" : ""}
          >
            <h4
              className={activeProject === 1 ? "active" : ""}
              onClick={() => setActiveProject(1)}
            >
              Sunshine <i className="fas fa-sun"></i>
            </h4>
            <h4
              className={activeProject === 2 ? "active" : ""}
              onClick={() => setActiveProject(2)}
            >
              Discover <i className="fas fa-route"></i>
            </h4>
            <h4
              className={activeProject === 3 ? "active" : ""}
              onClick={() => setActiveProject(3)}
            >
              R.P.S. <i className="fas fa-gamepad"></i>
            </h4>
            <h4
              className={activeProject === 4 ? "active" : ""}
              onClick={() => setActiveProject(4)}
            >
              Netflix <i className="fas fa-tv"></i>
            </h4>
          </div>
          <div className="work-content-info ">
            {activeProject === 0 && (
              <motion.p
                className="base-p primary-text-color"
                // ref={ref}
                // variants={componentAnim}
                // initial="initial"
                // animate={inView ? "animate" : ""}
              >
                Click one of the project headers to see a gif of the project as
                well as infomation about that project!
              </motion.p>
            )}
            {activeProject === 1 && (
              <>
                <motion.p
                  className="primary-text-color"
                  variants={pAnim}
                  initial="hidden"
                  animate="show"
                >
                  <a href="/">Sunshine</a> is a weather app created using the{" "}
                  <a href="https://openweathermap.org/api">Open Weather API</a>.
                  This weather app gives users the date, current weather and
                  current weather conditions. View a gif of the project or click
                  the button below to view the website!
                </motion.p>
                <motion.div
                  className="work-button-container"
                  variants={buttonAnim}
                  initial="hidden"
                  animate="show"
                >
                  <a href="/" className="work-button">
                    See Sunshine!
                  </a>
                </motion.div>
              </>
            )}

            {activeProject === 2 && (
              <>
                <motion.p
                  className="primary-text-color"
                  variants={pAnim}
                  initial="hidden"
                  animate="show"
                  className="primary-text-color"
                  // variants={pAnim}
                  // initial="initial"
                  // animate="animate"
                  // exit="exit"
                >
                  <a href="/">Discover</a> is a landing page that I created for
                  a fake Icelandic Travel company, inspired by my trip there in
                  2019! View a gif of the project or click the button below to
                  view the website!
                </motion.p>

                <motion.div
                  className="work-button-container"
                  variants={buttonAnim}
                  initial="hidden"
                  animate="show"
                  className="work-button-container"
                >
                  <a href="/" className="work-button">
                    See Discover!
                  </a>
                </motion.div>
              </>
            )}

            {activeProject === 3 && (
              <>
                <motion.p
                  className="primary-text-color"
                  variants={pAnim}
                  initial="hidden"
                  animate="show"
                  className="primary-text-color"
                  // variants={pAnim}
                  // initial="initial"
                  // animate="animate"
                  // exit="exit"
                >
                  <a href="/">R.P.S.</a> This is my take on the classic game
                  "Rock, Paper, Scissors". View a gif of the project or click
                  the button below to view the website!
                </motion.p>

                <motion.div
                  className="work-button-container"
                  variants={buttonAnim}
                  initial="hidden"
                  animate="show"
                  className="work-button-container"
                >
                  <a href="/" className="work-button">
                    See R.P.S!
                  </a>
                </motion.div>
              </>
            )}

            {activeProject === 4 && (
              <>
                <motion.p
                  className="primary-text-color"
                  variants={pAnim}
                  initial="hidden"
                  animate="show"
                  className="primary-text-color"
                  // variants={pAnim}
                  // initial="initial"
                  // animate="animate"
                  // exit="exit"
                >
                  <a href="/">Netflix!</a> This a recreation of the popular
                  Netflix landing page. View a gif of the project or click the
                  button below to view the website!
                </motion.p>

                <motion.div
                  className="work-button-container"
                  variants={buttonAnim}
                  initial="hidden"
                  animate="show"
                  className="work-button-container"
                >
                  <a href="/" className="work-button">
                    See Netflix!
                  </a>
                </motion.div>
              </>
            )}
          </div>
        </div>
        <div className="work-content-bottom">
          {activeProject === 1 && (
            <div
              className="work-gif"
              // variants={gifAnim}
              // initial="initial"
              // animate="animate"
              // exit="exit"
            >
              <iframe
                src="https://giphy.com/embed/3WYiNa7vx0w19jGQKz"
                width="480"
                height="230"
                frameBorder="0"
                className="giphy-embed"
                title="sunshine"
                allowFullScreen
              ></iframe>
              <p>
                <a href="https://giphy.com/gifs/3WYiNa7vx0w19jGQKz">
                  via GIPHY
                </a>
              </p>
            </div>
          )}
          {activeProject === 2 && (
            <div
              className="work-gif"
              // variants={gifAnim}
              // initial="initial"
              // animate="animate"
              // exit="exit"
            >
              <iframe
                src="https://giphy.com/embed/BC4xNxQop600BUt8YU"
                width="480"
                height="234"
                frameBorder="0"
                className="giphy-embed"
                title="discover"
                allowFullScreen
              ></iframe>
              <p>
                <a href="https://giphy.com/gifs/BC4xNxQop600BUt8YU">
                  via GIPHY
                </a>
              </p>
            </div>
          )}

          {activeProject === 3 && (
            <div
              className="work-gif"
              // variants={gifAnim}
              // initial="initial"
              // animate="animate"
              // exit="exit"
            >
              <iframe
                src="https://giphy.com/embed/OCR5FpTNg4iizSCWfG"
                width="480"
                height="230"
                frameBorder="0"
                title="rps"
                className="giphy-embed"
                allowFullScreen
              ></iframe>
              <p>
                <a href="https://giphy.com/gifs/OCR5FpTNg4iizSCWfG">
                  via GIPHY
                </a>
              </p>
            </div>
          )}
          {activeProject === 4 && (
            <div
              className="work-gif"
              // variants={gifAnim}
              // initial="initial"
              // animate="animate"
              // exit="exit"
            >
              <iframe
                src="https://giphy.com/embed/oU4N9ODTfjLr0UeKQI"
                width="480"
                height="233"
                frameBorder="0"
                className="giphy-embed"
                title="netflix"
                allowFullScreen
              ></iframe>
              <p>
                <a href="https://giphy.com/gifs/oU4N9ODTfjLr0UeKQI">
                  via GIPHY
                </a>
              </p>
            </div>
          )}
        </div>
      </motion.div>
    </WorkContainer>
    // <WorkContainer className="bg-dark">
    //   <h2 className="secondary-text-color">Work</h2>
    // </WorkContainer>
  );
};

const WorkContainer = styled(motion.div)`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 200%;
  h3 {
    font-size: 5vw;
    letter-spacing: 4rem;
    writing-mode: vertical-lr;
    text-orientation: upright;
    display: flex;
    margin-left: 2vw;
    margin-top: 8vw;
    text-shadow: 0px 10px 2px rgb(31, 40, 51);
  }
  .work-content-container {
    position: absolute;
    top: 0;
    left: 12vw;
    height: 100%;
    width: 86.9vw;
    display: grid;
    grid-template-rows: repeat(2, 1fr);
    .work-content-top {
      display: grid;
      grid-template-rows: repeat(2, 1fr);
      .work-content-top-headers {
        display: flex;
        justify-content: space-around;
        align-items: center;

        h4 {
          font-size: 3vw;
          cursor: pointer;
          letter-spacing: 0.2vw;
          i {
            color: rgb(70, 162, 159);
            font-size: 1.5vw;
            position: absolute;
            margin-left: 0.4vw;
            margin-bottom: 0.4vw;
          }
          transition: all 0.3s ease-in-out;
          &.active {
            transform: translateY(-2vw);
            text-shadow: 3px 3px 1px rgba(70, 162, 159, 0.5);
            text-decoration: underline;
            i {
              text-shadow: 1px 2px 1px rgba(255, 255, 255, 0.4);
            }
          }
        }
      }
      .work-content-info {
        display: grid;
        grid-template-rows: repeat(2, 1fr);
        p {
          font-size: 1.8vw;
          width: 85%;
          margin: auto;

          a {
            text-decoration: none;
            color: rgb(70, 192, 159);
            transition: all 0.3s ease-in-out;
            &:hover {
              opacity: 0.8;
              text-decoration: underline;
            }
          }
        }
        .work-button-container {
          display: flex;
          width: 20%;
          margin-left: 6vw;
          .work-button {
            display: flex;
            justify-content: center;
            margin-left: 10vw;
            width: 16vw;
            border-radius: 2rem;
            background-color: rgb(70, 162, 159);
            border: none;
            margin: auto;
            font-size: 1.8vw;
            color: rgb(0, 0, 0);
            text-decoration: none;
            letter-spacing: 0.2vw;
            padding: 1vw;
            cursor: pointer;
            transition: all 0.3s ease-in-out;
            &:hover {
              box-shadow: 0px 0px 20px rgba(70, 162, 159, 0.7);
              text-shadow: 1px 2px 2px rgba(0, 0, 0, 0.7);
              transform: scale(1.05);
            }
          }
        }
      }
    }

    .work-content-bottom {
      display: flex;
      justify-content: center;
      align-items: center;
      .work-gif {
        iframe {
          border-radius: 1rem;
        }
        p {
          transform: translateX(24rem);
          a {
            text-decoration: none;
            color: rgb(70, 162, 159);
            font-size: 1.2vw;
            text-shadow: 2px 2px 3px var(--secondary-color);
            transition: all 0.7s ease-in-out;
            &:hover {
              opacity: 0.8;
              border-bottom: 2px solid rgb(70, 162, 159);
            }
          }
        }
      }
    }
  }
`;

export default Work;
