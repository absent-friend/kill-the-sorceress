import { ParentProps } from "solid-js";

export default function Note(props: ParentProps) {
  return (
    <div role="note" class="before:block before:content-['Note'] before:font-bold before:text-amber-800 bg-amber-50 border-solid border-2 border-amber-300 px-2">
      {props.children}
    </div>
  );
}