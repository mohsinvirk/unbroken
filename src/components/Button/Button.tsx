import React from "react";
import Link from "gatsby-link";

import Navbar, { INavItems } from "../Navbar/Navbar";

import styles from "./styles.module.scss";

interface IProps {
  className?: string;
  large?: boolean;
  medium?: boolean;
  withBackground?: boolean;
  withoutBackground?: boolean;
  label?: string;
}

const Button: React.FC<IProps> = ({
  className,
  large,
  medium,
  withBackground,
  withoutBackground,
  label
}) => {
  return (
    <button
      className={`${styles.button} ${large && styles.large} ${medium &&
        styles.medium} ${withBackground &&
        styles.withBackground} ${withoutBackground &&
        styles.withoutBackground} ${className}`}
    >
      {label}
    </button>
  );
};
export default Button;
