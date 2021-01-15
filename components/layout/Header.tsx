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
            <a className={styles.menu_item}>소개</a>
          </Link>
          <Link href="/blog">
            <a className={styles.menu_item}>블로그</a>
          </Link>
          <Link href="/projects">
            <a className={styles.menu_item}>프로젝트</a>
          </Link>
        </nav>
      </header>
    </div>
  );
}
