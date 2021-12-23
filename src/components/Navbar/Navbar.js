import React from "react";
import styles from "./Navbar.module.css";

export const Navbar = (props) => {
  return (
    <nav className={styles.navbar}>
      <ul>
        <li>
          {" "}
          <a href="#Aboutme">About Me</a>
        </li>
        <li>
          <a href="#Experience">Experience</a>
        </li>
        <li>
          {" "}
          <a href="#Contact">Contact Me</a>
        </li>
      </ul>
    </nav>
  );
};
