import React from "react";
import styles from "./Contact.module.css";

const ContactLink = (props) => {
  return (
    <>
      <a
        href="google.com"
        onClick={props.onClick}
        className={styles["container"]}
      >
        <div className={styles["contact-container"]}>
          <div className={styles["text-holder"]}>Contact </div>
        </div>
      </a>
    </>
  );
};

export default ContactLink;
