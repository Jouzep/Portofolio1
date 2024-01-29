import React, { CSSProperties } from "react";
import Color from "../Constant/Color";
import "./NavBar.css";
import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const Navbar: React.FC = () => {
  const socialLinks: Record<number, string> = {
    1: "https://github.com/Jouzep",
    2: "https://www.linkedin.com/in/joseph-yu-9b1329229/",
    3: "https://www.instagram.com/jozepyu/",
  };

  async function scrolldiv(id: string) {
    const element = document.getElementById(id);
    if (element) {
      console.log(element.offsetTop - 100);
      window.scrollTo({
        top:
          element.getBoundingClientRect().top -
          document.body.getBoundingClientRect().top -
          100,
        behavior: "smooth",
      });
    }
  }

  const OpenSocialLinkInNewTab = (index: number) => {
    window.open(socialLinks[index], "_blank", "noreferrer");
  };
  return (
    <div className="fixed">
      <div className="navbar space_between">
        <div className=" navigation_link textStyle">
          <div onClick={() => scrolldiv("Profile")}>Accueil</div>
          <div onClick={() => scrolldiv("SkillSection")}>Projets</div>
          <div onClick={() => scrolldiv("MainBox")}>Compétences</div>
          <div onClick={() => scrolldiv("Profile")}>Formation</div>
        </div>
        <div className="space_between">
          <div id="SocialLinkSection">
            {/* <div className="name textStyle">Joseph YU</div> */}

            <FaGithub
              className="SocialIcons"
              id="Github"
              onClick={() => OpenSocialLinkInNewTab(1)}
            />
            <FaLinkedinIn
              className="SocialIcons"
              id="Linkedin"
              onClick={() => OpenSocialLinkInNewTab(2)}
            />
            <FaInstagram
              className="SocialIcons"
              id="Instagram"
              onClick={() => OpenSocialLinkInNewTab(3)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
