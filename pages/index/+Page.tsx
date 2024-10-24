import BulletList from "../../components/BulletList.jsx";
import Chapter from "../../components/Chapter.jsx";
import Link from "../../components/Link.jsx";
import Paragraph from "../../components/Paragraph.jsx";

export default function Page() {
  return (
    <Chapter title="WIP">
      <Paragraph>
        Demo:
      </Paragraph>
      <BulletList>
        <li><Link href="chapter1">Chapter 1</Link></li>
        <li><Link href="chapter2">Chapter 2</Link></li>
        <li><Link href="chapter4">Chapter 4</Link></li>
        <li><Link href="appendix-god-sorc">Appendix: "God Sorc"</Link></li>
      </BulletList>
    </Chapter>
  );
}
