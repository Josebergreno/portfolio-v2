import styles from "./PastProjects.module.css";

const PastProjects = (props) => {
  return (
    <>
      <a
        href="google.com"
        onClick={props.onClick}
        className={styles["container"]}
      >
        <div className={styles["past-projects--container"]}>
          <div className={styles["text-holder"]}>Past projects</div>
        </div>
      </a>
    </>
  );
};

export default PastProjects;
