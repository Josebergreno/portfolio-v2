import styles from "./About.module.css";
import img from "../../UI/Icons/coding-pic.png";

const About = (props) => {
  return (
    <>
      <a
        href="google.com"
        onClick={props.onClick}
        className={styles["container"]}
      >
        <div className={styles["about-container"]}>
          <div className={styles["text-holder"]}>About Me</div>
        </div>
        <img className={styles["coding-pic"]} alt="coding" src={img}></img>
      </a>
    </>
  );
};

export default About;
