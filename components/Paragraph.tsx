import { children, ParentProps } from "solid-js"

export function Paragraph(props: ParentProps) {
  const content = children(() => props.children);
  return (
    <p>
      {content()}
    </p>
  )
}