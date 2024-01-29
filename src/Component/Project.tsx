import React from "react";
import "./Project.css";

import { TbBrandTypescript } from "react-icons/tb";
import { FaRust } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { DiHaskell } from "react-icons/di";
import { SiMongodb } from "react-icons/si";
import { SiSolidity } from "react-icons/si";
import { TbBrandCpp } from "react-icons/tb";
import { FaC } from "react-icons/fa6";
import { SiMysql } from "react-icons/si";
import { GrDocker } from "react-icons/gr";
import { FaGithub } from "react-icons/fa6";
import { FaGolang } from "react-icons/fa6";
import { SiGithubactions } from "react-icons/si";
import { FaNode } from "react-icons/fa";

type ProjectProps = {
  title: string;
  description: string;
  link: string;
  icons: React.FC[];
  date: string;
};

const ProjectArray: ProjectProps[] = [
  {
    title: "Glados",
    description:
      "Le project glados consiste a crée son propre langague de programmation en haskell.\nLes concepts abordées -LISP (List Processing)\nPARSER (Analyseur Syntaxique)\nMACHINE VIRTUELLE (Machine Virtuelle à Pile)",
    link: "https://github.com/Jouzep/Glados",
    icons: [DiHaskell, SiGithubactions, FaPython],
    date: "10/20/2023",
  },
  {
    title: "Glados",
    description:
      "Le project glados consiste a crée son propre langague de programmation en haskell.\nLes concepts abordées -LISP (List Processing)\nPARSER (Analyseur Syntaxique)\nMACHINE VIRTUELLE (Machine Virtuelle à Pile)",
    link: "https://github.com/Jouzep/Glados",
    icons: [DiHaskell, SiGithubactions, FaPython],
    date: "10/20/2023",
  },
  {
    title: "Glados",
    description:
      "Le project glados consiste a crée son propre langague de programmation en haskell.\nLes concepts abordées -LISP (List Processing)\nPARSER (Analyseur Syntaxique)\nMACHINE VIRTUELLE (Machine Virtuelle à Pile)",
    link: "https://github.com/Jouzep/Glados",
    icons: [DiHaskell, SiGithubactions, FaPython],
    date: "10/20/2023",
  },
  {
    title: "Glados",
    description:
      "Le project glados consiste a crée son propre langague de programmation en haskell.\nLes concepts abordées -LISP (List Processing)\nPARSER (Analyseur Syntaxique)\nMACHINE VIRTUELLE (Machine Virtuelle à Pile)",
    link: "https://github.com/Jouzep/Glados",
    icons: [DiHaskell, SiGithubactions, FaPython],
    date: "10/20/2023",
  },
  {
    title: "Glados",
    description:
      "Le project glados consiste a crée son propre langague de programmation en haskell.\nLes concepts abordées -LISP (List Processing)\nPARSER (Analyseur Syntaxique)\nMACHINE VIRTUELLE (Machine Virtuelle à Pile)",
    link: "https://github.com/Jouzep/Glados",
    icons: [DiHaskell, SiGithubactions, FaPython, FaPython, FaPython],
    date: "10/20/2023",
  },
  {
    title: "Glados",
    description:
      "Le project glados consiste a crée son propre langague de programmation en haskell.\nLes concepts abordées -LISP (List Processing)\nPARSER (Analyseur Syntaxique)\nMACHINE VIRTUELLE (Machine Virtuelle à Pile)",
    link: "https://github.com/Jouzep/Glados",
    icons: [DiHaskell, SiGithubactions, FaPython],
    date: "10/20/2023",
  },
  {
    title: "Glados",
    description:
      "Le project glados consiste a crée son propre langague de programmation en haskell.\nLes concepts abordées -LISP (List Processing)\nPARSER (Analyseur Syntaxique)\nMACHINE VIRTUELLE (Machine Virtuelle à Pile)",
    link: "https://github.com/Jouzep/Glados",
    icons: [DiHaskell, SiGithubactions, FaPython],
    date: "10/20/2023",
  },
  {
    title: "Glados",
    description:
      "Le project glados consiste a crée son propre langague de programmation en haskell.\nLes concepts abordées -LISP (List Processing)\nPARSER (Analyseur Syntaxique)\nMACHINE VIRTUELLE (Machine Virtuelle à Pile)",
    link: "https://github.com/Jouzep/Glados",
    icons: [DiHaskell, SiGithubactions, FaPython],
    date: "10/20/2023",
  },
  {
    title: "Glados",
    description:
      "Le project glados consiste a crée son propre langague de programmation en haskell.\nLes concepts abordées -LISP (List Processing)\nPARSER (Analyseur Syntaxique)\nMACHINE VIRTUELLE (Machine Virtuelle à Pile)",
    link: "https://github.com/Jouzep/Glados",
    icons: [DiHaskell, SiGithubactions, FaPython],
    date: "10/20/2023",
  },
];
const SingleProject: React.FC<ProjectProps> = ({
  title,
  description,
  link,
  icons,
  date,
}) => {
  const OpenSocialLinkInNewTab = (link: string) => {
    window.open(link, "_blank", "noreferrer");
  };
  return (
    <div className="SkillBox">
      <div className="SkillBoxHeader">
        <div>
          <FaGithub
            className="pointer"
            onClick={() => OpenSocialLinkInNewTab(link)}
          />
          <h1>{title}</h1>
        </div>
        <p>{date}</p>
      </div>

      <div className="SkillBoxContent">
        <p>{description}</p>
      </div>
      <hr />
      <div className="ProjectSkills">
        {icons.map((Icon, index) => (
          <div className="ProjectIcons">
            <Icon key={index} />
          </div>
        ))}
      </div>
    </div>
  );
};
const Project: React.FC = () => {
  return (
    <div id="MainSkillBox">
      <div id="SkillSection">
        {ProjectArray.map((project) => {
          return (
            <SingleProject
              title={project.title}
              description={project.description}
              link={project.link}
              icons={project.icons}
              date={project.date}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Project;
