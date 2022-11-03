import projectData from "../../config/projectData";
import * as styles from "../SlideShow/SlideDots.module.css";

function SlideDots() {
  return (
    <>
      <div className={styles.dot_container}>
        {projectData.map((currentSlide, index) => {
          return (
            <span
              className={`${styles.dot}` + " " +  `${styles.active}`}
              key={index}
              onClick={() => {
                currentSlide.id
              }}
            ></span>
          );
        })}
      </div>
    </>
  );
}

export default SlideDots;
