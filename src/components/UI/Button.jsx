import React from 'react';
import PropTypes from 'prop-types';

// Reusable Button component with color and size options
// Props: children (content), color (style), size (dimensions), ...props (other button props)
const Button = ({ children, color = 'blue', size = 'md', ...props }) => {
  // Define color classes for different button styles
  const colorClasses = {
    blue: 'bg-blue-500 hover:bg-blue-600 text-white',
    red: 'bg-red-500 hover:bg-red-600 text-white',
    green: 'bg-green-500 hover:bg-green-600 text-white',
    gray: 'bg-gray-500 hover:bg-gray-600 text-white',
    outline: 'border border-gray-400 text-gray-700 hover:bg-gray-100',
  };
  // Define size classes for different button sizes
  const sizeClasses = {
    sm: 'px-3 py-1 text-sm',
    md: 'px-6 py-2',
    lg: 'px-8 py-3 text-lg',
  };
  return (
    <button
      className={`rounded transition ${colorClasses[color] || colorClasses.blue} ${sizeClasses[size] || sizeClasses.md}`}
      {...props}
    >
      {children}
    </button>
  );
};

// Prop types for Button component
Button.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.oneOf(['blue', 'red', 'green', 'gray', 'outline']),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
};

export default Button;
