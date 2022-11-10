import * as Style from "../About/About.module.css";
import RenderSkills from "../skills/skills";
import RenderEducation from "../Education/education";
import CV_Nika_Isaiashvili from "url:../../../public/Nika_Isaiashvili_CV/CV_Nika_Isaiashvili.pdf";
import Nika_Isaiashvili_React from "url:../../../public/React_Certificate/Nika_Isaiashvili_React.pdf";

function About() {

  const downloadCv = () => {
    fetch(CV_Nika_Isaiashvili).then(response => {
      response.blob().then(cv => {
        const fileURL = window.URL.createObjectURL(cv);
        let alink = document.createElement('a');
        alink.href = fileURL;
        alink.download = "CV_Nika_Isaiashvili.pdf";
        alink.click();
      })
    })
  }
  
  const downloadReactCertificate = () => {
    fetch(Nika_Isaiashvili_React).then(response => {
      response.blob().then(cv => {
        const fileURL = window.URL.createObjectURL(cv);
        let alink = document.createElement('a');
        alink.href = fileURL;
        alink.download = "Nika_Isaiashvili_React.pdf";
        alink.click();
      })
    })
  }
  
  
  return (
    <>
      <section className={Style.main_container}>
        <div className={Style.about_container}>
          <div className={Style.profile_container}>
            <div className={Style.profile_name}>
              Nika Isaiashvili
            </div>
            <div className={Style.logos}>
              <span className={Style.logo}>
                <ion-icon name="logo-html5" className={Style.logo}></ion-icon>
              </span>
              <span className={Style.logo}>
                <ion-icon name="logo-css3" className={Style.logo}></ion-icon>
              </span>
              <span className={Style.logo}>
                <ion-icon name="logo-javascript"></ion-icon>
              </span>
              <span className={Style.logo}>
                <ion-icon name="logo-react"></ion-icon>
              </span>
            </div>
          </div>
          <div className={Style.right_side}>
            <div className={Style.about_info}>
              <h2 className={Style.aboutme_header}>Get to know about me</h2>
              <p>
                I'm Sociable, can find logical soulitons in difficult
                situations, i always try to move forward and learn new things
                that will benefit my work to software industry. Since 2019 i like to code
                things for web, and enjoy bringing ideas to life in the browser.
                i have many interests, hobbies, areas of study and artistic
                endeavors. I'm a fast learner, able to pick up new skills and
                juggle different projects and roles. I like to develop expertise
                in a number of areas over the course of my life and career. I'm
                a self-taught and have worked on several types of projects. Some
                of them are just little parts of web page, (contact form, admin
                panel, footer), but other - full web pages.
              </p>
              <div className={Style.download_box}>
             <button onClick={downloadCv} className={Style.cv_button}>Download CV</button>
             <button onClick={downloadReactCertificate} className={Style.certificate_button}>Download React Certificate</button>
              </div>
            </div>
            <div className={Style.education_info}>
              <h2>EDUCATION</h2>
              <RenderEducation />
            </div>
            <div className={Style.skills_info}>
              <h2>Skills</h2>
              <RenderSkills />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
