import React from "react";
import styles from "./HomePage.module.css";
import Contact from "../links/contact/Contact";
import Skills from "../links/skills/Skills";
import PastProjects from "../links/past-projects/PastProjects";
import About from "../links/about/About";
import Main from "../links/main/Main";
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
