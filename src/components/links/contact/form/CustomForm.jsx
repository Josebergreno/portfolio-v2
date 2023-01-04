import React from "react";
import styles from "./CustomForm.module.css";
import SendIcon from "@mui/icons-material/Send";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import EmailValid from "./email-validation/EmailValid";

const CustomForm = () => {
  const form = useRef();
  const [subjectInputState, setSubjectInputState] = useState("");
  const [userEmailInputState, setUserEmailInputState] = useState("");
  const [bodyInputState, setBodyInputState] = useState("");
  const [userNameInputState, setUserNameInputState] = useState("");
  const [formSent, setFormSent] = useState(false);

  const blurHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    if (name === "subject") {
      setSubjectInputState(value);
    }
    if (name === "body") {
      setBodyInputState(value);
    }
    if (name === "userEmail") {
      setUserEmailInputState(value);
    }
    if (name === "userName") {
      setUserNameInputState(value);
    }
  };
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_PUBLIC_API_KEY,
        {
          userName: `${userNameInputState}`,
          subject: `${subjectInputState}`,
          userEmail: `${userEmailInputState}`,
          body: `${bodyInputState}`,
        }
      )
      .then((res) => {
        console.log(res);
        console.log("Message Sent");
        setFormSent(true);
      })
      .catch((err) => console.log(err));
  };

  return formSent === false ? (
    <form ref={form} className={styles["form"]} onSubmit={sendEmail}>
      <div className={styles["label-input--container"]}>
        <label className={styles["label"]} htmlFor={"userName"}>
          Your Name
        </label>
        <input
          autoComplete="off"
          name={"userName"}
          type="text"
          className={styles["input"]}
          onBlur={blurHandler}
        />
      </div>
      <div className={styles["label-input--container"]}>
        <label className={styles["label"]} htmlFor={"subject"}>
          Subject
        </label>
        <input
          autoComplete="off"
          name={"subject"}
          type="text"
          className={styles["input"]}
          onBlur={blurHandler}
        />
      </div>

      <EmailValid onBlur={blurHandler} />
      <div className={styles["label-textarea--container"]}>
        <label className={styles["label"]} htmlFor={"body"}>
          Body
        </label>
        <textarea
          autoComplete="off"
          name={"body"}
          className={styles["textarea"]}
          onBlur={blurHandler}
          rows={4}
        />
      </div>
      <div className={styles["button-container"]}>
        <button type="submit" className={styles["button"]}>
          Send <SendIcon sx={{ width: "5vmin" }} />
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
