import React from "react";
import styles from "./ImageSlideIn.module.css";
const ImageSlideIn = (props) => {
  return (
    <div className={styles["img-container"]}>
      <img alt={"Joseph"} className={styles["headshot"]} src={props.headshot} />
      <img
        alt={"arrow"}
        src={props.arrowDown}
        className={props.arrowVisible ? styles["arrow"] : styles["invisible"]}
      />
    </div>
  );
};

export default ImageSlideIn;
