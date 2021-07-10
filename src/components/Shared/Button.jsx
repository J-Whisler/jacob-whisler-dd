import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Button = ({ children }) => {
  return <ButtonContainer>{children}</ButtonContainer>;
};

const ButtonContainer = styled(motion.div)`
  border: 2px solid white;
  display: flex;
  justify-content: center;
  width: 13.2vw;
  border-radius: 2rem;
  background-color: rgb(70, 162, 159);
  border: none;
  margin: auto;
  font-size: 1.8vw;
  letter-spacing: 0.1rem;
  padding: 0.7vw;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    box-shadow: 0px 0px 20px rgba(70, 162, 159, 0.7);
    transform: scale(1.05);
  }
`;

export default Button;
