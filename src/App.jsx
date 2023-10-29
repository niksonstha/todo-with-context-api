import { useEffect, useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoItems from "./components/TodoItems";
import { TodoProvider } from "./contexts/todoContext";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev]);
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const updateTodo = (id, todo) => {
    setTodos((prev) =>
      prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo))
    );
  };

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));

    if (todos && todos.length > 0) {
      setTodos(todos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoProvider value={{ todos, addTodo, deleteTodo, updateTodo }}>
      <TodoForm />

      {todos.map((todo) => (
        <TodoItems key={todo.id} todo={todo} />
      ))}
    </TodoProvider>
  );
}

export default App;
