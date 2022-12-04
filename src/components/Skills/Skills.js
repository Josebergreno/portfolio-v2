import styles from "./Skills.module.css";
import CodeIcon from "@mui/icons-material/Code";
import { Link, Outlet } from "react-router-dom";

const Skills = (props) => {
  return (
    <>
      <Link to="/skills" className={styles["container"]}>
        <div className={styles["skills-container"]}>
          <div className={styles["skills"]}>Skills</div>
          <CodeIcon />
        </div>
      </Link>
      <Outlet />
    </>
  );
};

export default Skills;
