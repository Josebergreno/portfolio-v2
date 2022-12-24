import React from "react";
import styles from "./CustomForm.module.css";
import SendIcon from "@mui/icons-material/Send";
import { useState, useRef } from "react";
import { refType } from "@mui/utils";
const CustomForm = () => {
  const subjectInputRef = useRef("");
  const emailInputRef = useRef("");
  const bodyInputRef = useRef("");
  const [subjectInputState, setSubjectInputState] = useState("");
  const [emailInputState, setEmailInputState] = useState("");
  const [bodyInputState, setBodyInputState] = useState("");

  const clickHandler = (e) => {
    console.log(e.target);
  };

  const blurHandler = (e) => {
    // validation
    console.log(e.target.value);
  };

  const sendEmail = async () => {
    const url = "https://rapidprod-sendgrid-v1.p.rapidapi.com/mail/send";

    const options = {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "X-RapidAPI-Key": "b123967923msh19bc23c13dee912p17e95bjsn19b6a6d19eb1",
        "X-RapidAPI-Host": "rapidprod-sendgrid-v1.p.rapidapi.com",
      },
      body: '{"personalizations":[{"to":[{"email":"john@example.com"}],"subject":"Hello, World!"}],"from":{"email":"from_address@example.com"},"content":[{"type":"text/plain","value":"Hello, World!"}]}',
    };

    const email = await fetch(url, options)
      .then((res) => res.json())
      .then((json) => console.log(json))
      .catch((err) => console.error("error:" + err));
  };

  return (
    <form className={styles["form"]}>
      <div className={styles["label-input--container"]}>
        <label className={styles["label"]} htmlFor={"subject"}>
          Subject
        </label>
        <input
          ref={subjectInputRef}
          type="text"
          className={styles["input"]}
          id={"subject"}
          onBlur={blurHandler}
          onClick={clickHandler}
        />
      </div>
      <div className={styles["label-input--container"]}>
        <label className={styles["label"]} htmlFor={"email"}>
          Your Email
        </label>
        <input
          ref={emailInputRef}
          type="email"
          className={styles["input"]}
          id={"email"}
          onBlur={blurHandler}
          onClick={clickHandler}
        />
      </div>
      <div className={styles["label-textarea--container"]}>
        <label className={styles["label"]} htmlFor={"body"}>
          Body
        </label>
        <textarea
          ref={bodyInputRef}
          className={styles["body-input"]}
          rows={7}
          id={"body"}
          onBlur={blurHandler}
          onClick={clickHandler}
        />
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
