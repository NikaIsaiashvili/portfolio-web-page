import HomePg from "../Home_PG/HomePage";
import * as styles from "./NotFound.module.css";
import ROUTES from "../../config/routes";
import { NavLink } from "react-router-dom";

function NotFound() {
  return (
    <div className={styles.PAGE_NOT_FOUND}>
      <h1 className={styles.Not_Found_Text}>
        PAGE NOT FOUND <span>:(</span> <br/> <br/>
        Please go back to <span><NavLink
          to={ROUTES.HOME}
        >
           Home
        </NavLink> </span>
      </h1>
    </div>
  );
}

export default NotFound;
