import React, { useState, useEffect } from "react";
import styled from "styled-components";
// import { motion } from "framer-motion";

import DesktopNav from "../Nav/DesktopNav";
import MobileNav from "../Nav/MobileNav";

import BgShapes from "../../images/bg-shapes.png";
import BgWords from "../../images/bg-words.png";

const Hero = () => {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  const bgWordsEl = document.querySelectorAll(".bg-words");
  bgWordsEl.forEach((item) => {
    item.style.transform = `translateY(${offsetY * 1}px)`;
  });

  const bgShapesEl = document.querySelectorAll(".bg-shapes");
  bgShapesEl.forEach((item) => {
    item.style.transform = `translateY(${offsetY * 0.6}px)`;
  });

  const h2El = document.querySelectorAll(".h2");
  h2El.forEach((item) => {
    item.style.transform = `translateY(${offsetY * -0.5}px)`;
  });

  const h4El = document.querySelectorAll(".h4");
  h4El.forEach((item) => {
    item.style.transform = `translateY(${offsetY * -0.3}px)`;
  });

  const h6El = document.querySelectorAll(".h6");
  h6El.forEach((item) => {
    item.style.transform = `translateY(${offsetY * -0.1}px)`;
  });
  return (
    <HeroContainer className="bg-dark">
      <DesktopNav />
      <MobileNav />

      <div className="hero-content">
        <img src={BgShapes} className="bg-shapes" alt="bg shapes" />
        <img src={BgWords} className="bg-words" alt="bg words" />
        <div className="hero-text">
          <h2 className="primary-text-color h2">Hi! My name is Jacob!</h2>
          <h4 className="primary-text-color h4">
            I am a Front-End Web Developer
          </h4>
          <h4 className="primary-text-color h4 h4-bottom">& Designer</h4>
          <h6 className="primary-text-color h6">Cleveland, OH</h6>
        </div>
      </div>
    </HeroContainer>
  );
};

const HeroContainer = styled.div`
  /* overflow-y: hidden; */
  position: relative;
  .hero-content {
    width: 85%;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 15%;
    img {
      position: absolute;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    .hero-text {
      /* border: 2px solid blue; */
      position: relative;
      width: 75%;
      top: 16rem;
      left: 5rem;
      z-index: 1000;

      h2 {
        font-size: 6vw;
        text-shadow: 0px 0px 15px rgb(0, 0, 0);
        margin-bottom: 2vw;
      }
      h4 {
        font-size: 3.7vw;
        text-shadow: 0px 0px 15px rgb(0, 0, 0);

        &.h4-bottom {
          letter-spacing: 0.5rem;
          margin-bottom: 1vw;
        }
      }
      h6 {
        font-size: 2.5vw;
        text-shadow: 0px 0px 15px rgb(0, 0, 0);
      }
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    height: 100vh;
    .hero-content {
      width: 100%;
      height: 83%;
      position: relative;
      top: 17%;
      left: 0;
      img {
        position: absolute;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
      .hero-text {
        display: flex;
        flex-direction: column;
        /* justify-content: space-between; */
        top: 15%;
        left: 5%;
        height: 70%;
        width: 90%;
        h2 {
          margin: 10vw 0;
          font-size: 8vw;
          /* line-height: 2vw; */
        }

        h4 {
          /* margin: 5vw 0; */
          font-size: 5.7vw;
          /* line-height: 2vw; */
          &.h4-bottom {
            margin-bottom: 8vw;
          }
        }
        h6 {
          font-size: 4vw;
        }
      }
    }
  }
`;

export default Hero;
