import { ParentProps } from "solid-js"

export default function Paragraph(props: ParentProps) {
  return (
    <p class="my-2">
      {props.children}
    </p>
  )
}