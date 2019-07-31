import React from "react";

import styles from "./styles.module.scss";

import download from "../../images/download.svg";

interface IDownloadItems {
  downloadLink: string;
  linkTitle: string;
  optionalText?: string;
}

interface IProps {
  heading: string;
  downloadItems: Array<IDownloadItems>;
}

const LearnMoreDownload: React.FC<IProps> = ({ heading, downloadItems }) => {
  return (
    <div className={styles.downlaod}>
      <h3 className={styles.heading}>{heading}</h3>
      <hr />
      {downloadItems.map(({downloadLink, linkTitle, optionalText }, index) => (
        <>
          <div className={styles.item}>
            <span className={styles.icon}>
              <img src={download} />
            </span>
            <a href={downloadLink} className={styles.link}>
              {linkTitle}
            </a>
            <span className={styles.optionalText}>
              — {optionalText}
            </span>
          </div>
          <hr />
        </>
      ))}
    </div>
  );
};
export default LearnMoreDownload;
