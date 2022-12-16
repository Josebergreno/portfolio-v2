import styles from "./Main.module.css";
import MailIcon from "@mui/icons-material/Mail";
import CodeIcon from "@mui/icons-material/Code";
import headshot from "../../UI/Icons/headshot-cropped.png";

const Main = (props) => {
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
        <img alt={"Joseph"} className={styles["headshot"]} src={headshot}></img>
      </div>
    </section>
  );
};

export default Main;

// from an Array, map for for duplicates
