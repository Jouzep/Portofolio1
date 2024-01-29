import React from "react";
import Typewriter from "typewriter-effect";
import "./Profile.css";
import logo from "../assets/500x500-000000-80-0-0.jpg";

const Profile: React.FC = () => {
  return (
    <div id="ProfileBox">
      <div id="Profile">
        <div className="ProfileText">
          <h1 className="AnimatedText">
            <Typewriter
              options={{
                strings: [
                  "Im a <strong>Full-Stack Developer</strong>",
                  "Im a <strong>Web3 Developer</strong>",
                ],
                autoStart: true,
                loop: true,
              }}
            ></Typewriter>
          </h1>
          <p>Bonjour</p>
        </div>
        <img src={logo} className="image" />
      </div>
    </div>
  );
};

export default Profile;
