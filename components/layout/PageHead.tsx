import Head from "next/head";

type PageHeadProps = {
  subtitle: string;
};
const PageHead = ({ subtitle }: PageHeadProps) => (
  <Head>
    <title>JUNSIK.DEV | {subtitle} </title>
  </Head>
);

export default PageHead;
