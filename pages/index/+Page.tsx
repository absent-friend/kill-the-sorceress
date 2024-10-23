import Chapter from "../../components/Chapter.jsx";
import Link from "../../components/Link.jsx";
import Paragraph from "../../components/Paragraph.jsx";

export default function Page() {
  return (
    <Chapter title="WIP">
      <Paragraph>
        Demo:
      </Paragraph>
      <ul class="list-disc ms-8 my-2">
        <li><Link href="chapter1">Chapter 1</Link></li>
        <li><Link href="chapter2">Chapter 2</Link></li>
      </ul>
    </Chapter>
  );
}
