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
    <ContactContainer className="bg-medium">
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
          <AnimatePresence>
            {emailSent && (
              <motion.h5
                variants={emailSentAnim}
                initial="hidden"
                animate="show"
                exit="exit"
              >
                Email Sent!
              </motion.h5>
            )}
          </AnimatePresence>
          <button type="submit">Send Email</button>

          <h6 className="top primary-text-color">
            <Link to="about" smooth={true} duration={1000} className="link">
              Back to top <i className="fas fa-arrow-up"></i>
            </Link>
          </h6>
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
        font-family: var(--main-text);
        border-radius: 1vw;
        padding: 1vw;
        border: 2px solid var(--tertiary-color);
        margin-bottom: 2vw;
        resize: none;
        background: rgba(0, 0, 0, 0.3);
        &:focus {
          border: 3px solid var(--secondary-color);
          outline: none;
        }
      }
      button {
        display: flex;
        width: 50%;
        margin: auto;
        justify-content: center;
        background: rgb(70, 162, 159);
        outline: none;
        border: none;
        border-radius: 2rem;
        font-size: 2vw;
        letter-spacing: 0.2vw;
        cursor: pointer;
        transition: all 0.3s ease-in-out;
        &:hover {
          box-shadow: 0px 0px 20px rgba(70, 162, 159, 0.7);
          transform: scale(1.05);
        }
      }
      .top {
        position: absolute;
        margin-top: 41vw;
        margin-left: 17vw;
        font-size: 1.5vw;
        cursor: pointer;
      }

      h5 {
        color: rgb(70, 162, 159);
        font-size: 2vw;
        letter-spacing: 0.5vw;
        position: absolute;
        left: 36.2vw;
        top: 35.5vw;
        text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5);
      }

      /* .top {
      
        padding: 2rem 0.2rem;
        position: absolute;
        top: -7rem;
        left: 52rem;
        .link {
          cursor: pointer;
        }
        a {
          text-decoration: none;
          color: var(--tertiary-color);
          font-family: var(--main-text);
          font-size: 1.2rem;
          &:hover {
            opacity: 0.8;
          }
        }
      } */
    }
  }
  @media (max-width: 768px) {
    h3 {
      font-size: 10vw;
      margin-top: 10vw;
      letter-spacing: 5vw;
    }
    .form-container {
      position: absolute;
      margin-left: 2vw;
      .contact-form {
        width: 80%;
        height: 80%;
        input {
          font-size: 6vw;
        }
        textarea {
          font-size: 5vw;
          margin-bottom: 10vw;
        }
        button {
          font-size: 6vw;
        }
        .top {
          left: 17vw;
          top: 85vw;
          font-size: 3vw;
        }
        h5 {
          font-size: 5vw;
          margin-top: 71vw;
          margin-left: -7.5vw;
        }
      }
    }
  }
`;

export default Contact;
