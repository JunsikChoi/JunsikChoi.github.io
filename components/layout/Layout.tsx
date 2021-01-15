import React, { ReactNode } from "react";
import Header from "./Header";
import styles from "../../styles/Layout.module.scss";
import Footer from "./Footer";

type Props = {
  children?: ReactNode;
};

const Layout = ({ children }: Props) => (
  <div>
    <Header />
    <div className={styles.responsive}>{children}</div>
    <Footer />
  </div>
);

export default Layout;
