import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <SkillsContainer className="bg-medium">
      <h2 className="secondary-text-color">Skills</h2>
    </SkillsContainer>
  );
};

const SkillsContainer = styled(motion.div)`
  position: absolute;
  width: 100%;
  height: 100%;
  /* top: 100vh; */
`;

export default Skills;
