import React from "react";
import styles from "../../css/common/Navbar.module.css";

function Navbar() {
  return (
    <div className={styles["nav"]}>
      <header className={styles["header"]}>
        <div className={styles["nav-logo"]}>
          <a href="/">
            <img src="../../img/logo.png" alt="logo" width={"130px"} />
          </a>
        </div>
        <div className={styles["nav-user"]}>
          <img src="../../img/user.png" alt="user" width={"25px"} />
        </div>
      </header>
    </div>
  );
}

export default Navbar;
