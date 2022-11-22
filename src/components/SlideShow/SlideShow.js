import * as styles from "../SlideShow/SlideShow.module.css";
import projectData from "../../config/bestProjectData";

import classNames from "classnames";
import { useState, useEffect } from "react";

let cx = classNames.bind(styles);

function SlideShow() {
  const [currentSlide, setCurrentSlide] = useState(0);

  let sliderContainer = cx({
    slide: true,
    current: true,
  });

  const nextSlide = () => {
    setCurrentSlide(
      currentSlide === projectData.length - 1 ? 0 : currentSlide + 1
    );
  };
  const prevSlide = () => {
    setCurrentSlide(
      currentSlide === 0 ? projectData.length - 1 : currentSlide - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => clearInterval(interval);
  });

  return (
    <>
      <div className={styles.slideshow_container}>
        {projectData.map((photo, index) => {
          return (
            <div
              className={index === currentSlide ? sliderContainer : styles.slide}
              key={index + 1}
            >
              {index === currentSlide && (
                <>
                <div className={styles.header_box}>
                  <p className={styles.numb_text}>{`${index + 1} / ${
                    projectData.length
                  }`} </p>
                  <h4 className={styles.header_text}>Some best selfworks</h4>
                </div>
                  <img
                    src={photo.url}
                    alt={photo.key}
                    className={styles.slide_img}
                  ></img>
                  <p className={styles.text}>
                    <a
                      href="/"
                      target="_blank"
                      className={styles.text_link}
                    >
                      Go to: {photo.name}
                    </a>
                  </p>
                </>
              )}
            </div>
          );
        })}
        <a
          className={styles.prev}
          onClick={() => {
            prevSlide();
          }}
        >
          ❮
        </a>
        <a
          className={styles.next}
          onClick={() => {
            nextSlide();
          }}
        >
          ❯
        </a>
      </div>
    </>
  );
}

export default SlideShow;
