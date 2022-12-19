import React from "react";
import styles from "./HomePage.module.css";
import Contact from "../Links/Contact/Contact";
import Skills from "../Links/Skills/Skills";
import PastProjects from "../Links/Past-projects/PastProjects";
import About from "../Links/About/About";
import Main from "../Links/Main/Main";

const HomePage = (props) => {
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
        Welcome to <span className={styles["webName"]}>josephthedev.com</span>
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
