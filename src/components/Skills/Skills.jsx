import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Bar } from "react-chartjs-2";
import { useInView } from "react-intersection-observer";

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

const data = {
  labels: [
    "HTML",
    "CSS/SCSS",
    "Javascript",
    "React",
    "Figma/Photoshop",
    "Web Animations",
  ],
  datasets: [
    {
      label: "Skill Level",
      data: [80, 75, 65, 65, 50, 60],
      backgroundColor: ["rgb(70, 162, 159)"],
    },
  ],
};

const options = {
  indexAxis: "x",
  responsive: true,
  scales: {
    y: {
      max: 100,
      min: 0,
      ticks: {
        stepSize: 10,
      },
    },
  },
  // yAxes: [
  //   {
  //     display: true,
  //     scales: {
  //       yAxes: [
  //         {
  //           id: "y-axis-1",
  //           type: "linear",
  //           position: "left",

  //           ticks: { min: 0, max: 100 },
  //         },
  //       ],
  //     },
  //   },
  // ],
};

const Skills = () => {
  const { ref, inView } = useInView();
  return (
    <SkillsContainer className="bg-medium" id="skills">
      <h3 className="secondary-text-color">Skills</h3>
      <motion.div
        className="chart-container"
        ref={ref}
        variants={contentAnim}
        initial="hidden"
        animate={inView ? "show" : ""}
      >
        <Bar data={data} options={options} className="chart"></Bar>
      </motion.div>
    </SkillsContainer>
  );
};

const SkillsContainer = styled(motion.div)`
  position: absolute;
  width: 100vw;
  height: 100vh;
  h3 {
    font-size: 5vw;
    letter-spacing: 2vw;
    writing-mode: vertical-lr;
    text-orientation: upright;
    display: flex;
    margin-left: 2vw;
    margin-top: 4vw;
    text-shadow: 0px 10px 2px rgb(0, 0, 0);
  }
  .chart-container {
    width: 80%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 10%;
    .chart {
      display: flex;
      margin-top: 3vw;
    }
  }
  @media (max-width: 768px) {
    height: 70vh;

    h3 {
      writing-mode: horizontal-tb;
      letter-spacing: 10vw;
      font-size: 8vw;
      margin-left: 15vw;
      margin-top: 12vw;
    }
    .chart-container {
      top: 30%;
      left: 5%;
      width: 90%;
    }
  }
`;

export default Skills;
