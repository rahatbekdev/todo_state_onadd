import style from "./TodoForm.module.css";
import PropTypes from "prop-types";

import { Button } from "../UI/button/Button";
import { Input } from "../UI/input/Input";
// import { CreateTodo } from "../create-todo/CreateTodo";

export const TodoForm = ({ closeForm }) => {
  const f1 = () => {
    console.log("11111");
   
  };
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
          <Input type="number" id="phone" label="PHONE NUMBER" />
        </div>
        <div>
          <Input id="email" label="@MAIL" />
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
