import React from "react";
import styles from "./navbar.module.css";
const Navbar = () => {
  return (
    <div id={styles.papa}>
      <div className="left">
        <div >
          <img
          className={styles.navlog}
            src="https://i.imgur.com/Pt5qPA4.jpg"
            alt="nav"
          />
        </div>
      </div>
      <div className="right">N</div>
    </div>
  );
};

export default Navbar;
