import Tex from "@matejmazur/react-katex";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { tomorrow } from "react-syntax-highlighter/dist/cjs/styles/prism";
import styles from "../../styles/PostDetail.module.scss";

const BlockQuoteBlock = (props) => {
  return <blockquote>{props.children}</blockquote>;
};

const CodeBlock = ({ language, value }) => {
  return (
    <div className={styles.codeblock}>
      <SyntaxHighlighter
        language={language}
        style={tomorrow}
        customStyle={{
          margin: "2rem auto",
          width: "90%",
          borderRadius: "10px",
          boxShadow: "0 0 20px rgba(0, 0, 0, 0.15)",
        }}
        showLineNumbers
        wrapLongLines
      >
        {value}
      </SyntaxHighlighter>
      <div className={styles.codeblock_language}>{language}</div>
    </div>
  );
};

const InlineCodeBlock = (props) => {
  return <code>{props.value}</code>;
};

const InlineMathBlock = (props) => {
  return <Tex math={props.value} errorColor={"#cc0000"} />;
};

const MathBlock = (props) => {
  return <Tex block math={props.value} errorColor={"#cc0000"} />;
};

const renderers = {
  inlineMath: InlineMathBlock,
  math: MathBlock,
  inlineCode: InlineCodeBlock,
  blockquote: BlockQuoteBlock,
  code: CodeBlock,
};

export default renderers;
