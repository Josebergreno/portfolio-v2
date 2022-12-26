import React from "react";
import styles from "./EmailValid.module.css";

const EmailValid = (props) => {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": `${process.env.REACT_APP_RAPID_API_KEY}`,
      "X-RapidAPI-Host": `${process.env.REACT_APP_API_HOST}`,
    },
  };

  fetch(
    "https://mailcheck.p.rapidapi.com/?domain=bergen.bergren%40yahoo.com",
    options
  )
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.error(err));
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
