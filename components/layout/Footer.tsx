import styles from "../../styles/Footer.module.scss";

export default function Footer() {
  return (
    <>
      <div className={styles.spacer}></div>
      <div className={styles.container}>
        <footer>
          <div className={styles.socialLinks}>
            <a className={styles.icons} href="https://github.com/JunsikChoi">
              <i className={"fab fa-github"}></i>
            </a>
            <a
              className={styles.icons}
              href="https://www.linkedin.com/in/junsikchoi91/"
            >
              <i className="fab fa-linkedin "></i>
            </a>
            <a
              className={styles.icons}
              href="https://www.instagram.com/junsikchoi91/"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </div>
          <div className={styles.copyright}>
            &copy; Copyright {new Date().getFullYear()} JUNSIK.DEV. All Rights
            Reserved
          </div>
        </footer>
      </div>
    </>
  );
}
