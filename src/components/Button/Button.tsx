import React from "react";
import Link from "gatsby-link";

import styles from "./styles.module.scss";

interface IProps {
  className?: string;
  fullWidth?: boolean;
  large?: boolean;
  medium?: boolean;
  withBackground?: boolean;
  withoutBackground?: boolean;
  label?: string;
  to?: string;
}

const Button: React.FC<IProps> = ({
  className,
  fullWidth,
  large,
  medium,
  withBackground,
  withoutBackground,
  label,
  to
}) => {
  return (
    <button
      className={`${styles.button} ${large && styles.large} ${fullWidth &&
        styles.fullWidth} ${medium && styles.medium} ${withBackground &&
        styles.withBackground} ${withoutBackground &&
        styles.withoutBackground} ${className}`}
    >
      {to ? <Link to={to} style={{color: 'inherit'}}>{label}</Link> : label}
    </button>
  );
};
export default Button;
