import styles from "./Main.module.css";
import headshot from "../../UI/Icons/headshot-cropped.png";
import responsiveIcon from "../../UI/Icons/responsive.svg";
import muiLogo from "../../../components/UI/Icons/material-ui.svg";
import { useState, useEffect } from "react";
const skillsObj = [
  {
    react: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
  },
  {
    github:
      "https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg",
  },
  { git: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Git-logo.svg" },
  { css: "https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg" },
  { responsive: responsiveIcon },
  {
    html: "https://upload.wikimedia.org/wikipedia/commons/8/82/Devicon-html5-plain.svg",
  },
  {
    typescript:
      "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg",
  },
  {
    javascript:
      "https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg",
  },
  { mui: muiLogo },
];

const Main = (props) => {
  const [currentIcon, setCurrentIcon] = useState(skillsObj.react);
  const [counter, setCounter] = useState(0);
  const [iconClass, setIconClass] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prev) => prev + 1);
      setCurrentIcon(
        typeof Object.values(skillsObj[counter]) === "undefined"
          ? undefined
          : Object.values(skillsObj[counter])
      );
      setIconClass(
        typeof Object.keys(skillsObj[counter]) === null
          ? "invisible"
          : Object.keys(skillsObj[counter])
      );

      counter >= 8 && setCounter(0);
    }, 3000);
    return () => {
      clearInterval(interval);
    };
  }, [counter, currentIcon, iconClass]);

  return (
    <section className={styles["container"]}>
      <nav className={styles["nav-bar"]}>
        <a href="#about-section" className={styles["nav-item"]}>
          about
        </a>
        <a href="#skills-section" className={styles["nav-item"]}>
          skills
        </a>
        <a href="#past-projects--section" className={styles["nav-item"]}>
          past-projects
        </a>
        <a href="#contact-section" className={styles["nav-item"]}>
          contact
        </a>
      </nav>
      <div className={styles["body"]}>
        <h1 className={styles["header"]}>
          <span className={styles["first-span"]}>Hey, I'm</span>
          <span className={styles["second-span"]}>Joe.</span>
          <span className={styles["third-span"]}>Web Developer</span>
        </h1>
        <div className={styles["bottom-row--container"]}>
          <div className={styles["img-container"]}>
            <img alt={"Joseph"} className={styles["headshot"]} src={headshot} />
          </div>
          <div className={styles[`${iconClass}-icon--container`]}>
            <img
              alt={iconClass === null ? undefined : "icon"}
              className={styles["icon"]}
              src={currentIcon}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Main;
