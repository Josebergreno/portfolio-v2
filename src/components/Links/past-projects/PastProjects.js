import styles from "./PastProjects.module.css";
import snakeGameThumbnail from "../../UI/Icons/newSnakeGameThumbnail.jpg";
import { useInView } from "react-intersection-observer";

const PastProjects = (props) => {
  const [titleRef, titleInView] = useInView({
    threshold: 0,
    triggerOnce: true,
  });
  return (
    <section
      id="past-projects--section"
      onClick={props.onClick}
      className={styles["container"]}
    >
      <div className={styles["header-container"]}>
        <div
          ref={titleRef}
          className={titleInView ? styles["text-holder"] : styles["invisible"]}
        >
          Past Projects
        </div>
      </div>

      <div
        ref={titleRef}
        className={titleInView ? styles["project-body"] : styles["invisible"]}
      >
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
