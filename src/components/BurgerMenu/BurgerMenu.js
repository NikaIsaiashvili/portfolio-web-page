import * as styles from "./BurgerMenu.module.css";
import React, { useState } from "react";


function BurgerMenu() {
  const [navOpen, setNavOpen] = useState(false);
  const handleToggle = () => {
    setNavOpen(!navOpen);
   
  };
  return (
    <button className={styles.burger_icon} onClick={handleToggle}>
      {navOpen ? (
        <ion-icon name="menu-sharp" className={styles.burger_open}></ion-icon>
      ) : (
        <ion-icon name="close" className={styles.burger_close}></ion-icon>
      )}
    </button>
  );
}

export default BurgerMenu;
