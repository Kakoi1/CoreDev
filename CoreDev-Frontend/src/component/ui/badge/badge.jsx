import PropTypes from 'prop-types';
import './badge.css';

export const Badge = ({ children, color, size }) => {
  return (
    <span className={`badge badge-${color} badge-${size}`}>
      {children}
    </span>
  );
};

Badge.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.oneOf(['default', 'success', 'error', 'warning', 'info']),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
};

Badge.defaultProps = {
  color: 'default',
  size: 'md',
};

