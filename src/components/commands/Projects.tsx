import { useContext, useEffect } from "react";
import {
  checkRedirect,
  getCurrentCmdArry,
  isArgInvalid,
} from "../../utils/funcs";
import {
  ProjectContainer,
  ProjectDesc,
  ProjectsIntro,
  ProjectTitle,
} from "../styles/Projects.styled";
import { termContext } from "../Terminal";
import Usage from "../Usage";

const Projects: React.FC = () => {
  const { arg, history, rerender } = useContext(termContext);

  /* ===== get current command ===== */
  const currentCommand = getCurrentCmdArry(history);

  /* ===== check current command is redirect ===== */
  useEffect(() => {
    if (checkRedirect(rerender, currentCommand, "projects")) {
      projects.forEach(({ id, url }) => {
        id === parseInt(arg[1]) && window.open(url, "_blank");
      });
    }
  }, [arg, rerender, currentCommand]);

  /* ===== check arg is valid ===== */
  const checkArg = () =>
    isArgInvalid(arg, "go", ["1", "2", "3", "4"]) ? (
      <Usage cmd="projects" />
    ) : null;

  return arg.length > 0 || arg.length > 2 ? (
    checkArg()
  ) : (
    <div data-testid="projects">
      <ProjectsIntro>
        “Talk is cheap. I got you. <br />
        Here are some of my projects you shouldn't misss
      </ProjectsIntro>
      {projects.map(({ id, title, desc }) => (
        <ProjectContainer key={id}>
          <ProjectTitle>{`${id}. ${title}`}</ProjectTitle>
          <ProjectDesc>{desc}</ProjectDesc>
        </ProjectContainer>
      ))}
      <Usage cmd="projects" marginY />
    </div>
  );
};

const projects = [
  {
    id: 1,
    title: "Charan's Boring Website",
    desc: "Explore my portfolio, where I share my thoughts, experiences, and creative projects, reflecting my professional and personal growth.",
    url: "https://charanxc.framer.website/",
  },
  {
    id: 2,
    title: "GUI Interface for Encoding and Decoding using Python",
    desc: "Developed a GUI-based application leveraging the RSA algorithm for secure cryptographic operations.",
  },
  {
    id: 3,
    title: "Parking System (IoT)",
    desc: "Designed an IoT-based Parking System using Arduino Uno to monitor and display real-time parking availability.",
  },
  {
    id: 4,
    title: "IoT Parking Grid View Assistance",
    desc: "Created a grid-based visual assistance system for parking using IoT sensors to enhance navigation in parking lots.",
  },
  {
    id: 5,
    title: "Employee Management System",
    desc: "Implemented an employee management system using BASH scripting to streamline HR operations.",
  },
  {
    id: 6,
    title: "SOAR EDR Integration",
    desc: "Integrated Security Orchestration, Automation, and Response (SOAR) with Endpoint Detection and Response (EDR) using LimaCharlie.",
  },
];

export default Projects;
