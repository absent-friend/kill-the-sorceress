import { Match, Switch } from "solid-js"

interface FigureProps {
  imgur?: string,
  youtube?: string,
  caption: string
}

export default function Figure(props: FigureProps) {
  return (
    <figure class="flex flex-col my-4 w-full">
      <Switch>
        <Match when={props.imgur}>
          <img src={`https://i.imgur.com/${props.imgur}.png`} class="self-center max-h-[360px]" />
        </Match>
        <Match when={props.youtube}>
          <iframe src={`https://www.youtube.com/embed/${props.youtube}`} class="self-center w-full max-w-[640px] max-h-[360px] aspect-square sm:aspect-video sm:h-auto" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </Match>
      </Switch>
      <figcaption class="font-bold text-center text-sm">{props.caption}</figcaption>
    </figure>
  )
}