import { ParentProps } from "solid-js";
import { ChapterContextProvider } from "./ChapterContext";

interface ChapterProps extends ParentProps {
  title: string,
  number: number,
  previous?: string,
  next?: string
}

export function Chapter(props: ChapterProps) {
  return (
    <ChapterContextProvider chapter={props.number}>
      <div class="grid grid-rows-[1fr_auto] h-full overflow-auto">
        <div class="m-4">
          <h1>{props.title}</h1>
          {props.children}
        </div>
        <nav aria-labelledby="chapter-nav-label" class="flex p-4">
          <a href={'../' + props.previous + '.html'} classList={{ invisible: !props.previous }}>← Previous</a>
          <span id="chapter-nav-label" class="mx-auto">Chapter Navigation</span>
          <a href={'../' + props.next + '.html'} classList={{ invisible: !props.next }}>Next →</a>
        </nav>
      </div>
    </ChapterContextProvider>
  )
}