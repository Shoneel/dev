import React from "react";
import "./skills.css";
import Frontend from "./Frontend";
import Backend from "./Backend";
import Devops from "./Devops";

const Skills = () => {
  return (
    <section className="skill section" id="skills">
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">My Technical Level</span>

      <div className="skills__container container grid">
        <Frontend />
        <Devops />
        <Backend />
      </div>
    </section>
  );
};

export default Skills;


