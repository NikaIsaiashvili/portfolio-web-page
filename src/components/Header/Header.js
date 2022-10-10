import * as styles from "./Header.module.css";

function Header() {
return (
    <header className={styles.portfolio_header}>
        <nav className={styles.portfolio_nav}>
            <ul className={styles.portfolio_ul}>
                <li>
                    About
                </li>
                <li>    
                    Experience
                </li>
                <li>
                    Projects
                </li>
            </ul>
            <div className={styles.portfolio_contact}>
                <a href="https://www.linkedin.com/in/nikaisaiashvili/" target="_blank"><ion-icon name="logo-linkedin"></ion-icon></a>
                <a href="https://github.com/NikaIsaiashvili" target="_blank"><ion-icon name="logo-github"></ion-icon></a>
            </div>
        </nav>
    </header>
)
}


export default Header