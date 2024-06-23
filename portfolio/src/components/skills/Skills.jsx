import React from "react";
import "./skills.css";
import Frontend from "./Frontend";
import Backend from "./Backend";

const Skills = () => {
    return(
        <section className="skills section" id="skills">
            <h1 className="section_title ">Skills</h1>
            <span className="section_subtitle">Technical :: </span>

            <div className=" skills__container container grid">
                <Frontend />
                <Backend />

            </div>
        </section>
    )
}

export default Skills;