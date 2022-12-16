import styles from "./PastProjects.module.css";
import snakeGameThumbnail from "../../UI/Icons/newSnakeGameThumbnail.jpg";

const PastProjects = (props) => {
  return (
    <section
      id="past-projects--section"
      onClick={props.onClick}
      className={styles["container"]}
    >
      <div className={styles["header-container"]}>
        <div className={styles["text-holder"]}>Past projects</div>
      </div>

      <div className={styles["project-body"]}>
        <button className={styles["button"]}>back</button>
        <a href="https://sn8ke-game.netlify.app/" className={styles["link"]}>
          <img
            className={styles["snake-game--thumbnail"]}
            alt="snake-game"
            src={snakeGameThumbnail}
          ></img>
          Snake Game
        </a>
        <button className={styles["button"]}>next</button>
      </div>
    </section>
  );
};

export default PastProjects;
