import Link from "next/link";
import PageHead from "../components/layout/PageHead";

const ProjectsPage = () => (
  <>
    <PageHead subtitle="PROJECTS"></PageHead>
    <h1>About</h1>
    <p>
      <Link href="/">
        <a>Go home</a>
      </Link>
    </p>
  </>
);

export default ProjectsPage;
