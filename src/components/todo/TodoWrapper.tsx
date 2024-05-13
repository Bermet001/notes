import { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import { Todos } from "../interfaces/Todo";
import React from "react";

const TodoWrapper = () => {
  const [todos, setTodos] = useState<Todos[]>([]);
  const [id, setId] = useState<number>(1);

  const deleteTodo = (id: number) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const editTodo = (id: number, newText: string): void => {
    const editedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, text: newText } : todo
    );

    setTodos(editedTodos);
  };

  const addTodo = (text: string) => {
    const newTodo = {
      text,
      id,
      isChecked: false,
    };

    setTodos((prev) => [...prev, newTodo]);

    setId((prev) => prev + 1);
  };

  return (
    <div>
      <TodoForm onAddTodo={addTodo} />
      {todos.map((todo) => (
        <TodoList
          key={todo.id}
          todo={todo}
          deleteFn={deleteTodo}
          edit={editTodo}
        />
      ))}
    </div>
  );
};

export default TodoWrapper;
