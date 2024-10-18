import { ParentProps } from "solid-js"

export function Paragraph(props: ParentProps) {
  return (
    <p class="flex">
      {props.children}
    </p>
  )
}