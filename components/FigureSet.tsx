import { children, createSignal, For, ParentProps } from "solid-js";

export function FigureSet(props: ParentProps) {
  const resolved = children(() => props.children).toArray();
  const [activeFigure, setActiveFigure] = createSignal(0);
  return (
    <span>
      <For each={resolved}>
        {(child, index) => (
          <span classList={{ 'hidden': activeFigure() !== index(), }}>
            {child}
          </span>
        )}
      </For>
      <span class="flex justify-center">
        <For each={resolved}>
          {(_, index) => (
            <button onclick={() => setActiveFigure(index())} class="group">
              <span classList={{
                'block': true,
                'h-0.5': true,
                'w-8': true,
                'my-4': true,
                'group-hover:bg-slate-500': true,
                'group-active:bg-slate-600': true,
                'bg-slate-400': activeFigure() !== index(),
                'bg-slate-500': activeFigure() === index(),
                'ms-1': index() !== 0,
                'me-1': index() !== resolved.length - 1 }}>
              </span>
            </button>
          )}
        </For>
      </span>
    </span>
  );
}