import Chapter from "../../components/Chapter.jsx";
import Link from "../../components/Link.jsx";
import Paragraph from "../../components/Paragraph.jsx";

export default function Page() {
  return (
    <Chapter title="WIP">
      <Paragraph>
        Demo: <Link href="chapter2">Chapter 2</Link>
      </Paragraph>
    </Chapter>
  );
}
