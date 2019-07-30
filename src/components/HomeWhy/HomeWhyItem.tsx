import React from "react";
import { StaticQuery } from "gatsby";
import Img from "gatsby-image";

import styles from "./styles.module.scss";

interface IProps {
  heading?: string;
  subheading?: string;
}

const HomeWhy: React.FC<IProps> = ({ heading, subheading }) => {
  return (
    <div className={`column is-half ${styles.whyItem}`}>
      <h1 className={styles.whyItemHeading}>{heading}</h1>
      <p className={styles.whyItemSubHeading}>{subheading}</p>
    </div>
  );
};
export default HomeWhy;
