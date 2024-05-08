import styles from "./hero.module.css";
import { getImageUrl } from "../../Utils/utils";
// import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Favour Idoko</h1>
        <p className={styles.description}>
          a frontend developer with 1 year of experience using ReactJs. Reach
          out if you'd like to learn more
        </p>
        <a
          className={styles.contactBtn}
          href="mailto:idokofavour204@gmail.com"
        >
          Contact Me
        </a>
      </div>
      {/* <div className={styles.imageContainer}> */}
        <img
          src={getImageUrl(`programmer.png`)}
          alt=""
          className={styles.heroImg}
          width="400"
          height="400"
        />
      {/* </div> */}
      <div className={styles.topBlur}> </div>
      <div className={styles.bottomBlur}> </div>
    </section>
  );
};
