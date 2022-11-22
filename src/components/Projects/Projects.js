import React from "react";
import projectListData from "../../config/ProjectListData";
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
          {projectListData.map((data, index) => {
            return (
              <div className={styles.project_box}>
                <p className={styles.project_name}> {data.type} </p>
                <img
                  className={styles.project_image}
                  src={data.url}
                  alt={data.id}
                  key={index}
                ></img>
                <div className={styles.project_info_box}>
                  <a href="#" target="_blank" className={styles.project_link}>
                    {data.name}
                  </a>
                <p className={styles.project_info_text}>{data.info}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}

export default Projects;
