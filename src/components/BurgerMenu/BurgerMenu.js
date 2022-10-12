import React, { useState } from "react";
import * as styles from "./BurgerMenu.module.css";

function BurgerMenu() {
  const [navOpen, setNavOpen] = useState(false);
  const handleToggle = () => {
    setNavOpen(navOpen => !navOpen);
  };
  return (
    <button className={styles.burger_icon} onClick={handleToggle}>
      {navOpen ? (
        <ion-icon name="close"></ion-icon>
        ) : (
        <ion-icon name="menu-sharp" ></ion-icon>
      )}
    </button>
    
  );
}

export default BurgerMenu;
