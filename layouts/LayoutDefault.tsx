import Link from "../components/Link";
import "./tailwind.css";
import type { JSX } from "solid-js";

export default function LayoutDefault(props: { children?: JSX.Element }) {
  return (
    <div class="grid grid-rows-[auto_1fr] max-h-screen max-w-screen-md min-h-screen mx-auto">
      <header class="border-b-2 grid justify-center p-4">
        <Link href="/" noColor={true} noUnderline={true}>
          <img src={import.meta.env.BASE_URL + 'favicon.png'} class="inline size-12 lg:size-auto" />
          <span class="align-middle italic ms-1 text-4xl lg:text-6xl">Kill the Sorceress!</span>
        </Link>
      </header>
      <div class="overflow-auto">{props.children}</div>
    </div>
  );
}
