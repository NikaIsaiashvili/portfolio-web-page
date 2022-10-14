import educationData from "../../config/education";
import * as styles from "./education.module.css"

function RenderEducation() {
    return(
        <div className={styles.education_container}>
            {educationData.map((education) =>{
                return (
                    <p className={styles.education}>{education}</p>
                );
            })}
        </div>
    )
}

export default RenderEducation;