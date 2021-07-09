import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <ContactContainer className="bg-medium">
      {" "}
      <h2 className="secondary-text-color">Contact</h2>
    </ContactContainer>
  );
};

const ContactContainer = styled(motion.div)`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 300%;
`;

export default Contact;
