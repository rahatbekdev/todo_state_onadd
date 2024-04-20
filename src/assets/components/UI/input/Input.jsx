import Proptypes from "prop-types";
import css from "./Input.module.css";

export const Input = ({ id, label, className, type, placeholder }) => {
  return (
    <div className={css.firmsInput}>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        className={className}
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
};
Input.propTypes = {
  label: Proptypes.string,
  className: Proptypes.string,
  type: Proptypes.string,
  placeholder: Proptypes.string,
  id: Proptypes.string,
};
