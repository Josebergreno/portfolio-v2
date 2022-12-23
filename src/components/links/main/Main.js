import styles from "./Main.module.css";
import headshot from "../../ui/icons/headshot-cropped.png";
import responsiveIcon from "../../ui/icons/responsive.svg";
import muiLogo from "../../../components/ui/icons/material-ui.svg";
import arrowDown from "../../ui/icons/down-arrow.svg";
import SkillsAnimations from "../main/icon-animations/SkillsAnimations";
import NavBar from "./nav-bar/NavBar";
import Header from "./header/Header";
import ImageSlideIn from "./image-slide-in/ImageSlideIn";
import { useState, useEffect } from "react";

const skillsObj = [
  {
    react: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
  },
  {
    github:
      "https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg",
  },
  { git: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Git-logo.svg" },
  { css: "https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg" },
  { responsive: responsiveIcon },
  {
    html: "https://upload.wikimedia.org/wikipedia/commons/8/82/Devicon-html5-plain.svg",
  },
  {
    typescript:
      "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg",
  },
  {
    javascript:
      "https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg",
  },
  { mui: muiLogo },
];

const Main = (props) => {
  const [currentIcon, setCurrentIcon] = useState(skillsObj.react);
  const [counter, setCounter] = useState(0);
  const [iconClass, setIconClass] = useState(null);
  const [arrowVisible, setArrowVisible] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prev) => prev + 1);
      setCurrentIcon(
        typeof Object.values(skillsObj[counter]) === "undefined"
          ? undefined
          : Object.values(skillsObj[counter])
      );
      setIconClass(
        Object.keys(skillsObj[counter]) === null
          ? "invisible"
          : Object.keys(skillsObj[counter])
      );
      setArrowVisible(true);
      counter >= 8 && setCounter(0);
    }, 3000);
    return () => {
      clearInterval(interval);
    };
  }, [counter, currentIcon, iconClass]);

  return (
    <section className={styles["container"]}>
      <NavBar />
      <div className={styles["body"]}>
        <Header />

        <div className={styles["bottom-row--container"]}>
          <ImageSlideIn
            arrowVisible={arrowVisible}
            arrowDown={arrowDown}
            headshot={headshot}
          />
          <SkillsAnimations iconClass={iconClass} currentIcon={currentIcon} />
        </div>
      </div>
    </section>
  );
};

export default Main;
