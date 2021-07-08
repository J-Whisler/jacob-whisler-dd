import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import DesktopNav from "../Nav/DesktopNav";

const Hero = () => {
  return (
    <HeroContainer className="bg-dark">
      <DesktopNav />
      <h2 className="primary-text-color">Hero</h2>
    </HeroContainer>
  );
};

const HeroContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
`;

export default Hero;
