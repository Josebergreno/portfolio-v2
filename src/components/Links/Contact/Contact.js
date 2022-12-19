import React from "react";
import styles from "./Contact.module.css";
import { useInView } from "react-intersection-observer";
const ContactLink = (props) => {
  const [titleRef, titleInView] = useInView({
    threshold: 0,
    triggerOnce: true,
  });
  const [bodyRef, bodyInView] = useInView({
    threshold: 0,
    triggerOnce: true,
  });
  const [iconRef, iconInView] = useInView({
    threshold: 0,
    triggerOnce: true,
  });
  return (
    <section id="contact-section" className={styles["container"]}>
      <div className={styles["header-container"]}>
        <div
          ref={titleRef}
          className={titleInView ? styles["text-holder"] : styles["invisible"]}
        >
          Contact
        </div>
      </div>
      <div className={styles["body-container"]}>
        <div
          ref={bodyRef}
          className={
            bodyInView ? styles["how-to--contact"] : styles["invisible"]
          }
        >
          I can be contacted via e-mail by clicking{" "}
          <a
            className={styles["email-href"]}
            href="mailto:bergren.bergren@yahoo.com"
          >
            here
          </a>{" "}
          or on the following platforms. Check me out on GitHub too!
        </div>
        <div className={styles["link-container--parent"]}>
          <div
            ref={iconRef}
            className={
              iconInView ? styles["link-container"] : styles["invisible"]
            }
          >
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
      </div>
    </section>
  );
};

export default ContactLink;
