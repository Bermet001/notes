import React from "react";
import { FormEvent, useState } from "react";

interface TodoFormProps {
  onAddTodo: (text: string) => void;
}

const TodoForm = ({ onAddTodo }: TodoFormProps) => {
  const [value, setValue] = useState<string>("");

  const handlerSubmit = (e: FormEvent) => {
    e.preventDefault();

    onAddTodo(value);
  };

  return (
    <form onSubmit={handlerSubmit}>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        type="text"
      />

      <button type="submit">add</button>
    </form>
  );
};

export default TodoForm;
