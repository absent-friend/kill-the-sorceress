import Chapter from "../../components/Chapter.jsx";
import Link from "../../components/Link.jsx";
import Section from "../../components/Section.jsx";

export default function Page() {
  return (
    <Chapter title="A comprehensive guide." next="prologue">
      <Section title="Table of Contents" class="border-t border-slate-400 dark:border-slate-700">
        <ol class="list-[upper-roman]">
          <li><Link href="/prologue">Prologue</Link></li>
          <li>
            Main Content
            <ol class="list-[lower-roman]">
              <li><Link href="/chapter1">Chapter 1 - Cannon Patterns</Link></li>
              <li><Link href="/chapter2">Chapter 2 - Vehicle I (Cannon I)</Link></li>
              <li><Link href="/chapter3">Chapter 3 - Vehicle II (Cannon II or Tank I)</Link></li>
              <li><Link href="/chapter4">Chapter 4 - Vehicle III (Tank II or UFO I)</Link></li>
            </ol>
          </li>
          <li><Link href="/epilogue">Epilogue</Link></li>
          <li><Link href="/appendix-god-sorc">Appendix: "God Sorc"</Link></li>
        </ol>
      </Section>
      <Section title="Acknowledgements">
        <p>
          This tutorial is (for the most part) a direct adaptation of 
          <a href="https://pastebin.com/Z8hncDwM">JeremyThompson's Sorceress tutorial Pastebin</a>.
          In addition to being the author of the original document, he rewrote Chapter 3 for this
          version of the tutorial; it now incorporates the "addendum strats" that were developed
          after the creation of the pastebin.
        </p>
        <p>
          The website was created by <a href="https://absent-friend.github.io/">absent</a>. You can
          look at the <a href="https://github.com/absent-friend/kill-the-sorceress">source code on GitHub</a> if 
          you're curious or wish to rehost it.
        </p>
      </Section>
      <Section title="Additional Resources">
        <p>
          The purpose of this guide is to explain every detail of the fight that can be used to 
          optimize your time; it may not be suitable for beginners. If you just want to have a
          solid foundation to get started as a runner, check 
          out <a href="https://youtu.be/gNmb5FLXXOs">Fady's Sorceress Tutorial on YouTube</a>.
        </p>
      </Section>
    </Chapter>
  );
}
