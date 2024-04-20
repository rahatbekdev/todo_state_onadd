import style from "./TodoItem.module.css";
import PropTypes from "prop-types";

export const TodoItem = ({ name, title, phone, email }) => {
  return (
    <div className={style.f5}>
      <p>{name}</p>
      <p>{title}</p>
      <div>
        <p>{phone}</p>
        <p>{email}</p>
      </div>
    </div>
  );
};

TodoItem.propTypes = {
  name: PropTypes.string,
  title: PropTypes.string,
  phone: PropTypes.number,
  email: PropTypes.string,
};
