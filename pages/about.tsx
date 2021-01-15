import Link from "next/link";
import PageHead from "../components/layout/PageHead";

const AboutPage = () => (
  <>
    <PageHead subtitle="ABOUT"></PageHead>
    <h1>About</h1>
    <p>This is the about page</p>
    <p>
      <Link href="/">
        <a>Go home</a>
      </Link>
    </p>
  </>
);

export default AboutPage;
