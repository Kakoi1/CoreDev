import "./button.css";
import PropTypes from "prop-types";

export const Button = ({
  text,
  icon,
  onClick,
  type = "button",
  disabled = false,
  variant = "full",
  size = "md",
}) => {
  const classes = `custom-button ${variant} ${size}`;

  return (
    <button className={classes} onClick={onClick} type={type} disabled={disabled}>
      {text && <span className="btn-text">{text}</span>}
      {icon&& <span className="btn-icon right">{icon}</span>}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string,
  icon: PropTypes.node,
  onClick: PropTypes.func,
  type: PropTypes.string,
  disabled: PropTypes.bool,
  variant: PropTypes.oneOf(["full", "outline"]),
  size: PropTypes.oneOf(["sm", "md", "lg"]),
};
