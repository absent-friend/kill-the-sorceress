import { children, createSignal, For, ParentProps } from "solid-js";

export default function FigureSet(props: ParentProps) {
  const resolved = children(() => props.children).toArray();
  const [activeFigure, setActiveFigure] = createSignal(0);
  function moveLeft() {
    const current = activeFigure();
    setActiveFigure(Math.max(current - 1, 0));
  }
  function moveRight() {
    const current = activeFigure();
    setActiveFigure(Math.min(current + 1, resolved.length - 1))
  }

  return (
    <div>
      <For each={resolved}>
        {(child, index) => (
          <div classList={{ 'hidden': activeFigure() !== index(), }}>
            {child}
          </div>
        )}
      </For>
      <div class="flex justify-center mb-2">
        <button onclick={moveLeft} class="group me-4">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke-width="1.5" 
            stroke="currentColor" 
            class="stroke-zinc-500 dark:stroke-zinc-400 group-active:stroke-zinc-600 group-active:dark:stroke-zinc-300 size-6"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
          </svg>
        </button>
        <For each={resolved}>
          {(_, index) => (
            <button onclick={() => setActiveFigure(index())} class="group">
              <span classList={{
                'block': true,
                'h-0.5': true,
                'w-8': true,
                'group-hover:bg-zinc-500': true,
                'group-hover:dark:bg-zinc-400': true,
                'group-active:bg-zinc-600': true,
                'group-active:dark:bg-zinc-300': true,
                'bg-zinc-400': activeFigure() !== index(),
                'dark:bg-zinc-500': activeFigure() !== index(),
                'bg-zinc-500': activeFigure() === index(),
                'dark:bg-zinc-400': activeFigure() === index(),
                'ms-1': index() !== 0,
                'me-1': index() !== resolved.length - 1 }}>
              </span>
            </button>
          )}
        </For>
        <button onclick={moveRight} class="group ms-4">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke-width="1.5" 
            stroke="currentColor" 
            class="stroke-zinc-500 dark:stroke-zinc-400 group-active:stroke-zinc-600 group-active:dark:stroke-zinc-300 size-6"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
          </svg>
        </button>
      </div>
    </div>
  );
}