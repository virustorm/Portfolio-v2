import React from "react";

import "./styles/main.css";

import ParticleBackground from "./components/particalBackground";
import Main from "./components/mainpage";

function App() {
  return (
    <div className="appDiv">
      <ParticleBackground />
      <Main />
    </div>
  );
}

export default App;
