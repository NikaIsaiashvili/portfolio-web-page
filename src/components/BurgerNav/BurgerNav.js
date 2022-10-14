import * as styles from "../BurgerNav/BurgerNav.module.css";
import ROUTES from "../../config/routes";
import { NavLink } from "react-router-dom";

function BurgerNav({ visible }) {
  return (
    <nav
      className={styles.burger_nav}
      style={{ visibility: visible ? "visible" : "hidden" }}
    >
      <ul>
        <li>
        <NavLink
              to={`/${ROUTES.ABOUT}`}
            >
              About
            </NavLink>
        </li>
        <li>
        <NavLink
              to={`/${ROUTES.EXPERIENCE}`}
            >
              Experience
            </NavLink>
        </li>
        <li>
        <NavLink
              to={`/${ROUTES.PROJECTS}`}
            >
              Projects
            </NavLink>
        </li>
        <li>
        <NavLink
          to={ROUTES.HOME}
        >
           Home
        </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default BurgerNav;
