import * as styles from "../BurgerNav/BurgerNav.module.css"

function BurgerNav() {
    return (
        <nav className={styles.burger_nav}>
        <ul>
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
    </nav>
    )
}

export default BurgerNav