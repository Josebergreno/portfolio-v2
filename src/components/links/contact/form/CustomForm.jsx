import React from "react";
import styles from "./CustomForm.module.css";
import SendIcon from "@mui/icons-material/Send";
import { useState } from "react";
import emailjs from "emailjs-com";
const CustomForm = () => {
  const [subjectInputState, setSubjectInputState] = useState("");
  const [userEmailInputState, setUserEmailInputState] = useState("");
  const [bodyInputState, setBodyInputState] = useState("");
  const [userNameInputState, setUserNameInputState] = useState("");
  const [formSent, setFormSent] = useState(false);
  const myEmail = "bergren.bergren@yahoo.com";
  const clickHandler = (e) => {
    // console.log(e.target.id);
  };
  console.log(process.env);

  const blurHandler = (e) => {
    if (e.target.id === "subject") {
      setSubjectInputState(e.target.value);
      console.log(e.target.value);
    }
    if (e.target.id === "body") {
      setBodyInputState(e.target.value);
      console.log(e.target.value);
    }
    if (e.target.id === "userEmail") {
      setEmailInputState(e.target.value);
      console.log(e.target.value);
    }
    if (e.target.id === "userName") {
      userNameInputState(e.target.value);
      console.log(e.target.value);
    }
  };

  const sendEmail = () => {};
  const sendClickHandler = (e) => {
    e.preventDefault();
    sendEmail();
  };

  return formSent === false ? (
    <form className={styles["form"]}>
      <div className={styles["label-input--container"]}>
        <label className={styles["label"]} htmlFor={"userName"}>
          Your Name
        </label>
        <input
          name={"userName"}
          type="text"
          className={styles["input"]}
          id={"userName"}
          onBlur={blurHandler}
          onClick={clickHandler}
        />
      </div>
      <div className={styles["label-input--container"]}>
        <label className={styles["label"]} htmlFor={"subject"}>
          Subject
        </label>
        <input
          name={"subject"}
          type="text"
          className={styles["input"]}
          id={"subject"}
          onBlur={blurHandler}
          onClick={clickHandler}
        />
      </div>

      <div className={styles["label-input--container"]}>
        <label className={styles["label"]} htmlFor={"userEmail"}>
          Your Email
        </label>
        <input
          name={"userEmail"}
          type="email"
          className={styles["input"]}
          id={"userEmail"}
          onBlur={blurHandler}
          onClick={clickHandler}
        />
      </div>
      <div className={styles["label-textarea--container"]}>
        <label className={styles["label"]} htmlFor={"body"}>
          Body
        </label>
        <textarea
          name={"body"}
          className={styles["body-input"]}
          rows={7}
          id={"body"}
          onBlur={blurHandler}
          onClick={clickHandler}
        />
      </div>
      <div className={styles["button-container"]}>
        <button
          onClick={sendClickHandler}
          type="submit"
          className={styles["button"]}
        >
          send
          <SendIcon />
        </button>
      </div>
    </form>
  ) : (
    <div className={styles["form"]}>
      Your email has been sent! I'll be getting back to your as soon as I can
    </div>
  );
};

export default CustomForm;
