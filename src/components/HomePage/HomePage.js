import React from "react";
import styles from "./HomePage.module.css";
import SkillsLink from "../Skills/SkillsLink";
import ContactLink from "../Contact/Link/ContactLink";
import PastProjectsLink from "../PastProjects/PastProjectsLink";
import AboutLink from "../About/AboutLink";
import { useState } from "react";
import { Outlet } from "react-router-dom";

const HomePage = () => {
  const [linkLocation, setLinkLocation] = useState("");

  const skillsHandler = () => {
    setLinkLocation("skills");
  };
  const aboutHandler = () => {
    setLinkLocation("about");
  };
  const contactHandler = () => {
    setLinkLocation("contact");
  };
  const pastProjectsHandler = () => {
    setLinkLocation("pastProjects");
  };

  return (
    <>
      <div className={styles["page-container"]}>
        <SkillsLink onClick={() => skillsHandler()} />
        <ContactLink onClick={() => contactHandler()} />
        <PastProjectsLink onClick={() => pastProjectsHandler()} />
        <AboutLink onClick={() => aboutHandler()} />
      </div>
      <Outlet />
    </>
  );
};

export default HomePage;
