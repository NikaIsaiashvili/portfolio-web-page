import * as styles from "./Body.module.css";
import BurgerNav from "../BurgerNav/BurgerNav";

function Body() {
    return (
    <main>
        <BurgerNav />
        <div className={styles.main_container}>
        <div className={styles.main_text}>
                <span>Hi, my name is</span>
                <h1>Nika Isaiashvili</h1>
                <h2>i'm Front-End Engineer</h2>
            </div>
            <div className={styles.main_info}>
            I'm specializing in planning, building and implement the user interface systems of websites,
            software programs and web-based applications, my primary goal is to provide a satisfactory user experience 
            with no issues, errors or downtime. Front-end engineer resolving issues such as those related to accessibility
            and browser compatibility. often serve as an intermediary bridging the gap between the user and the backend developers.
            tweak tools and platforms to adapt to real-world use situations.
            </div>
        </div>
    </main>
    )
}


export default Body;