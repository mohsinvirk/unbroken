import React from "react";
import Link from "gatsby-link";

import Navbar, { INavItems } from "../Navbar/Navbar";

import styles from "./styles.module.scss";

import arrow from "../../images/arrow-left.svg";
import icon from "../../images/icon.svg";

interface IProps {
  lang: string;
  navItems: Array<INavItems>;
  heading: string;
}

const LearnMoreItemHeader: React.FC<IProps> = ({ lang, navItems, heading }) => {
  return (
    <>
      <section className={styles.header}>
        <div className="container">
          <Navbar lang={lang} navItems={navItems} buttonLabel="Sign up" />
        </div>
        <div className={styles.headerContent}>
          <div className="container">
            <div className="column is-offset-4">
              <Link className={styles.back} to="/en/getting-started">
                <img src={arrow} alt="<-" />{" "}
                <span className={styles.backtext}>Overview</span>
              </Link>
            </div>
            <div className="columns">
              <div className="column is-offset-2 is-2">
                <div className={styles.headerCount}>
                  <span className={styles.count}>01</span>
                  <img src={icon} alt="-" />
                </div>
              </div>
              <div className="column">
                <h3 className={styles.heading}>Getting Started</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default LearnMoreItemHeader;
