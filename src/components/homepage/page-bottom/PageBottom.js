import React from "react";
import styles from "./PageBottom.module.css";

const PageBottom = () => {
  return (
    <div className={styles["bottom"]}>
      Welcome to
      <span className={styles["webName"]}>josephthedev.com</span>
      . Powered by
      <img
        alt={"coffee"}
        className={styles["icon"]}
        src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Coffee_cup_icon.svg"
      />
      and
      <img
        alt={"react"}
        className={styles["icon"]}
        src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
      />
    </div>
  );
};

export default PageBottom;
