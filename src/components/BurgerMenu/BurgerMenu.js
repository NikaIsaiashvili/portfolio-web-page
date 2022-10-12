import React, { useState } from "react";
import BurgerNav from "../BurgerNav/BurgerNav";
import * as styles from "./BurgerMenu.module.css";

function BurgerMenu() {
  const [navOpen, setNavOpen] = useState(false);
  const handleToggle = () => {
    setNavOpen((navOpen) => !navOpen);
  };
  return (
    <>
      <BurgerNav visible={navOpen} />
      <button className={styles.burger_icon} onClick={handleToggle}>
        {navOpen ? (
          <ion-icon name="close"></ion-icon>
        ) : (
          <ion-icon name="menu-sharp"></ion-icon>
        )}
      </button>
    </>
  );
}

export default BurgerMenu;
