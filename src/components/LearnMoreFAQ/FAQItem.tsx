import React from "react";

import styles from "./styles.module.scss";

import faqopen from "../../images/faq-open.svg";
import faqclose from "../../images/faq-close.svg";

interface IProps {
  title: string;
  text: string;
}

const FAQItem: React.FC<IProps> = ({ title, text }) => {
  const [open, setOpen] = React.useState<boolean>(false);
  return (
    <>
      <div className={styles.item}>
        <div className={styles.title} onClick={() => setOpen(!open)}>
          <h3 className={`${styles.titleText} ${open && styles.open}`}>
            {title}
          </h3>
          <img src={open ? faqopen : faqclose} className={styles.icon} />
        </div>

        {open && <div className={styles.text}>{text}</div>}
      </div>
      <hr />
    </>
  );
};
export default FAQItem;
