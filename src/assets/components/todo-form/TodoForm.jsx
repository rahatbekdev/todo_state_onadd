import style from "./TodoForm.module.css";
import PropTypes from "prop-types";

import { Button } from "../UI/button/Button";
import { Input } from "../UI/input/Input";
import { useState } from "react";
// import { CreateTodo } from "../create-todo/CreateTodo";

// eslint-disable-next-line react/prop-types
export const TodoForm = ({ closeForm, onAdd }) => {
  const [name, setName] = useState("");
  const [todo, setTodo] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const f1 = (event) => {
    event.preventDefault();
    // console.log("11111");
    const f5 = {
      name: name,
      todo: todo,
      phone: +phone,
      email: email,
    };
    onAdd(f5);
  };

  const nameAddHandler = (event) => {
    setName(event.target.value);
  };

  const todoAddHandler = (event) => {
    setTodo(event.target.value);
  };

  const phoneAddHandler = (event) => {
    setPhone(event.target.value);
  };

  const emailAddHandler = (event) => {
    setEmail(event.target.value);
  };

  return (
    <div className={style.formGroup}>
      <div className={style.todoForms}>
        <div>
          <Input
            type="text"
            id="name"
            label="NAME"
            onChange={nameAddHandler}
            value={name}
          />
        </div>
        <div>
          <Input
            type="text"
            id="todo"
            label="YOUR TODO"
            onChange={todoAddHandler}
            value={todo}
          />
        </div>
        <div>
          <Input
            type="number"
            id="phone"
            label="PHONE NUMBER"
            onChange={phoneAddHandler}
            value={phone}
          />
        </div>
        <div>
          <Input
            type="text"
            id="email"
            label="@MAIL"
            onChange={emailAddHandler}
            value={email}
          />
        </div>
        <Button className={style.btnOne} text="добавить" onClick={f1} />
        <Button className={style.btnTwo} text="отмена" onClick={closeForm} />
      </div>
    </div>
  );
};

TodoForm.propTypes = {
  closeForm: PropTypes.func,
};
