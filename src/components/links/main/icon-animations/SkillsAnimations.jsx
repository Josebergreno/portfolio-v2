import React from "react";
import styles from "./SkillsAnimations.module.css";

const SkillsAnimations = (props) => {
  return (
    <div className={styles[`${props.iconClass}-icon--container`]}>
      <img
        alt={props.iconClass === null ? undefined : "icon"}
        className={styles["icon"]}
        src={props.currentIcon}
      />
    </div>
  );
};

export default SkillsAnimations;
