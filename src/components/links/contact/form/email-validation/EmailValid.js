import React from "react";
import styles from "./EmailValid.module.css";

const EmailValid = (props) => {
  return (
    <div className={styles["label-input--container"]}>
      <label className={styles["label"]} htmlFor={"userEmail"}>
        Your Email
      </label>
      <input
        autoComplete="off"
        name={"userEmail"}
        type="text"
        className={styles["input"]}
        onBlur={props.onBlur}
      />
    </div>
  );
};

export default EmailValid;
