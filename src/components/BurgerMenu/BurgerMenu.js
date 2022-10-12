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
        <ion-icon name="menu-sharp" ></ion-icon>
      ) : (
        <ion-icon name="close" ></ion-icon>
      )}
    </button>
  );
}

export default BurgerMenu;
