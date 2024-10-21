import DarkModeToggle from "../components/DarkModeToggle";
import Link from "../components/Link";
import "./tailwind.css";
import type { ParentProps } from "solid-js";

export default function LayoutDefault(props: ParentProps) {
  return (
    <div class="grid grid-rows-[auto_1fr] max-h-screen max-w-screen-md min-h-screen mx-auto">
      <header class="gap-2 grid grid-cols-[1fr_auto] p-4">
        <Link href="/" noUnderline={true}>
          <img src={import.meta.env.BASE_URL + 'favicon.png'} class="inline size-12 lg:size-auto" />
          <span class="align-middle font-bold italic ms-1 text-4xl lg:text-6xl text-indigo-900 dark:text-violet-300">Kill the Sorceress!</span>
        </Link>
        <DarkModeToggle/>
      </header>
      <div class="border-x-2 border-t-2 border-slate-400 dark:border-slate-700 bg-violet-200 dark:bg-indigo-950 dark:text-violet-200 overflow-auto" style="scrollbar-width: thin;">
        {props.children}
      </div>
    </div>
  );
}
