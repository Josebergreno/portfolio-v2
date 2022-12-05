import styles from "./CommandLine.module.css";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import MinimizeOutlinedIcon from "@mui/icons-material/MinimizeOutlined";
import CropSquareOutlinedIcon from "@mui/icons-material/CropSquareOutlined";
import KeyboardOutlinedIcon from "@mui/icons-material/KeyboardOutlined";
import { useEffect, useState } from "react";

const CommandLine = (props) => {
  const directory = {
    about: "cd About",
    contact: "cd Contact",
    projects: "cd Past Projects",
    skills: "cd Skills",
  };

  const iconSize = () => {
    if (window.innerWidth < 550) {
      return "medium";
    }
  };
  const [typing, setTyping] = useState("");
  const [counter, setCounting] = useState(0);

  // updating first line date
  const today = new Date().toDateString();
  const firstLineUpdate = () => {
    return `Prompt System [Latest update ${today}]`;
  };
  // typing function for changing folders
  const CurrentLocation = "C:Users\\Joseph\\Desktop\\josephs-portfolio>";

  useEffect(() => {
    const interval = setTimeout(() => {
      setCounting((prev) => prev + 1);
      setTyping((prev) => {
        const array = [...`cd ${props.handle}`];
        const filter = array.filter((val, i) => {
          if (i === counter) {
            array.splice(1);
            return val;
          }
        });

        return [...prev, ...filter];
      });
    }, 350);
    return () => clearTimeout(interval);
  }, [typing, counter, directory.about, props.handle]);

  return (
    <>
      <div className={styles["main-container"]}>
        <div className={styles["command-line--container"]}>
          <div className={styles["top-bar"]}>
            <div>
              <div className={styles["left-grouping"]}>
                <KeyboardOutlinedIcon
                  fontSize="small"
                  sx={{ fontSize: `${iconSize()}` }}
                />
                <span className={styles["title"]}>Joe's Command Line</span>
              </div>
            </div>

            <div className={styles["right-grouping"]}>
              <MinimizeOutlinedIcon
                fontSize="small"
                sx={{ fontSize: `${iconSize()}` }}
              />
              <CropSquareOutlinedIcon
                fontSize="small"
                sx={{ fontSize: `${iconSize()}` }}
              />
              <CloseOutlinedIcon
                fontSize="small"
                sx={{ fontSize: `${iconSize()}` }}
              />
            </div>
          </div>
          <div className={styles["first-line"]}>{firstLineUpdate()}</div>
          <div className={styles["second-line"]}>
            (c) Joseph's Corporation. All rights reserved.
          </div>
          <div className={styles["code"]}>
            {CurrentLocation}
            <div className={styles["element"]}>{typing}</div>
            <div className={styles["typing"]}>|</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CommandLine;