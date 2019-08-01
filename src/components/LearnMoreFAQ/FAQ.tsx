import React from "react";

import FAQItem from "./FAQItem";

import styles from "./styles.module.scss";

interface IDownloadItems {
  title: string;
  text: string;
}

interface IProps {
  heading?: string;
  faqItems: Array<IDownloadItems>;
}

const FAQ: React.FC<IProps> = ({ heading, faqItems }) => {
  return (
    <div className={styles.faq}>
      <h3 className={styles.heading}>{heading}</h3>
      <hr />

      {faqItems.map(({ title, text }, index) => (
        <FAQItem key={index} title={title} text={text} />
      ))}
    </div>
  );
};
export default FAQ;
