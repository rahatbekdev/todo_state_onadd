import style from "./AddTodo.module.css";

import { useState } from "react";
import { Button } from "../UI/button/Button";
import { TodoForm } from "../todo-form/TodoForm";

export const AddTodo = () => {
  const [add, setAdd] = useState(false);

  const todoClick = () => {
    setAdd((prev) => !prev);
  };
  return (
    <div className={style.todoHeader}>
      <div className={style.todoHeaderBox}>
        {/* <h1>Your TO-DO LIST...</h1> */}
        {add ? (
          <TodoForm closeForm={todoClick} />
        ) : (
          <Button onClick={todoClick} text="add todo" />
        )}
      </div>
    </div>
  );
};
