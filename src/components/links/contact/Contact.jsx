import React from "react";
import styles from "./Contact.module.css";
import CustomForm from "./form/CustomForm";
import { useInView } from "react-intersection-observer";
import IconContainer from "./icon-container/IconContainer";
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
          <CustomForm />
          <span className={styles["span"]}>
            {" "}
            Check me out on the following platforms!
          </span>
        </div>
        <IconContainer iconRef={iconRef} iconInView={iconInView} />
      </div>
    </section>
  );
};

export default ContactLink;
