import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Logo from "../../images/Logo.png";
import { Link } from "react-scroll";
import Button from "../Shared/Button";

const MobileNav = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <MobileNavContainer className="bg-medium" open={open}>
      <div className="mobile-logo">
        <img src={Logo} alt="logo" />
      </div>
      <div className="hamburger-links-container">
        <div className="hamburger" onClick={handleOpen}>
          {/* <i className={open ? "fas fa-times" : "fas fa-bars"}></i> */}
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className={open ? "links links-active bg-medium" : "links"}>
          <motion.ul className="primary-text-color">
            <Link
              className="nav-link nav-link-home"
              onClick={() => setOpen(false)}
              to="hero"
              smooth={true}
              duration={1000}
            >
              Home
            </Link>
            <Link
              className="nav-link"
              onClick={() => setOpen(false)}
              to="skills"
              smooth={true}
              duration={1000}
            >
              Skills
            </Link>
            <Link
              className="nav-link"
              onClick={() => setOpen(false)}
              to="work"
              smooth={true}
              duration={1000}
            >
              Work
            </Link>
            <Link
              className="nav-link"
              onClick={() => setOpen(false)}
              to="contact"
              smooth={true}
              duration={1000}
            >
              Contact
            </Link>
          </motion.ul>
          <div className="mobile-social">
            <div className="social-links-container">
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
              <a href="/" className="resume-button">
                Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </MobileNavContainer>
  );
};

const MobileNavContainer = styled(motion.div)`
  display: none;
  position: fixed;
  width: 100%;

  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    border-bottom: 7px solid rgb(116, 115, 115);
    height: 17vh;
    padding: 0 2rem;
    z-index: 10;
    .mobile-logo {
      height: 17vh;
      display: flex;
      img {
        height: 17vh;
      }
    }
    .hamburger-links-container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: end;
      height: 17vh;
      border-bottom: 2px solid rgb(116, 115, 115);
      .hamburger {
        margin-right: 5vw;
        cursor: pointer;
        /* i {
          color: rgb(70, 162, 159);
          font-size: 8vw;
        } */
        div {
          background: ${({ open }) =>
            open ? "rgba(116, 115, 115)" : "rgb(70, 162, 159)"};
          width: 8vw;
          height: 1vw;
          margin: 1.5vw 0;
          border-radius: 1rem;
          transition: all 0.5s ease-in-out;
          &:nth-child(1) {
            transform: ${({ open }) =>
              open ? "rotate(50deg) translateY(1.8rem)" : "rotate(0deg)"};
          }
          &:nth-child(2) {
            transform: ${({ open }) =>
              open ? "translateX(100%)" : "translateX(0)"};
            opacity: ${({ open }) => (open ? 0 : 1)};
          }
          &:nth-child(3) {
            transform: ${({ open }) =>
              open ? "rotate(-50deg) translateY(-1.8rem)" : "rotate(0deg)"};
          }
        }
      }
      .links {
        display: grid;
        grid-template-rows: 2fr 1fr;
        width: 100%;
        height: 83vh;
        position: absolute;
        top: 17vh;
        left: 0;
        border-bottom: 4px solid rgb(70, 162, 159);

        transform: translateX(100vw);
        transition: all 0.5s ease-in-out;
        &.links-active {
          transform: translateX(0);
          /* position: sticky; */
        }
        ul {
          display: flex;
          flex-direction: column;
          text-align: center;
          justify-content: space-around;
          width: 100%;
          .nav-link {
            font-size: 7vw;
            letter-spacing: 2vw;
            cursor: pointer;
          }
        }
        .mobile-social {
          display: grid;
          grid-template-rows: repeat(2, 1fr);
          .social-links-container {
            display: flex;
            justify-content: space-evenly;
            align-items: center;
            margin-bottom: 5vw;
            a {
              i {
                font-size: 5vw;
                color: rgb(70, 162, 159);
              }
            }
          }
          .resume-button-container {
            border: 2px solid red;
            .resume-button {
              display: flex;
              justify-content: center;
              margin-left: 10vw;
              width: 30vw;
              border-radius: 2rem;
              background-color: rgb(70, 162, 159);
              border: none;
              margin: auto;
              font-size: 5vw;
              color: rgb(0, 0, 0);
              text-decoration: none;
              letter-spacing: 0.2vw;
              padding: 1vw;
              cursor: pointer;
              transition: all 0.3s ease-in-out;
              @media (max-width: 415px) {
                width: 50vw;
                font-size: 8vw;
              }
              &:hover {
                box-shadow: 0px 0px 20px rgba(70, 162, 159, 0.7);
                text-shadow: 1px 2px 2px rgba(0, 0, 0, 0.7);
                transform: scale(1.05);
              }
            }
          }
        }
      }
    }
  }
`;

export default MobileNav;
