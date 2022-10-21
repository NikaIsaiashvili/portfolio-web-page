import React from "react";
import * as styles from "../Projects/Projects.module.css";
import projectData from "../../config/projectData";

function Projects() {
  return (
    <>
      <section className={styles.main_container}>
        <div className={styles.slide_container}>
          <div className={styles.left_arrow}>
          <ion-icon name="caret-back"></ion-icon>
          </div>
          <div className={styles.right_arrow}>
          <ion-icon name="caret-forward"></ion-icon>
          </div>

          {projectData.map((projects) => {
            return (
              <img src={projects.photo} className={styles.slide_pic}></img>
            );
          })}
        </div>
      </section>
    </>
  );
}

export default Projects;
