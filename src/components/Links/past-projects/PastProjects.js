import styles from "./PastProjects.module.css";
import snakeGameThumbnail from "../../ui/icons/newSnakeGameThumbnail.jpg";
import portfolioThumbnail from "../../ui/icons/portfolio-thumbnail.jpg";
import { useInView } from "react-intersection-observer";
import { useState } from "react";

const PastProjects = () => {
  const projects = [
    [
      "Portfolio Website V-One",
      portfolioThumbnail,
      "https://www.josephthedev.com",
    ],
    ["Snake Game", snakeGameThumbnail, "https://sn8ke-game.netlify.app/"],
  ];
  const [currentTitle, setCurrentTitle] = useState(projects[0][0]);
  const [currentThumbnail, setCurrentThumbnail] = useState(projects[0][1]);
  const [currentHref, setCurrentHref] = useState(projects[0][2]);
  const [currentClass, setCurrentClass] = useState(styles["thumbnail"]);
  const [titleRef, titleInView] = useInView({
    threshold: 0,
    triggerOnce: true,
  });
  const nextClickHandler = (e) => {
    setCurrentHref(projects[1][2]);
    setCurrentTitle(projects[1][0]);
    setCurrentThumbnail(projects[1][1]);
    setCurrentClass(styles["fade-in"]);
  };
  const backClickHandler = (e) => {
    setCurrentHref(projects[0][2]);
    setCurrentTitle(projects[0][0]);
    setCurrentThumbnail(projects[0][1]);
  };
  return (
    <section id="past-projects--section" className={styles["container"]}>
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
        <button onClick={backClickHandler} className={styles["button"]}>
          back
        </button>
        <a href={currentHref} className={styles["link"]}>
          <img
            className={currentClass}
            alt="thumbnail"
            src={currentThumbnail}
          ></img>
          <span className={styles["under-title"]}>{currentTitle}</span>
        </a>
        <button onClick={nextClickHandler} className={styles["button"]}>
          next
        </button>
      </div>
    </section>
  );
};

export default PastProjects;
