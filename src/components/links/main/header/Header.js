import React from "react";
import styles from "./Header.module.css";
const Header = () => {
  return (
    <h1 className={styles["header"]}>
      <span className={styles["first-span"]}>Hey, I'm</span>
      <span className={styles["second-span"]}>Joe.</span>
      <span className={styles["third-span"]}>Web Developer</span>
    </h1>
  );
};

export default Header;
