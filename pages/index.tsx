import { GetStaticProps } from "next";
import PageHead from "../components/layout/PageHead";
import getPostsData from "../utils/getPostsData";
import styles from "../styles/About.module.scss";
// import gfm from "remark-gfm";
// import toc from "remark-toc";
// import math from "remark-math";
// import ReactMarkdown from "react-markdown";
// import renderers from "../components/blog/renderers";
// import { useState } from "react";

const IndexPage = () => {
  // const [eng, setEng] = useState(false);
  // const engResume = allPosts[0];
  // const korResume = allPosts[1];

  // const onClick = () => {
  //   setEng(!eng);
  // };

  return (
    <>
      <PageHead subtitle="ABOUT"></PageHead>
      <div className={styles.container}>
        <div className={styles.aboutIntroContainer}>
          <div className={styles.photoContainer}>
            <img className={styles.photo} src="/images/profile_emoji.jpg"></img>
          </div>
          <div className={styles.aboutIntro}>
            <h4>JUNSIK CHOI</h4>
            <h5>Full Stack Web / App Developer</h5>
            <div className={styles.contactsContainer}>
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
              <a className={styles.icons} href="mailto:leichoi91@gmail.com">
                <i className="fas fa-envelope"></i>
              </a>
            </div>
          </div>
          {/* <div className={styles.languageContainer}>
            <button onClick={onClick}>
              ⬇ {eng ? " 한국어로 이력서 보기 " : " View Resume in English"} ️⬇️
            </button>
          </div> */}
        </div>
        {/* <ReactMarkdown
          className={styles.post_style}
          plugins={[gfm, math, toc]}
          renderers={renderers}
        >
          {eng ? engResume.content : korResume.content}
        </ReactMarkdown> */}
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  try {
    const allPosts = getPostsData("content/about");

    return { props: { allPosts } };
  } catch (err) {
    return { props: { errors: err.message } };
  }
};

export default IndexPage;
