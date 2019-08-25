import React from "react";
import ScrollAnimation from "react-animate-on-scroll";

import styles from "./styles.module.scss";

interface IProps {
  className?: string;
  heading?: string;
  subheading?: string;
}

const HomeFeatureItem: React.FC<IProps> = ({
  children,
  heading,
  subheading
}) => {
  return (
    <div className={`column ${styles.column}`}> 
        <div className={styles.icon}>{children}</div>

        <div className={styles.heading}>{heading}</div>

        <div className={styles.subheading}>{subheading}</div>
    </div>
  );
};
export default HomeFeatureItem;
