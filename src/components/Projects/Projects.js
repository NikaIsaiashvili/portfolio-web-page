import React from "react";
import projectData from "../../config/projectData";
import * as styles from "../Projects/Projects.module.css";
import SlideShow from "../SlideShow/SlideShow";

function Projects() {
  return (
    <>
      <section className={styles.main_container}>
        <SlideShow />
      </section>

      <section className={styles.projects_main_container}>
        <h1 className={styles.project_header_text}>Project List</h1>
        <div className={styles.project_box_container}>
          {projectData.map((data, index) => {
            return (
              <div className={styles.project_box}>
                <p className={styles.project_name}> {data.type} </p>
                <img
                  className={styles.project_image}
                  src={data.url}
                  alt={data.id}
                  key={index}
                ></img>
                <span className={styles.project_info}>
                  <a href="#" target="_blank" className={styles.project_link}>
                    {data.info}
                  </a>
                </span>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}

export default Projects;
