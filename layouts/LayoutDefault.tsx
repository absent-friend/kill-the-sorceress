import "./tailwind.css";
import type { JSX } from "solid-js";

export default function LayoutDefault(props: { children?: JSX.Element }) {
  return (
    <div class="grid grid-rows-[auto_1fr] min-h-screen">
      <header></header>
      <div>{props.children}</div>
    </div>
  );
}
