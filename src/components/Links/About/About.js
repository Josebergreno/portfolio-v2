import styles from "./About.module.css";
import img from "../../UI/Icons/coding-pic.png";

const About = (props) => {
  return (
    <section
      id="about-section"
      onClick={props.onClick}
      className={styles["container"]}
    >
      <div className={styles["header-container"]}>
        <div className={styles["text-holder"]}>About Me</div>
      </div>
      <div className={styles["about"]}>
        Hi! I'm Joe. I'm a 27 year old web developer specializing in front end
        development and React framework applications. When I'm not designing and
        building websites, I love spending time outdoors, training Brazilian
        Jiu-Jitsu, and traveling the world with my wife. I also speak German,
        and am a huge dog lover.
      </div>
      <img className={styles["coding-pic"]} alt="coding" src={img}></img>
    </section>
  );
};

export default About;
