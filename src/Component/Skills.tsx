import React from "react";
import "./Skills.css";
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

interface ChildProps {
  name: string;
  level: string;
  icons: React.FC;
}

const SkillsBox: React.FC<ChildProps> = ({ name, level, icons }) => {
  return (
    <div className="skillBox">
      <div className="skillText">
        <h1 className="skillLangague">{name}</h1>
        <h4 className="skillLevel">{level}</h4>
      </div>
      <div className="iconskill">{icons({})}</div>
    </div>
  );
};

const Skills: React.FC = () => {
  const Language: ChildProps[] = [
    { name: "Langague C", level: "Expert", icons: FaC },
    { name: "TypeScript", level: "Avancé", icons: TbBrandTypescript },
    { name: "NodeJS", level: "Avancé", icons: FaNode },
    { name: "C++", level: "Avancé", icons: TbBrandCpp },
    { name: "Haskell", level: "Avancé", icons: DiHaskell },
    { name: "Python", level: "Avancé", icons: FaPython },
    { name: "Rust", level: "Intermédiaire ", icons: FaRust },
    { name: "Solidity", level: "Intermédiaire", icons: SiSolidity },
    { name: "Golang", level: "Débutant", icons: FaGolang },
  ];

  const Database: ChildProps[] = [
    { name: "MongoDB", level: "Intermédiaire", icons: SiMongodb },
    { name: "MySQL", level: "Débutant", icons: SiMysql },
  ];
  const Other: ChildProps[] = [
    { name: "GitHub", level: "Intermédiaire", icons: FaGithub },
    { name: "Docker", level: "Intermédiaire", icons: GrDocker },
    { name: "Foundry", level: "Intermédiaire", icons: SiGithubactions },
    { name: "GitHub Action", level: "Débutant", icons: SiGithubactions },
  ];
  return (
    <div id="MainBox">
      <h1 className="boxTitle">Languages</h1>
      <div className="Box1">
        {Language.map((skill) => {
          return (
            <SkillsBox
              name={skill.name}
              level={skill.level}
              icons={skill.icons}
            />
          );
        })}
      </div>
      <h1 className="boxTitle">Base de données</h1>
      <div className="Box1">
        {Database.map((skill) => {
          return (
            <SkillsBox
              name={skill.name}
              level={skill.level}
              icons={skill.icons}
            />
          );
        })}
      </div>
      <h1 className="boxTitle">Autres</h1>
      <div className="Box1">
        {Other.map((skill) => {
          return (
            <SkillsBox
              name={skill.name}
              level={skill.level}
              icons={skill.icons}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
