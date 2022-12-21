import React from "react";
import styles from "./HomePage.module.css";
import Contact from "../links/contact/Contact.js";
import Skills from "../links/skills/Skills.js";
import PastProjects from "../links/past-projects/PastProjects.js";
import About from "../links/about/About.js";
import Main from "../links/main/Main.js";

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
      <div className={styles["bottom"]}>
        Welcome to
        <span className={styles["webName"]}>josephthedev.com</span>
        . Powered by
        <img
          alt={"coffee-icon"}
          className={styles["icon"]}
          src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Coffee_cup_icon.svg"
        />
        and
        <img
          alt={"react-icon"}
          className={styles["icon"]}
          src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
        />
      </div>
    </div>
  );
};

export default HomePage;
