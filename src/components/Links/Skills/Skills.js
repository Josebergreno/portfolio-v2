import styles from "./Skills.module.css";

const SkillsLink = (props) => {
  return (
    <>
      <a
        href="google.com"
        className={styles["container"]}
        onClick={props.onClick}
      >
        <div className={styles["skills-container"]}>
          <div className={styles["text-holder"]}>Skills</div>
        </div>
      </a>
    </>
  );
};

export default SkillsLink;
