import { ParentProps } from "solid-js";

export default function Note(props: ParentProps) {
  return (
    <div role="note" class={[
      "before:block",
      "before:content-['Note']",
      "before:font-bold",
      "before:text-amber-800",
      "before:dark:text-amber-200",
      "before:text-lg",
      "bg-amber-100",
      "dark:bg-amber-800",
      "text-amber-950",
      "dark:text-amber-100",
      "border-solid",
      "border-2",
      "border-amber-300",
      "dark:border-amber-600",
      "px-2",
      "pb-2",
      "rounded"
    ].join(' ')}>
      {props.children}
    </div>
  );
}