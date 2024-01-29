import React from "react";
import NavBar from "./Component/NavBar";
import Profile from "./Component/Profile";
import Skills from "./Component/Skills";
import Projet from "./Component/Project";
const App: React.FC = () => {
  const containerStyle = {
    height: "200vh",
    "align-items": "center",
    display: "flex",
    "flex-direction": "column",
  };

  return (
    <div>
      <NavBar />
      <div style={containerStyle}>
        <Profile />
        <Projet />
        <Skills />
      </div>
    </div>
  );
};
export default App;
