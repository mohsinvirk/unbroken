import React from "react";

import styles from "./styles.module.scss";

interface IProps {
  text?: string;
}

const LearnMoreSubheading: React.FC<IProps> = ({ text }) => {
  return <p className={styles.subheading}>{text}</p>;
};
export default LearnMoreSubheading;
