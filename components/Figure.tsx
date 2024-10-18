import { Match, Switch } from "solid-js"

interface FigureProps {
  image?: string,
  video?: string,
  caption: string
}

export function Figure(props: FigureProps) {
  return (
    <span class="flex flex-col items-center mb-2 text-center">
      <Switch>
        <Match when={props.image}>
          <img src={props.image} width={360} height={360} />
        </Match>
        <Match when={props.video}>
          <iframe width="640" height="360" src={props.video} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </Match>
      </Switch>
      <span>{props.caption}</span>
    </span>
  )
}