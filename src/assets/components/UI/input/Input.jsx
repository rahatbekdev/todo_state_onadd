import PropTypes from "prop-types";
import css from "./Input.module.css";

export const Input = ({
  id,
  label,
  className,
  type,
  placeholder,
  onChange,
  value,
}) => {
  return (
    <div className={css.firmsInput}>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        className={className}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
    </div>
  );
};
Input.propTypes = {
  label: PropTypes.string,
  className: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  id: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
