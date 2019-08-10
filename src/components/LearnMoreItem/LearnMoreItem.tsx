import React from "react";
import Link from "gatsby-link";
import ScrollAnimation from "react-animate-on-scroll";

import styles from "./styles.module.scss";

import icon from "../../images/arrow-right.svg";

export interface IItem {
  count: string;
  heading: string;
  text: string;
  linktext: string;
  linkTo: string;
  backgroundColor: string;
}

interface IProps {
  lang: string;
  items: Array<IItem>;
}

const LearnMoreItem: React.FC<IProps> = ({ lang, items }) => {
  return (
    <>
      <section className={styles.learMoreItem}>
        <div>
          <div className="container">
            <div className="columns is-gapless is-multiline">
              {items.map(item => (
                <div className="column is-half" key={item.count}>
                  <div className={`${styles.item}`}>
                    <ScrollAnimation
                      animateIn="zoomIn" 
                      duration={1}
                    >
                      <div
                        className={styles.circleWithCount}
                        style={{ backgroundColor: `${item.backgroundColor}` }}
                      >
                        <span className={styles.count}>{item.count}</span>
                      </div>
                    </ScrollAnimation>

                    <div className={` ${styles.content}`}>
                      <ScrollAnimation
                        animateIn="fadeIn"
                        animateOnce
                        duration={1}
                      >
                        <h3 className={styles.heading}>{item.heading}</h3>
                        <p className={styles.text}>{item.text}</p>
                        <Link
                          className={styles.link}
                          to={`/${lang}/${item.linkTo}/`}
                        >
                          {item.linktext} <img src={icon} alt="->" />
                        </Link>
                      </ScrollAnimation>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default LearnMoreItem;
