import React, { ReactNode } from "react";

import styles from "./styles.module.scss";

interface IProps {
  children?: ReactNode;
}

const LearnMoreVideo: React.FC<IProps> = ({ children }) => {
  return <div className={styles.video}>{children}</div>;
};
export default LearnMoreVideo;
