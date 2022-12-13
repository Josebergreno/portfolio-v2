import styles from "./Main.module.css";

import { useEffect, useState } from "react";

const Main = (props) => {
  const [activeLetter, setActiveLetter] = useState("");
  const [randomNum, setRandomNum] = useState(0);

  const headerEffect = ["Hi I'm", "Joe.", "Web", "Developer"];
  const splitArr = headerEffect.join("").split("");

  useEffect(() => {
    const interval = setInterval(() => {
      setRandomNum(Math.floor(Math.random() * 21) + 1);
      setActiveLetter(splitArr[randomNum]);
    }, 3000);
    return () => clearInterval(interval);
  }, [activeLetter, randomNum, splitArr]);

  return (
    <>
      <a
        href="google.com"
        onClick={props.onClick}
        className={styles["container"]}
      >
        <nav className={styles["nav-bar"]}>
          <a href="google.com" className={styles["nav-item"]}>
            about
          </a>
          <a href="google.com" className={styles["nav-item"]}>
            contact
          </a>
          <a href="google.com" className={styles["nav-item"]}>
            skills
          </a>
          <a href="google.com" className={styles["nav-item"]}>
            past-projects
          </a>
        </nav>
        <div className={styles["heading-container"]}>
          <h1 className={styles["h1"]}>
            {headerEffect.map((val) => (
              <span key={val} className={styles["span-container"]}>
                {val.split("").map((val, i) => (
                  <span
                    className={
                      val === activeLetter && val !== " "
                        ? styles["flicker"]
                        : styles["span"]
                    }
                    key={Math.random()}
                  >
                    {val}
                  </span>
                ))}
              </span>
            ))}
          </h1>
        </div>
      </a>
    </>
  );
};

export default Main;
