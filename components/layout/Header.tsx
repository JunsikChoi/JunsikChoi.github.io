import Link from "next/link";
import styles from "../../styles/Header.module.scss";

export default function Header() {
  return (
    <div className={styles.container}>
      <header className={`${styles.header} ${styles.responsive}`}>
        <div className={styles.logo}>
          <Link href="/">JUNSIK.DEV</Link>
        </div>
        <nav className={styles.menu_wrapper}>
          <Link href="/about">
            <a className={styles.menu_item}>About</a>
          </Link>
          <Link href="/blog">
            <a className={styles.menu_item}>Blog</a>
          </Link>
          <Link href="/projects">
            <a className={styles.menu_item}>Projects</a>
          </Link>
        </nav>
      </header>
    </div>
  );
}
