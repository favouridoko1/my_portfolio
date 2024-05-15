import styles from "./navbar.module.css";
import { getImageUrl } from "../../Utils/utils";
import { useState } from "react";
export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href="/">
        Portfolio
      </a>
      <div className={styles.menu}>
        <img
          className={styles.menuBtn}
          src={
            menuOpen
              ? getImageUrl(`nav/closeIcon.png`)
              : getImageUrl(`nav/menuIcon.png`)
          }
          alt="menu-buthrefn"
          onClick={() => setMenuOpen(!menuOpen)}
        />
        <ul
          className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
          onClick={() => setMenuOpen(false)}
        >
          <li>
            <a className={styles.Link} href="/#about">
              About
            </a>
          </li>
          <li>
            <a className={styles.Link} href="/#experience">
              Experience
            </a>
          </li>
          {/* <li>
            <a className={styles.Link} href="/#projects">
              Projects
            </a>
          </li> */}
          <li>
            <a className={styles.Link} href="/#contact">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
