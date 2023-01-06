import styles from "./About.module.css";
import { useInView } from "react-intersection-observer";
const About = (props) => {
  const [titleRef, titleInView] = useInView({
    threshold: 0,
    triggerOnce: true,
  });
  const [bodyRef, bodyInView] = useInView({
    threshold: 0,
    triggerOnce: true,
  });
  return (
    <section
      id="about-section"
      onClick={props.onClick}
      className={styles["container"]}
    >
      <div className={styles["header-container"]}>
        <div
          ref={titleRef}
          className={titleInView ? styles["text-holder"] : styles["invisible"]}
        >
          About Me
        </div>
      </div>
      <div
        ref={bodyRef}
        className={bodyInView ? styles["about"] : styles["invisible"]}
      >
        Hi! I'm Joe. I'm a 27 year old web developer specializing in front end
        development and React framework applications. When I'm not designing and
        building websites, I love spending time outdoors, training Brazilian
        Jiu-Jitsu, and traveling the world with my wife. I also speak German,
        and am a huge dog lover.
      </div>
    </section>
  );
};

export default About;
