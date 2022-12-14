import React from "react";
import styles from "./HomePage.module.css";
import Skills from "../links/skills/Skills";
import Contact from "../links/contact/Contact";
import PastProjects from "../links/past-projects/PastProjects";
import About from "../links/about/About";
import Main from "../links/main/Main";

const HomePage = (props) => {
  return (
    <div className={styles["page-container"]}>
      <div className={styles["link-container"]}>
        <Main />
        <About />
        <Skills />
        <PastProjects />
        <Contact />
      </div>
      <div className={styles["bottom"]}>
        Welcome to <span className={styles["webName"]}>josephthedev.com</span>.
        Powered by
        <img
          alt={"react-icon"}
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
