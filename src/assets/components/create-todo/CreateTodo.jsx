// import style from "./CreateTodo.module.css";
import PropTypes from "prop-types";
import { TodoItem } from "../todo-item/TodoItem";

export const CreateTodo = ({ data }) => {
  return (
    <ul>
      {data.map((item) => {
        return (
          <TodoItem
            key={item.id}
            name={item.name}
            title={item.title}
            phone={item.phone}
            email={item.email}
          />
        );
      })}
    </ul>
  );
};

CreateTodo.propTypes = {
  data: PropTypes.array.isRequired,
};
