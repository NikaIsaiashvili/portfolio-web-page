import * as styles from "../BurgerNav/BurgerNav.module.css";

function BurgerNav({ visible }) {
  return (
    <nav
      className={styles.burger_nav}
      style={{ visibility: visible ? "visible" : "hidden" }}
    >
      <ul>
        <li>About</li>
        <li>Experience</li>
        <li>Projects</li>
      </ul>
    </nav>
  );
}

export default BurgerNav;
