import projectData from "../../config/projectData";
import * as style from "../SlideShow/SlideDots.module.css";

function SlideDots() {
  return (
    <>
      <div className={style.dot_container}>
        {projectData.map((currentSlide, index) => {
          return (
            <span
              className={style.dot}
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
