import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Work = () => {
  return (
    <WorkContainer className="bg-dark">
      <h2 className="secondary-text-color">Work</h2>
    </WorkContainer>
  );
};

const WorkContainer = styled(motion.div)`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 200%;
`;

export default Work;
