import { ParentProps } from "solid-js";
import Link from "./Link";

interface ChapterProps extends ParentProps {
  title: string,
  previous?: string,
  next?: string
}

export function scrollToChapterStart() {
  return "document.getElementById('main-content').scrollTop = 0;";
}

export default function Chapter(props: ChapterProps) {
  return (
    <div class="grid grid-rows-[1fr_auto] h-full">
      <main id="main-content" class="overflow-auto p-4" style="scrollbar-width: thin;">
        <h1 class="font-bold text-3xl">{props.title}</h1>
        {props.children}
      </main>
      <nav aria-labelledby="chapter-nav-label" class="border-t border-zinc-400 grid grid-cols-[1fr_2fr_1fr] p-4">
        <Link href={props.previous || ''} invisible={!props.previous}>← Previous</Link>
        <span id="chapter-nav-label" class="text-center">Chapter Navigation</span>
        <Link href={props.next || ''} class="text-end" invisible={!props.next}>Next →</Link>
      </nav>
    </div>
  )
}