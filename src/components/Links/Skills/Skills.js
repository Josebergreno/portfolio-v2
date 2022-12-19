import styles from "./Skills.module.css";
import responsiveIcon from "../../UI/Icons/responsive.svg";
import muiLogo from "../../../components/UI/Icons/material-ui.svg";
import { useState } from "react";
import { useInView } from "react-intersection-observer";

const SkillsLink = (props) => {
  const [titleRef, titleInView] = useInView({
    threshold: 0,
    triggerOnce: true,
  });
  const [firstRowRef, firstRowInView] = useInView({
    threshold: 0,
    triggerOnce: true,
  });
  const [secondRowRef, secondRowInView] = useInView({
    threshold: 0,
    triggerOnce: true,
  });
  const [thirdRowRef, thirdRowInView] = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  const [clicked, setClicked] = useState(false);
  const clickHandler = (e) => {
    setClicked(
      e.target.className.includes("indiv-icon--container")
        ? e.target.lastChild.textContent
        : e.target.parentElement.lastChild.textContent
    );
  };
  return (
    <section id="skills-section" className={styles["container"]}>
      <div className={styles["skills-container"]}>
        <div
          ref={titleRef}
          className={titleInView ? styles["text-holder"] : styles["invisible"]}
        >
          Skills
        </div>
      </div>

      <div className={styles["svg-main--container"]}>
        <div
          ref={firstRowRef}
          className={
            firstRowInView ? styles["row-container"] : styles["invisible"]
          }
        >
          <div className={styles["indiv-icon--container"]}>
            <img
              alt={"react-icon"}
              className={styles["icon"]}
              src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
            />
            <span className={styles["under-title"]}>React</span>
          </div>

          <div
            onClick={clickHandler}
            className={styles["indiv-icon--container"]}
          >
            {clicked !== "Material-UI" ? (
              <>
                <img
                  alt={"mui-icon"}
                  className={styles["icon"]}
                  src={muiLogo}
                />
                <span className={styles["under-title"]}>Material-UI</span>
              </>
            ) : (
              <div className={styles["description"]}>
                Material-UI is a react component library that helps streamline
                the development process and ensure a consistent website build
              </div>
            )}
          </div>

          <div className={styles["indiv-icon--container"]}>
            <img
              alt={"typescript-icon"}
              className={styles["icon"]}
              src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg"
            />
            <span className={styles["under-title"]}>Typescript</span>
          </div>
        </div>
        <div
          ref={secondRowRef}
          className={
            secondRowInView ? styles["row-container"] : styles["invisible"]
          }
        >
          <div className={styles["indiv-icon--container"]}>
            <img
              alt={"javascript-icon"}
              className={styles["icon"]}
              src="https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg"
            />
            <span className={styles["under-title"]}>Javascript</span>
          </div>
          <div className={styles["indiv-icon--container"]}>
            <img
              alt={"css-icon"}
              className={styles["icon"]}
              src="https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg"
            />
            <span className={styles["under-title"]}>CSS</span>
          </div>
          <div className={styles["indiv-icon--container"]}>
            <img
              alt={"html-icon"}
              className={styles["icon"]}
              src="https://upload.wikimedia.org/wikipedia/commons/8/82/Devicon-html5-plain.svg"
            />
            <span className={styles["under-title"]}>HTML</span>
          </div>
        </div>
        <div
          ref={thirdRowRef}
          className={
            thirdRowInView ? styles["row-container"] : styles["invisible"]
          }
        >
          <div className={styles["indiv-icon--container"]}>
            <img
              alt={"responsive-icon"}
              className={styles["icon"]}
              src={responsiveIcon}
            />
            <span className={styles["under-title"]}>Responsive Design</span>
          </div>
          <div className={styles["indiv-icon--container"]}>
            <img
              alt={"git-icon"}
              className={styles["git-icon"]}
              src="https://upload.wikimedia.org/wikipedia/commons/e/e0/Git-logo.svg"
            />
            <span className={styles["under-title"]}>git</span>
          </div>
          <div className={styles["indiv-icon--container"]}>
            <img
              alt={"github-icon"}
              className={styles["icon"]}
              src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
            />
            <span className={styles["under-title"]}>Github</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsLink;
