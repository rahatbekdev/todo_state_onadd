import Proptypes from "prop-types";

export const Button = ({ text, className,onClick }) => {
  return (
    <button onClick={onClick} className={className}>
      {text}
    </button>
  );
};

Button.propTypes = {
  text: Proptypes.string,
  className: Proptypes.string,
  onClick: Proptypes.func,
};
