// import style from "TodoItem.module.css";
import PropTypes from "prop-types";

export const TodoItem = ({ name, title, phone, email }) => {
  return (
    <div>
      <p>{name}</p>
      <p>{title}</p>
      <p>{phone}</p>
      <p>{email}</p>
    </div>
  );
};

TodoItem.propTypes = {
  name: PropTypes.string,
  title: PropTypes.string,
  phone: PropTypes.number,
  email: PropTypes.string,
};
