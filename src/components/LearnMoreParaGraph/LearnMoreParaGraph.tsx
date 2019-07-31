import React from "react";

import styles from "./styles.module.scss";

interface IProps {
  heading?: string;
  text: string;
}

const LearnMoreParaGraph: React.FC<IProps> = ({ text, heading }) => {
  return (
    <div className={styles.paragraph}>
      <h3 className={styles.heading}>{heading}</h3>
      <p className={styles.text}>{text}</p>
    </div>
  );
};
export default LearnMoreParaGraph;
