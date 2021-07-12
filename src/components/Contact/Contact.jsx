import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-scroll";
import emailjs from "emailjs-com";
import { useInView } from "react-intersection-observer";

const emailSentAnim = {
  hidden: {
    opacity: 0,
    y: "2vh",
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      mass: 1,
      stiffness: 100,
      damping: 10,
    },
  },
  exit: {
    opacity: 0,
    y: "2vh",
  },
};

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

const Contact = () => {
  const [emailSent, setEmailSent] = useState(false);
  const { ref, inView } = useInView();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_rjzifrn",
        "template_2je9xtj",
        e.target,
        "user_vciSLxoFailuPgBKUaz3i"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    setEmailSent(true);
    setTimeout(() => {
      setEmailSent(false);
    }, 4000);
  };
  return (
    <ContactContainer className="bg-medium" id="contact">
      <h3 className="secondary-text-color">Contact</h3>
      <motion.div
        className="form-container"
        ref={ref}
        variants={contentAnim}
        initial="hidden"
        animate={inView ? "show" : ""}
      >
        <form className="contact-form" onSubmit={sendEmail}>
          <label htmlFor="name"></label>
          <input
            className="primary-text-color"
            type="text"
            placeholder="Name"
            name="name"
            required
          />
          <label htmlFor="email"></label>
          <input
            className="primary-text-color"
            type="email"
            placeholder="Email"
            name="email"
            required
          />
          <label htmlFor="subject"></label>
          <input
            className="primary-text-color"
            type="text"
            placeholder="Subject"
            name="subject"
            required
          />
          <label htmlFor="message"></label>
          <textarea
            className="primary-text-color"
            rows="10"
            cols="30"
            name="message"
            placeholder="Please type your message"
            required
          ></textarea>
          <div className="form-bottom">
            <h5>Email Sent!</h5>
            <button type="submit">Send Email!</button>
            <Link to="hero" smooth={true} duration={1000}>
              <h6 className="primary-text-color">
                Back to Top <i className="fas fa-arrow-up"></i>
              </h6>
            </Link>
          </div>
          {/* <AnimatePresence>
           
            <motion.h5
              variants={emailSentAnim}
              initial="hidden"
              animate="show"
              exit="exit"
            >
              Email Sent!
            </motion.h5>
          </AnimatePresence>
          <button type="submit">Send Email</button>

          <h6 className="top primary-text-color">
            <Link to="hero" smooth={true} duration={1000} className="link">
              Back to top <i className="fas fa-arrow-up"></i>
            </Link>
          </h6> */}
        </form>
      </motion.div>
    </ContactContainer>
  );
};

const ContactContainer = styled(motion.div)`
  position: absolute;
  width: 100vw;
  height: 100vh;
  top: 300%;
  h3 {
    font-size: 5vw;
    letter-spacing: 1vw;
    writing-mode: vertical-lr;
    text-orientation: upright;
    display: flex;
    margin-left: 2vw;
    margin-top: 2vw;
    text-shadow: 0px 10px 2px rgb(0, 0, 0);
  }
  .form-container {
    width: 88%;
    height: 100%;
    display: flex;
    position: absolute;
    left: 10%;
    top: 0;
    margin: auto;
    justify-content: center;
    align-items: center;
    text-align: center;
    /* overflow: hidden; */
    .contact-form {
      display: flex;
      flex-direction: column;
      width: 50%;
      height: 90%;
      input {
        width: 100%;
        margin-bottom: 1.5vw;
        font-size: 1.5vw;

        border-radius: 1vw;
        padding: 0.5vw 1vw;
        background: rgba(0, 0, 0, 0.3);
        border: 2px solid var(--background-color);
        &:focus {
          border: 3px solid var(--secondary-color);
          outline: none;
        }
      }
      textarea {
        font-size: 1.5vw;
        border-radius: 1vw;
        border: none;
        padding: 1vw;
        resize: none;
        background: rgba(0, 0, 0, 0.3);
        margin-bottom: 2vw;
        &:focus {
          outline: none;
        }
      }
      .form-bottom {
        border: 2px solid blue;
        display: flex;
        flex-direction: column;
        height: 25vw;
        justify-content: space-between;
        align-items: center;
        h5 {
          color: rgb(70, 162, 159);
          font-size: 2vw;
          letter-spacing: 0.5vw;
          text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5);
          margin-bottom: 1.5vw;
        }
        button {
          display: flex;
          width: 50%;
          justify-content: center;
          background: rgb(70, 162, 159);
          outline: none;
          border: none;
          border-radius: 2rem;
          font-size: 2vw;
          letter-spacing: 0.2vw;
          cursor: pointer;
          margin-bottom: 1.5vw;
          transition: all 0.3s ease-in-out;
          &:hover {
            box-shadow: 0px 0px 20px rgba(70, 162, 159, 0.7);
            transform: scale(1.05);
          }
        }
        h6 {
          font-size: 1.5vw;
          cursor: pointer;
        }
      }
    }
  }
  @media (max-width: 768px) {
    top: 230%;
    height: 100vh;
    h3 {
      writing-mode: horizontal-tb;
      letter-spacing: 7vw;
      font-size: 8vw;
      margin-left: 13vw;
      margin-top: 8vw;
    }

    .form-container {
      position: absolute;
      margin-left: -5vw;
      margin-top: -15vw;
      .contact-form {
        width: 80%;
        height: 50%;
        input {
          font-size: 6vw;
        }
        textarea {
          font-size: 5vw;
          margin-bottom: 3vw;
        }
        .form-bottom {
          h5 {
            font-size: 4.5vw;
            margin-bottom: 3vw;
          }
          button {
            font-size: 4vw;
            margin-bottom: 3vw;
          }
          h6 {
            font-size: 3vw;
          }
        }
      }
    }
  }
`;

export default Contact;
