import React from "react";
import Particles from "react-particles-js";
import ParticleConfig from "../config/partical-config";

export default function ParticleBackground() {
  return (
    <Particles
      className="particalBackground"
      params={ParticleConfig}
    ></Particles>
  );
}
