import { createSignal, createEffect, For } from "solid-js";

function SolidTodo() {
  const [todos, setTodos] = createSignal([]);
  const [newTodo, setNewTodo] = createSignal("");

  const addTodo = () => {
    if (newTodo().trim() !== "") {
      setTodos([...todos(), { id: Date.now(), text: newTodo() }]);
      setNewTodo("");
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      addTodo();
    }
  };

  return (
    <>
      <div class="flex items-center bg-light-dark-blue p-4 rounded-lg">
        <input
          type="text"
          value={newTodo()}
          onInput={(event) => setNewTodo(event.target.value)}
          onKeyDown={handleKeyPress}
          placeholder="New todo..."
          class="flex-grow p-2 mr-4 rounded border border-teal-300 focus:border-teal-500"
        />
        <button
          onClick={addTodo}
          class="bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded">
          Add Todo
        </button>
      </div>
      <ul class="mt-4">
        <For each={todos()}>
          {(todo) => (
            <li
              key={todo.id}
              class="bg-light-dark-blue text-blue p-2 mt-2 rounded">
              {todo.text}
            </li>
          )}
        </For>
      </ul>
    </>
  );
}

export default SolidTodo;
