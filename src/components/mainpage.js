import React, { Component } from "react";
import { Link } from "react-router-dom";
import ParticleBackground from "./particalBackground";

export default class mainpage extends Component {
  render() {
    return (
      <div className="mainBody">
        <ParticleBackground />
        <div id="text_div center_all">
          <div className="center_all">
            <h1>
              Hello, I'm<span className="title_name"> Kevin Wang</span>
            </h1>
            <h2>I am a FullStack Web Developer</h2>
            {/* <button>Ready to learn more?</button> */}
            <Link className="title_button" to="/about">
              Ready to learn more?{" "}
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
