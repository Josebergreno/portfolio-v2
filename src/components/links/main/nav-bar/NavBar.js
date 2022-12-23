import React from "react";
import styles from "./NavBar.module.css";

const NavBar = () => {
  return (
    <nav className={styles["nav-bar"]}>
      <a href="#about-section" className={styles["nav-item"]}>
        about
      </a>
      <a href="#skills-section" className={styles["nav-item"]}>
        skills
      </a>
      <a href="#past-projects--section" className={styles["nav-item"]}>
        past-projects
      </a>
      <a href="#contact-section" className={styles["nav-item"]}>
        contact
      </a>
    </nav>
  );
};

export default NavBar;
