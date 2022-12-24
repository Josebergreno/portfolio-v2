import styles from "./Skills.module.css";
import responsiveIcon from "../../ui/icons/responsive.svg";
import muiLogo from "../../../components/ui/icons/material-ui.svg";
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

  const [clicked, setClicked] = useState("");
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
          <div
            onClick={clickHandler}
            className={styles["indiv-icon--container"]}
          >
            {clicked !== "React" ? (
              <>
                <img
                  alt={"react-icon"}
                  className={styles["icon"]}
                  src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
                />
                <span className={styles["under-title"]}>React</span>
              </>
            ) : (
              <div className={styles["description"]}>
                React builds interactive user interfaces and web applications
                quickly and efficiently with significantly less code than you
                would with vanilla JavaScript.
              </div>
            )}
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
          <div
            onClick={clickHandler}
            className={styles["indiv-icon--container"]}
          >
            {clicked !== "Typescript" ? (
              <>
                <img
                  alt={"typescript-icon"}
                  className={styles["icon"]}
                  src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg"
                />
                <span className={styles["under-title"]}>Typescript</span>
              </>
            ) : (
              <div className={styles["description"]}>
                TypeScript extends JavaScript and improves the developer
                experience. It enables developers to add type safety to their
                projects
              </div>
            )}
          </div>
        </div>
        <div
          ref={secondRowRef}
          className={
            secondRowInView ? styles["row-container"] : styles["invisible"]
          }
        >
          <div
            onClick={clickHandler}
            className={styles["indiv-icon--container"]}
          >
            {clicked !== "Javascript" ? (
              <>
                <img
                  alt={"javascript-icon"}
                  className={styles["icon"]}
                  src="https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg"
                />
                <span className={styles["under-title"]}>Javascript</span>
              </>
            ) : (
              <div className={styles["description"]}>
                Javascript is used by programmers across the world to create
                dynamic and interactive web content like applications and
                browsers.
              </div>
            )}
          </div>
          <div
            onClick={clickHandler}
            className={styles["indiv-icon--container"]}
          >
            {clicked !== "CSS" ? (
              <>
                <img
                  alt={"css-icon"}
                  className={styles["icon"]}
                  src="https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg"
                />
                <span className={styles["under-title"]}>CSS</span>
              </>
            ) : (
              <div className={styles["description"]}>
                CSS is the language we use to style an HTML document. CSS
                describes how HTML elements should be displayed.
              </div>
            )}
          </div>
          <div
            onClick={clickHandler}
            className={styles["indiv-icon--container"]}
          >
            {clicked !== "HTML" ? (
              <>
                <img
                  alt={"html-icon"}
                  className={styles["icon"]}
                  src="https://upload.wikimedia.org/wikipedia/commons/8/82/Devicon-html5-plain.svg"
                />
                <span className={styles["under-title"]}>HTML</span>
              </>
            ) : (
              <div className={styles["description"]}>
                HTML is the standard markup language for Web pages. With HTML
                you can create your own Website.
              </div>
            )}
          </div>
        </div>
        <div
          ref={thirdRowRef}
          className={
            thirdRowInView ? styles["row-container"] : styles["invisible"]
          }
        >
          <div
            onClick={clickHandler}
            className={styles["indiv-icon--container"]}
          >
            {clicked !== "Responsive Design" ? (
              <>
                <img
                  alt={"responsive-icon"}
                  className={styles["icon"]}
                  src={responsiveIcon}
                />
                <span className={styles["under-title"]}>Responsive Design</span>
              </>
            ) : (
              <div className={styles["description"]}>
                Responsive Design is a development approach that dynamic changes
                the appearance of a website, depending on the screen size and
                orientation of the device being used to view it.
              </div>
            )}
          </div>
          <div
            onClick={clickHandler}
            className={styles["indiv-icon--container"]}
          >
            {clicked !== "git" ? (
              <>
                <img
                  alt={"git-icon"}
                  className={styles["git-icon"]}
                  src="https://upload.wikimedia.org/wikipedia/commons/e/e0/Git-logo.svg"
                />
                <span className={styles["under-title"]}>git</span>
              </>
            ) : (
              <div className={styles["description"]}>
                Git is a free and open source distributed version control system
                designed to handle everything from small to very large projects
                with speed and efficiency.
              </div>
            )}
          </div>
          <div
            onClick={clickHandler}
            className={styles["indiv-icon--container"]}
          >
            {clicked !== "Github" ? (
              <>
                <img
                  alt={"github-icon"}
                  className={styles["icon"]}
                  src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
                />
                <span className={styles["under-title"]}>Github</span>
              </>
            ) : (
              <div className={styles["description"]}>
                GitHub is a code hosting platform for version control and
                collaboration. It lets you and others work together on projects
                from anywhere.
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsLink;
