// import style from "./CreateTodo.module.css";
import PropTypes from "prop-types";
import { TodoItem } from "../todo-item/TodoItem";

export const CreateTodo = ({ todo }) => {
  return (
    <div>
      {todo.map((item) => {
        return (
          <TodoItem
            key={item.id}
            name={item.name}
            title={item.title}
            phone={parseInt(item.phone)}
            email={item.email}
          />
        );
      })}
    </div>
  );
};

CreateTodo.propTypes = {
  todo: PropTypes.array.isRequired,
};
