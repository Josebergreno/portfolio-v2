import styles from "./About.module.css";

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
      </a>
    </>
  );
};

export default About;
