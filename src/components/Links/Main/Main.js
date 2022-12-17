import styles from "./Main.module.css";
import headshot from "../../UI/Icons/headshot-cropped.png";
import responsiveIcon from "../../UI/Icons/responsive.svg";
import muiLogo from "../../../components/UI/Icons/material-ui.svg";

const Main = (props) => {
  const skillsArr = {
    github:
      "https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg",
    react:
      "https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg",
    git: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Git-logo.svg",
    css: (
      <>
        https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg
      </>
    ),
    responsive: { responsiveIcon },
    html: "https://upload.wikimedia.org/wikipedia/commons/8/82/Devicon-html5-plain.svg",
    typescript: (
      <>
        https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg
      </>
    ),
    javascript: "hello",
  };
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
          <div className={styles["icon-container"]}>
            <img
              alt={"react-icon"}
              className={styles["icon"]}
              src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Main;

// from an Array, map for for duplicates
