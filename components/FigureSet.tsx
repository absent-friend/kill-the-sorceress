import { children, createSignal, For, ParentProps } from "solid-js";
import { useChapterContext } from "./ChapterContext";

export function FigureSet(props: ParentProps) {
  const resolved = children(() => props.children).toArray();
  const [activeFigure, setActiveFigure] = createSignal(0);
  const {chapter, getFigureNumber} = useChapterContext();
  return (
    <span class="ms-auto ps-2 shrink-0">
      <span class="inline-block text-center w-[640px]">
        <For each={resolved}>
          {(child, index) => (
            <span classList={{ 'hidden': activeFigure() !== index(), }}>
              {child}
            </span>
          )}
        </For>
      </span>
      <span class="flex justify-center">
        <For each={resolved}>
          {(_, index) => (
            <button 
              onclick={() => setActiveFigure(index())} 
              classList={{ 
                'border-2': true, 
                'border-solid': true, 
                'border-black': true, 
                'px-2': true,
                'py-1': true,
                'rounded-s': index() === 0, 
                'rounded-e': index() === resolved.length - 1, 
                'border-s': index() !== 0, 
                'border-e': index() !== resolved.length - 1 }}
            >
              Figure {chapter}.{getFigureNumber()}
            </button>
          )}
        </For>
      </span>
    </span>
  );
}