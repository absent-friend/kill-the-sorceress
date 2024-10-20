import Link from "../components/Link";
import "./tailwind.css";
import type { JSX } from "solid-js";

export default function LayoutDefault(props: { children?: JSX.Element }) {
  return (
    <div class="grid grid-rows-[auto_1fr] max-h-screen max-w-screen-md min-h-screen mx-auto">
      <header class="border-b border-zinc-400 grid p-4">
        <Link href="/" noUnderline={true}>
          <img src={import.meta.env.BASE_URL + 'favicon.png'} class="inline size-12 lg:size-auto" />
          <span class="align-middle font-bold italic ms-1 text-4xl lg:text-6xl text-indigo-900 dark:text-violet-300">Kill the Sorceress!</span>
        </Link>
      </header>
      <div class="overflow-auto" style="scrollbar-width: thin;">{props.children}</div>
    </div>
  );
}
