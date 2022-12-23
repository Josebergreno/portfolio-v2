import React from "react";
import styles from "./HomePage.module.css";
import Contact from "../links/contact/Contact.js";
import Skills from "../links/skills/Skills.js";
import PastProjects from "../links/past-projects/PastProjects.js";
import About from "../links/about/About.js";
import Main from "../links/main/Main.js";
import PageBottom from "./page-bottom/PageBottom";

const HomePage = () => {
  return (
    <div className={styles["page-container"]}>
      <div className={styles["section-container"]}>
        <Main />
        <About />
        <Skills />
        <PastProjects />
        <Contact />
      </div>
      <PageBottom />
    </div>
  );
};

export default HomePage;
