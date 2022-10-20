import * as style from "./Experience.module.css";

function Experience() {
  return (
    <section className={style.main_container}>
      <div className={style.experience_container}>
        <div className={style.experience_text}>
          <h1 className={style.experience_header}>My Joyful Experience</h1>
          <p className={style.experience_header_text}>
            Developers are not exempt from the brutal irony of{" "}
            <span style={{ color: "#c7ecee" }}>
              needing experience to get experience.{" "}
            </span>
            Luckily, with a computer and access to the internet, it's possible
            for us to overcome this hurdle. Even before you've been hired there
            are plenty of ways to get experience on projects.
          </p>
          <div className={style.motivation_letter}>
            <p>
            Every day I spend at least 4-5 hours of coding to learn something new and improve my current skills. 
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
