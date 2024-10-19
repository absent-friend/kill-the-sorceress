import { ParentProps } from "solid-js"

export function Paragraph(props: ParentProps) {
  return (
    <p class="gap-2 grid grid-cols-1 my-2">
      {props.children}
    </p>
  )
}