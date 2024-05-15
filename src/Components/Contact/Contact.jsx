import styles from "./contact.module.css";
import { getImageUrl } from "../../Utils/utils";
export const Contact = () => {
  return (
    <footer className={styles.container} id="contact">
      <div className={styles.content}>
        <div className={styles.left}>
          <h2>Contact</h2>
          <p>Feel free to reach out!</p>
        </div>
        {/* <div className={styles.right}> */}
        <ul className={styles.right}>
          <div className={styles.contactMe}>
            <img src={getImageUrl(`contact/email_icon.png`)} alt="email icon" />
            <a href="mailto:idokofavour204@gmail.com">
              <li>idokofavour204@gmail.com</li>
            </a>
          </div>
          <div className={styles.contactMe}>
            <img
              src={getImageUrl(`contact/linkedin_icon.png`)}
              alt="linkedin icon"
            />
            <a href="https://www.linkedin.com/in/favour-idoko-12760b2b5/">
              <li>linkedin.com/favour-idoko</li>
            </a>
          </div>
          <div className={styles.contactMe}>
            <img
              src={getImageUrl(`contact/github_icon.png`)}
              alt="github icon"
            />
            <a href="https://github.com/favouridoko1">
              <li>github.com/favouridoko1</li>
            </a>
          </div>
        </ul>
      </div>
      {/* </div> */}
    </footer>
  );
};
