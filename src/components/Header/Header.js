import * as styles from "./Header.module.css";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import ROUTES from "../../config/routes";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className={styles.portfolio_header}>
      <nav className={styles.portfolio_nav}>
        <div className={styles.home_btn_tr}>
        <NavLink className={styles.home_btn}
          to={ROUTES.HOME}
        >
            <ion-icon name="home"></ion-icon>
        </NavLink>
        
        </div>
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
        </ul>
        <div className={styles.portfolio_contact}>
          <a
            href="https://www.linkedin.com/in/nikaisaiashvili/"
            target="_blank"
          >
            <ion-icon name="logo-linkedin"></ion-icon>
          </a>
          <a href="https://github.com/NikaIsaiashvili" target="_blank">
            <ion-icon name="logo-github"></ion-icon>
          </a>
          <a href="mailto:nisaiashvili@gmail.com">
            <ion-icon name="mail"></ion-icon>
          </a>
          <BurgerMenu />
        </div>
      </nav>
    </header>
  );
}

export default Header;
