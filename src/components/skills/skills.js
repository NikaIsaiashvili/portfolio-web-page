import skillsData from "../../config/skillsData";
import * as styles from "./skills.module.css"

function RenderSkills() {
    return(
        <div className={styles.skills_container}>
            {skillsData.map((skill) =>{
                return (
                    <p className={styles.skill}>{skill}</p>
                );
            })}
        </div>
    )
}

export default RenderSkills;