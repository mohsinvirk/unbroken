import React from "react";
import ScrollAnimation from "react-animate-on-scroll";

import styles from "./styles.module.scss";

interface IProps {
  heading?: string;
  subheading?: string;
}

const HomeWhy: React.FC<IProps> = ({ heading, subheading }) => {
  return (
    <div className={`column is-half ${styles.whyItem}`}>
      <ScrollAnimation animateIn="fadeIn" animateOnce duration={1}>
        <h1 className={styles.whyItemHeading}>{heading}</h1>
        <p className={styles.whyItemSubHeading}>{subheading}</p>
      </ScrollAnimation>
    </div>
  );
};
export default HomeWhy;
