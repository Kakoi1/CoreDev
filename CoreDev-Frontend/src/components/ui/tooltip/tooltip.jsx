import PropTypes from "prop-types";
import "./tooltip.css";

export const Tooltip = ({ children, text, position }) => {
  return (
    <div className={`tooltip-container ${position}`}>
      {children}
      <span className="tooltip-text">{text}</span>
    </div>
  );
};

Tooltip.propTypes = {
  children: PropTypes.node.isRequired,
  text: PropTypes.string.isRequired,
  position: PropTypes.oneOf(["top", "right", "bottom", "left"]),
};

Tooltip.defaultProps = {
  position: "top",
};

