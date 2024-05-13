// import { useState } from "react";
import { useState } from "react";
import { Todos } from "../interfaces/Todo";
import React from "react";

interface TodoListProps {
  todo: Todos;
  deleteFn: (id: number) => void;
  edit: (id: number, text: string) => void;
}

const TodoList = ({ todo, deleteFn, edit }: TodoListProps) => {
  const [newText, setNewString] = useState<string>(todo.text);
  const [open, setOpen] = useState<boolean>(false);

  const openModal = () => setOpen((prev) => !prev);

  return (
    <div>
      <p>{todo.text}</p>
      <input type="checkbox" checked={todo.isChecked} />
      <button onClick={() => deleteFn(todo.id)}>delete</button>
      <button onClick={openModal}>edit</button>

      {open && (
        <>
          <input
            type="text"
            value={newText}
            onChange={(e) => setNewString(e.target.value)}
          />

          <button onClick={() => edit(todo.id, newText)}>change`</button>
        </>
      )}
    </div>
  );
};

export default TodoList;
