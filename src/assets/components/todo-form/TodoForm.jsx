import style from "./TodoForm.module.css";

import { Button } from "../UI/button/Button";
import { Input } from "../UI/input/Input";

export const TodoForm = () => {
  return (
    <div className={style.formGroup}>
      <div className={style.todoForms}>
        <div>
          <Input id="name" label="NAME" />
        </div>
        <div>
          <Input id="todo" label="YOUR TODO" />
        </div>
        <div>
          <Input id="phone" label="PHONE NUMBER" />
        </div>
        <div>
          <Input id="email" label="@MAIL" />
        </div>
        <Button className={style.btnOne} text="ADD" />
        <Button className={style.btnTwo} text="CLEAR ALL" />
      </div>
    </div>
  );
};
