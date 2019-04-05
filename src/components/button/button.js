import React from 'react';
import { Link } from 'gatsby';
import styles from './button.module.scss';

export default function Button({
  className,
  children,
  to,
  inverse,
  size,
  onClick,
}) {
  const sizes = {
    sm: styles.sm,
    md: styles.md,
    lg: styles.lg,
  };
  return (
    <>
      {to ? (
        <Link
          className={`${styles.button} ${size ? sizes[size] : sizes.md} ${
            inverse ? styles.inverse : ''
          } ${className}`}
          to={to}
          onClick={onClick}
        >
          {children}
        </Link>
      ) : (
        <button
          className={`${styles.button} ${size ? sizes[size] : sizes.md} ${
            inverse ? styles.inverse : ''
          } ${className}`}
          onClick={onClick}
        >
          {children}
        </button>
      )}
    </>
  );
}
