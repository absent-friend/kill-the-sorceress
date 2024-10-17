import { Match, Switch } from "solid-js"

interface FigureProps {
  image?: string,
  video?: string,
  caption: string
}

export function Figure(props: FigureProps) {
  return (
    <span>
      <Switch>
        <Match when={props.image}>
          <img src={props.image} />
        </Match>
        <Match when={props.video}>
          <iframe width="560" height="315" src={props.video} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </Match>
      </Switch>
      <span>{props.caption}</span>
    </span>
  )
}