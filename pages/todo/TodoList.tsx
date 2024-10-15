import { createSignal, For, untrack } from "solid-js";

export function TodoList(props: { initialTodoItems: { text: string }[] }) {
  const [todoItems, setTodoItems] = createSignal(props.initialTodoItems);
  const [newTodo, setNewTodo] = createSignal("");
  return (
    <>
      <ul>
        <For each={todoItems()}>{(todoItem) => <li>{todoItem.text}</li>}</For>
      </ul>
      <div>
        <form
          onSubmit={async (ev) => {
            ev.preventDefault();

            // Optimistic UI update
            setTodoItems((prev) => [...prev, { text: untrack(newTodo) }]);
          }}
        >
          <input type="text" onChange={(ev) => setNewTodo(ev.target.value)} value={newTodo()} />{" "}
          <button type="submit">Add to-do</button>
        </form>
      </div>
    </>
  );
}
