import { ParentProps } from "solid-js";

export default function BulletList(props: ParentProps) {
  return (
    <ul class="list-disc ms-8 my-2">{props.children}</ul>
  )
}