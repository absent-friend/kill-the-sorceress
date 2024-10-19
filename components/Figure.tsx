import { Match, Switch } from "solid-js"

interface FigureProps {
  imgur?: string,
  youtube?: string,
  caption: string
}

export function Figure(props: FigureProps) {
  return (
    <span class="flex flex-col items-center mt-4 text-center w-full">
      <Switch>
        <Match when={props.imgur}>
          <img src={`https://i.imgur.com/${props.imgur}.png`} class="max-h-[360px]" />
        </Match>
        <Match when={props.youtube}>
          <iframe src={`https://www.youtube.com/embed/${props.youtube}`} class="h-[360px] sm:h-auto sm:aspect-video w-full max-w-[640px]" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </Match>
      </Switch>
      <span>{props.caption}</span>
    </span>
  )
}