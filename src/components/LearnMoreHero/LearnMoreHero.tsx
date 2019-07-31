import React from "react";

import Navbar, { INavItems } from "../Navbar/Navbar";

import styles from "./styles.module.scss";

interface IProps {
  lang: string;
  navItems: Array<INavItems>;
  heading: string;
}

const LeranMoreHero: React.FC<IProps> = ({ lang, navItems, heading }) => {
  return (
    <>
      <section className={styles.header}>
        <div className="container">
          <Navbar lang={lang} navItems={navItems} buttonLabel="Sign up" />
        </div>
        <div>
          <div className="container">
            <h1 className={styles.heading}>{heading}</h1>
          </div>
        </div>
      </section>
    </>
  );
};
export default LeranMoreHero;
