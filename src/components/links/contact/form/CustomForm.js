import React from "react";
import styles from "./CustomForm.module.css";
import SendIcon from "@mui/icons-material/Send";

const CustomForm = () => {
  return (
    <form className={styles["form"]}>
      <div className={styles["label-input--container"]}>
        <label className={styles["label"]} htmlFor={"subject"}>
          Subject
        </label>
        <input type="text" className={styles["input"]} id={"subject"} />
      </div>
      <div className={styles["label-input--container"]}>
        <label className={styles["label"]} htmlFor={"email"}>
          Your Email
        </label>
        <input type="email" className={styles["input"]} id={"email"} />
      </div>
      <div className={styles["label-textarea--container"]}>
        <label className={styles["label"]} htmlFor={"body"}>
          Body
        </label>
        <textarea className={styles["body-input"]} rows={7} id={"body"} />
      </div>
      <div className={styles["button-container"]}>
        <button type="submit" className={styles["button"]}>
          send
          <SendIcon />
        </button>
      </div>
    </form>
  );
};

export default CustomForm;
