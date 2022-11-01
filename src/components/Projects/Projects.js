import React from "react";
import * as styles from "../Projects/Projects.module.css";
import SlideShow from "../SlideShow/SlideShow";


function Projects() {
  return (
      <section className={styles.main_container}>
        <SlideShow/>
      </section>
  );
}

export default Projects;