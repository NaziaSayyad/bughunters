import React from "react";
import styles from "./navbar.module.css";
import { FcHome , FcSearch} from "react-icons/fc"
import { TbNotebook } from "react-icons/tb"
import { ImPencil } from "react-icons/im"
import { BsFillPeopleFill } from "react-icons/bs"
import { GrNotification } from "react-icons/gr"
const Navbar = () => {
  return (
    <div id={styles.papa}>
      <div className="left">
        <div className={styles.left1}>
          <img
          className={styles.navlog}
            src="https://i.imgur.com/Pt5qPA4.jpg"
            alt="nav"
          />
          <FcHome className={styles.homelogo}/>
          <TbNotebook className={styles.homelogo}/>
          <ImPencil className={styles.homelogo}/>
          <BsFillPeopleFill className={styles.homelogo}/>
          <GrNotification className={styles.homelogo}/>
        </div>
      </div>
      <div className="right">
      <div className={styles.right1}>
<div className={styles.searchbox}>
<FcSearch className={styles.searchboxinput}/>
<input type="text" className={styles.searchinput}  placeholder="Search here ..."/>
</div>
        
      </div>
      </div>
    </div>
  );
};

export default Navbar;
