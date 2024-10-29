import Chapter from "../../components/Chapter.jsx";
import Link from "../../components/Link.jsx";

export default function Page() {
  return (
    <Chapter title="WIP">
      <p>
        Demo:
      </p>
      <ul>
        <li><Link href="/prologue">Prologue</Link></li>
        <li><Link href="/chapter1">Chapter 1</Link></li>
        <li><Link href="/chapter2">Chapter 2</Link></li>
        <li><Link href="/chapter4">Chapter 4</Link></li>
        <li><Link href="/epilogue">Epilogue</Link></li>
        <li><Link href="/appendix-god-sorc">Appendix: "God Sorc"</Link></li>
      </ul>
    </Chapter>
  );
}
