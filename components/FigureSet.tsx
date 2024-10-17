import { children, createSignal, For, ParentProps, Show } from "solid-js";
import { useChapterContext } from "./ChapterContext";

export function FigureSet(props: ParentProps) {
  const resolved = children(() => props.children).toArray();
  const [activeFigure, setActiveFigure] = createSignal(0);
  const {chapter, getFigureNumber} = useChapterContext();
  return (
    <Show when={resolved.length > 0}>
      <span>
        <span>
          <For each={resolved}>
            {(child, index) => (
              <span class={activeFigure() !== index() ? "hidden" : undefined}>
                {child}
              </span>
            )}
          </For>
        </span>
        <Show when={resolved.length > 1}>
          <span>
            <For each={resolved}>
              {(_, index) => (
                <button onclick={() => setActiveFigure(index())}>
                  Figure {chapter}.{getFigureNumber()}
                </button>
              )}
            </For>
          </span>
        </Show>
      </span>
    </Show>
  );
}