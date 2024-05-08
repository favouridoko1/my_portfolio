import styles from "./about.module.css";
import { getImageUrl } from "../../Utils/utils";
export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl(`aboutImage.png`)}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl(`cursorIcon.png`)} alt=" Cursor Icon" />
            <div className={styles.aboutItemText}>
                <h3>Frontend Developer</h3>
                <p>I'm a frontend developer with experience in building reposive and well optimized sites</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
