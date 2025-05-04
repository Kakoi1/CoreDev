import React from 'react';
import PropTypes from 'prop-types';
import { ImSpinner8 } from "react-icons/im";
import "./loading.css"

export const ComponentLoading = React.forwardRef(({ isLoading, message }, ref) => {
  if (!isLoading) return null;

  return (
    <div ref={ref} className="loading-container">
      <ImSpinner8 className="loading-icon" />
      {<p className="loading-message">{message}</p>}
    </div>
  );
});

ComponentLoading.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  message: PropTypes.string,
  ref: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
};

ComponentLoading.defaultProps = {
  message: 'Loading...',
};

ComponentLoading.displayName = ComponentLoading

