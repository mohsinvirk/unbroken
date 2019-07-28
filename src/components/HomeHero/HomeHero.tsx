import React from "react";
import Link from "gatsby-link";

import Navbar, { INavItems } from "../Navbar/Navbar";

import styles from "./styles.module.scss";

interface IProps {
  lang: string;
  navItems: Array<INavItems>;
}

const Header: React.FC<IProps> = ({ lang, navItems }) => {
  return (
    <>
      <section className={`hero ${styles.homeHero}`}>
        <div className="container">
          <Navbar lang={lang} navItems={navItems} buttonLabel="Sign up" />
        </div>
        <div className="hero-body">
          <div className="container">
            <h1 className="title">Primary title</h1>
            <h2 className="subtitle">Primary subtitle</h2>
          </div>
        </div>
      </section>
    </>
  );
};
export default Header;
