import React, { ReactNode } from "react";

import styles from "./styles.module.scss";

interface IProps {
  children?: ReactNode;
}

const LearnMoreImage: React.FC<IProps> = ({ children }) => {
  return <div className={styles.image}>{children}</div>;
};
export default LearnMoreImage;
