import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import Logo from "../../images/Logo.png";
import Button from "../Shared/Button";

const logoAnim = {
  hidden: {
    y: "-50vh",
  },
  show: {
    y: 0,
    transition: {
      type: "spring",
      mass: 1,
      //   stiffness: 0.1,
      duration: 1,
      delay: 0.5,
    },
  },
};

const navItemsAnim = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 1,
      delay: 1.5,
    },
  },
};

const socialLinksAnim = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 1,
      delay: 2.5,
    },
  },
};

const DesktopNav = () => {
  return (
    <DesktopNavContainer>
      <div className="logo">
        <motion.img
          src={Logo}
          alt="logo"
          variants={logoAnim}
          initial="hidden"
          animate="show"
        />
      </div>
      <motion.div
        className="nav-items bg-medium"
        variants={navItemsAnim}
        initial="hidden"
        animate="show"
      >
        <motion.ul className="primary-text-color">
          <Link className="nav-link nav-link-home">Home</Link>
          <Link className="nav-link">Skills</Link>
          <Link className="nav-link">Work</Link>
          <Link className="nav-link">Contact</Link>
        </motion.ul>
      </motion.div>
      <motion.div
        className="social-links-container"
        variants={socialLinksAnim}
        initial="hidden"
        animate="show"
      >
        <div className="social-links">
          <a
            href="https://twitter.com/JacobWhisler521"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-twitter"></i>
          </a>
          <a
            href="https://www.instagram.com/jacob_whisler/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a
            href="https://github.com/J-Whisler"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/jacobwhisler/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>

        <div className="resume-button-container">
          <Button className="resume-button">Resume</Button>
        </div>
      </motion.div>
    </DesktopNavContainer>
  );
};

const DesktopNavContainer = styled(motion.div)`
  width: 15vw;
  height: 100vh;
  display: grid;
  grid-template-rows: 1fr 2fr 1fr;

  .logo {
    width: 100%;
    /* height: 35vh; */
    /* margin: 0 rem; */
    img {
      width: 100%;
      height: 15vw;
      object-fit: cover;
    }
  }
  .nav-items {
    width: 100%;
    ul {
      display: grid;
      grid-template-rows: repeat(4, 1fr);
      height: 100%;
      .nav-link {
        font-size: 1.5rem;
        letter-spacing: 0.2rem;
        border-bottom: 2px solid rgb(116, 115, 115);
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        transition: all 0.3s ease-in-out;
        &:hover {
          font-size: 1.7rem;
          color: rgb(70, 162, 159);
          text-shadow: 0px 5px 1px rgba(0, 0, 0, 0.5);
        }
        &.nav-link-home {
          border-top: 2px solid rgb(116, 115, 115);
        }
      }
    }
  }
  .social-links-container {
    width: 100%;
    display: grid;
    grid-template-rows: repeat(2, 1fr);
    .social-links {
      /* border: 2px solid green; */
      display: flex;
      justify-content: space-around;
      align-items: center;
      a {
        i {
          font-size: 1.5rem;
          color: rgba(70, 162, 159, 0.9);
          &:hover {
            text-shadow: 0px 0px 10px rgba(70, 162, 159, 0.8);
            transform: scale(1.05);
          }
        }
      }
    }
    .resume-button-container {
      .resume-button {
        width: 70%;
      }
    }
  }
`;

export default DesktopNav;
