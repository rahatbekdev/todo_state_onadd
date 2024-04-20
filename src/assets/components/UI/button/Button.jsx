import Proptypes from "prop-types";

export const Button = ({ text, className }) => {
  return <button className={className}>{text}</button>;
};

Button.propTypes = {
  text: Proptypes.string,
  className: Proptypes.string,
};
