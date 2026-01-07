import React from 'react';

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  style,
  ...props
}) {
  const baseStyle = {
    borderRadius: 6,
    cursor: 'pointer',
    fontSize: size === 'sm' ? 13 : 14,
    padding: size === 'sm' ? '6px 10px' : '8px 14px',
    border: '1px solid transparent',
  };

  const variants = {
    primary: {
      backgroundColor: '#111827',
      color: '#ffffff',
    },
    outline: {
      backgroundColor: 'transparent',
      color: '#111827',
      border: '1px solid #d1d5db',
    },
  };

  return (
    <button
      {...props}
      style={{
        ...baseStyle,
        ...variants[variant],
        ...style,
      }}
    >
      {children}
    </button>
  );
}