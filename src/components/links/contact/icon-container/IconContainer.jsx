import React from "react";
import styles from "./IconContainer.module.css";

const IconContainer = (props) => {
  return (
    <div className={styles["link-container--parent"]}>
      <div
        ref={props.iconRef}
        className={
          props.iconInView ? styles["link-container"] : styles["invisible"]
        }
      >
        {" "}
        <a
          className={styles["indiv-icon--container"]}
          href="https://www.linkedin.com/in/joseph-bergren1995"
        >
          <img
            alt="linkedin-icon"
            className={styles["icon"]}
            src="https://upload.wikimedia.org/wikipedia/commons/e/e9/Linkedin_icon.svg"
          />
        </a>
        <a
          className={styles["indiv-icon--container"]}
          href="https://www.instagram.com/josebergreno"
        >
          <img
            alt="instagram-icon"
            className={styles["icon"]}
            src="https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg"
          />
        </a>
        <a
          className={styles["indiv-icon--container"]}
          href="https://github.com/Josebergreno"
        >
          <img
            alt={"github-icon"}
            className={styles["icon"]}
            src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
          />
        </a>
      </div>
    </div>
  );
};

export default IconContainer;
